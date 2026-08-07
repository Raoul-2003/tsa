import { orientationData } from '../data/orientation.js';

let activeCategory = null;

function renderOrientationCards() {
  const container = document.getElementById('orientation-cards');
  if (!container) return;

  const markup = orientationData.categories.map((card) => {
    const isActive = activeCategory === card.id;
    const activeClass = isActive ? 'ring-2 ring-primary ring-offset-2' : '';
    
    if (card.variant === 'large') {
      return `
        <button type="button" data-category="${card.id}" aria-expanded="${isActive}" aria-controls="orientation-details" class="text-left w-full ${card.cardClass} ${activeClass}">
          <div class="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 orientation-card-image"></div>
          <div class="relative z-10">
            <div class="${card.iconClass}">
              <span class="material-symbols-outlined">${card.icon}</span>
            </div>
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">${card.title}</h2>
            <p class="font-body-md text-body-md text-on-surface-variant mb-md max-w-md">${card.description}</p>
            <div class="${card.buttonClass}">
              ${card.buttonText}
              <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </div>
        </button>
      `;
    }

    if (card.variant === 'accent') {
      return `
        <button type="button" data-category="${card.id}" aria-expanded="${isActive}" aria-controls="orientation-details" class="text-left w-full ${card.cardClass} ${activeClass}">
          <div class="relative z-10 h-full flex flex-col">
            <div class="${card.iconClass}">
              <span class="material-symbols-outlined">${card.icon}</span>
            </div>
            <h2 class="font-headline-lg text-headline-lg text-on-primary mb-xs">${card.title}</h2>
            <p class="font-body-md text-body-md text-primary-fixed-dim mb-md">${card.description}</p>
            <div class="${card.buttonClass}">
              ${card.buttonText}
              <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </div>
          <svg class="absolute bottom-0 right-0 text-white/10 w-32 h-32 translate-x-1/4 translate-y-1/4" fill="currentColor" viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z"></path>
          </svg>
        </button>
      `;
    }

    return `
      <button type="button" data-category="${card.id}" aria-expanded="${isActive}" aria-controls="orientation-details" class="text-left w-full ${card.cardClass} ${activeClass}">
        <div>
          <div class="flex items-center gap-sm mb-md">
            <div class="${card.iconClass}">
              <span class="material-symbols-outlined text-[18px]">${card.icon}</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface">${card.title}</h3>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">${card.description}</p>
        </div>
        <div class="${card.buttonClass}">
          ${card.buttonText}
          <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
        </div>
      </button>
    `;
  }).join('');

  container.innerHTML = markup;
}

function renderCategoryDetails() {
  const detailsContainer = document.getElementById('orientation-details');
  if (!detailsContainer) return;

  if (!activeCategory) {
    detailsContainer.innerHTML = '';
    detailsContainer.classList.add('hidden');
    return;
  }

  const details = orientationData.details[activeCategory];
  if (!details) {
    detailsContainer.innerHTML = '';
    detailsContainer.classList.add('hidden');
    return;
  }

  detailsContainer.innerHTML = `
    <div class="bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant/30 shadow-md animate-[fade-in-up_0.3s_ease-out_forwards]">
      <div class="flex items-center justify-between mb-md">
        <h3 class="font-headline-md text-on-surface">${details.title}</h3>
        <button type="button" aria-label="Fermer" class="text-on-surface-variant hover:text-on-surface hover:bg-surface-container p-xs rounded-full transition-colors" id="close-details-btn">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <p class="text-body-md text-on-surface-variant">${details.description}</p>
    </div>
  `;
  detailsContainer.classList.remove('hidden');

  document.getElementById('close-details-btn')?.addEventListener('click', () => {
    activeCategory = null;
    renderOrientationCards();
    renderCategoryDetails();
  });
}

export function initOrientationCards() {
  renderOrientationCards();
  
  const container = document.getElementById('orientation-cards');
  if (container) {
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-category]');
      if (btn) {
        const category = btn.getAttribute('data-category');
        if (activeCategory === category) {
          activeCategory = null;
        } else {
          activeCategory = category;
        }
        
        renderOrientationCards();
        renderCategoryDetails();
        
        if (activeCategory) {
          setTimeout(() => {
            document.getElementById('orientation-details')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        }
      }
    });
  }
}
