(function () {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  const toast = form.querySelector('[data-contact-toast]');
  const defaultButtonText = button ? button.innerHTML : 'Send Message';
  let isSubmitting = false;

  function getConfigValue(key) {
    return form.dataset[key] || (window.emailjsConfig && window.emailjsConfig[key]) || '';
  }

  function initEmailJS() {
    const publicKey = getConfigValue('publicKey');
    if (publicKey && window.emailjs && typeof window.emailjs.init === 'function') {
      window.emailjs.init(publicKey);
    }
  }

  function setFieldError(name, message) {
    const input = form.querySelector(`[name="${name}"]`);
    const errorEl = form.querySelector(`[data-error-for="${name}"]`);

    if (input) {
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    if (errorEl) {
      errorEl.textContent = message || '';
    }
  }

  function clearErrors() {
    form.querySelectorAll('[data-error-for]').forEach((el) => {
      el.textContent = '';
    });
    form.querySelectorAll('input, textarea').forEach((input) => {
      input.setAttribute('aria-invalid', 'false');
    });
  }

  function showToast(message, type = 'success') {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0', 'px-4', 'py-3', 'rounded-lg', 'shadow-lg', 'text-on-primary');

    toast.classList.remove('bg-primary', 'bg-error');
    toast.classList.add(type === 'error' ? 'bg-error' : 'bg-primary');

    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 4000);
  }

  function setSubmittingState(isLoading) {
    if (!button) return;

    button.disabled = isLoading;
    button.classList.toggle('opacity-70', isLoading);
    button.classList.toggle('cursor-not-allowed', isLoading);

    if (isLoading) {
      button.innerHTML = '<span class="inline-flex items-center gap-2"><span class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>Sending...</span>';
    } else {
      button.innerHTML = defaultButtonText;
    }
  }

  function validateField(name, value) {
    const trimmedValue = String(value || '').trim();

    if (name === 'firstName' || name === 'lastName') {
      return trimmedValue.length >= 2 ? '' : 'Veuillez saisir au moins 2 caractères.';
    }

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(trimmedValue) ? '' : 'Veuillez saisir une adresse e-mail valide.';
    }

    if (name === 'message') {
      return trimmedValue.length >= 10 ? '' : 'Veuillez écrire un message d’au moins 10 caractères.';
    }

    return '';
  }

  function validateForm(formData) {
    const errors = [];
    const names = ['firstName', 'lastName', 'email', 'message'];

    names.forEach((name) => {
      const value = formData.get(name);
      const error = validateField(name, value);
      setFieldError(name, error);
      if (error) {
        errors.push(name);
      }
    });

    return errors;
  }

  form.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('input', () => {
      const error = validateField(field.name, field.value);
      setFieldError(field.name, error);
    });
  });

  initEmailJS();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    clearErrors();

    const formData = new FormData(form);
    const validationErrors = validateForm(formData);

    if (validationErrors.length > 0) {
      const firstInvalid = form.querySelector(`[name="${validationErrors[0]}"]`);
      firstInvalid?.focus();
      showToast('Veuillez corriger les erreurs ci-dessous.', 'error');
      return;
    }

    const serviceId = getConfigValue('serviceId');
    const templateId = getConfigValue('templateId');
    const publicKey = getConfigValue('publicKey');

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Nouveau message depuis la bibliothèque TSA`);
      const body = encodeURIComponent(`Nom: ${formData.get('firstName')} ${formData.get('lastName')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`);
      window.location.href = `mailto:contact@tsa-biblio.edu?subject=${subject}&body=${body}`;
      showToast('Votre client de messagerie a été ouvert. Merci pour votre message.', 'success');
      return;
    }

    isSubmitting = true;
    setSubmittingState(true);

    try {
      await window.emailjs.send(serviceId, templateId, {
        from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
        email: formData.get('email'),
        message: formData.get('message')
      }, publicKey);

      form.reset();
      clearErrors();
      showToast('Message envoyé avec succès. Nous vous répondrons bientôt.', 'success');
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      showToast('L’envoi a échoué. Veuillez réessayer plus tard.', 'error');
    } finally {
      isSubmitting = false;
      setSubmittingState(false);
    }
  });
})();
