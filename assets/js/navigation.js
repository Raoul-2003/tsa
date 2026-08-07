/**
 * navigation.js
 * Gère la navigation globale :
 *  - Menu mobile (hamburger toggle)
 *  - Active state automatique basé sur l'URL courante
 *  - Fermeture du menu mobile au clic sur un lien
 *
 * Dépendances : aucune
 * Utilisé par : app.js → initNavigation()
 *
 * Prérequis HTML :
 *  - Bouton hamburger : <button data-nav-toggle>
 *  - Menu mobile     : <nav class="mobile-nav" id="mobile-nav">
 *  - Nav desktop     : les <a> du header avec href correspondant aux pages
 */

/**
 * Marque le lien actif dans la nav desktop et mobile
 * en comparant href à l'URL courante.
 */
function setActiveLinks() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('header nav a, .mobile-nav a').forEach((link) => {
    const fullHref = link.getAttribute('href') || '';
    const hasHash = fullHref.includes('#');
    const linkPage = fullHref.split('#')[0] || '';

    // Ne pas marquer les liens d'ancre comme page active
    if (hasHash) {
      link.classList.remove('font-bold', 'text-primary');
      link.setAttribute('aria-current', 'false');
      return;
    }

    // Cas de la page d'accueil
    const isHome =
      (currentPage === '' || currentPage === 'index.html') &&
      (linkPage === 'index.html' || linkPage === '');

    const isMatch = isHome || (linkPage !== '' && currentPage === linkPage);

    if (isMatch) {
      link.classList.add('text-primary', 'font-bold');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('font-bold', 'text-primary');
      link.setAttribute('aria-current', 'false');
    }
  });
}

/**
 * Initialise le menu mobile.
 * Le bouton [data-nav-toggle] ouvre/ferme #mobile-nav (.mobile-nav).
 */
function setMenuState(isOpen) {
  const toggleBtn = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-nav-overlay');

  if (!toggleBtn || !mobileNav) return;

  mobileNav.classList.toggle('open', isOpen);
  overlay?.classList.toggle('open', isOpen);
  toggleBtn.classList.toggle('is-open', isOpen);
  toggleBtn.setAttribute('aria-expanded', String(isOpen));

  const icon = toggleBtn.querySelector('.material-symbols-outlined');
  if (icon) icon.textContent = isOpen ? 'close' : 'menu';

  document.body.classList.toggle('mobile-menu-open', isOpen);
  document.documentElement.classList.toggle('mobile-menu-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  document.documentElement.style.overflow = isOpen ? 'hidden' : '';
}

function initMobileMenu() {
  const toggleBtn = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.getElementById('mobile-nav');

  if (!toggleBtn || !mobileNav) return;

  let overlay = document.getElementById('mobile-nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'mobile-nav-overlay';
    overlay.className = 'mobile-nav-overlay';
    document.body.appendChild(overlay);
  }

  toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = !mobileNav.classList.contains('open');
    setMenuState(isOpen);
  });

  overlay.addEventListener('click', () => setMenuState(false));

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });

  document.addEventListener('click', (event) => {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(event.target) &&
      !toggleBtn.contains(event.target) &&
      !overlay.contains(event.target)
    ) {
      setMenuState(false);
    }
  });
}

/**
 * Point d'entrée du module navigation.
 * À appeler après DOMContentLoaded.
 */
export function initNavigation() {
  setActiveLinks();
  initMobileMenu();
}
