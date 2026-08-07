import { orientationData } from '../data/orientation.js';

function renderOrientationCards() {
  const container = document.getElementById('orientation-cards');
  if (!container) return;

  const groups = [
    { key: 'écoles', items: orientationData.écoles, extraClass: 'md:col-span-8' },
    { key: 'concours', items: orientationData.concours, extraClass: 'md:col-span-4' },
    { key: 'passerelles', items: orientationData.passerelles, extraClass: 'md:col-span-4' },
    { key: 'universités', items: orientationData.universités, extraClass: 'md:col-span-4' },
    { key: 'bourses', items: orientationData.bourses, extraClass: 'md:col-span-4' }
  ];

  const markup = groups
    .flatMap(({ items }) => items)
    .map((card) => {
      if (card.variant === 'large') {
        return `
          <div class="${card.cardClass}">
            <div class="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 orientation-card-image"></div>
            <div class="relative z-10">
              <div class="${card.iconClass}">
                <span class="material-symbols-outlined">${card.icon}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">${card.title}</h2>
              <p class="font-body-md text-body-md text-on-surface-variant mb-md max-w-md">${card.description}</p>
              ${card.href ? `<a href="${card.href}" target="_blank" class="${card.buttonClass}">` : `<button class="${card.buttonClass}">`}
                ${card.buttonText}
                <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
              ${card.href ? `</a>` : `</button>`}
            </div>
          </div>
        `;
      }

      if (card.variant === 'accent') {
        return `
          <div class="${card.cardClass}">
            <div class="relative z-10">
              <div class="${card.iconClass}">
                <span class="material-symbols-outlined">${card.icon}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-primary mb-xs">${card.title}</h2>
              <p class="font-body-md text-body-md text-primary-fixed-dim mb-md">${card.description}</p>
              <button class="${card.buttonClass}">
                ${card.buttonText}
                <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
            <svg class="absolute bottom-0 right-0 text-white/10 w-32 h-32 translate-x-1/4 translate-y-1/4" fill="currentColor" viewBox="0 0 100 100">
              <path d="M50 0 L100 50 L50 100 L0 50 Z"></path>
            </svg>
          </div>
        `;
      }

      return `
        <div class="${card.cardClass}">
          <div>
            <div class="flex items-center gap-sm mb-md">
              <div class="${card.iconClass}">
                <span class="material-symbols-outlined text-[18px]">${card.icon}</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface">${card.title}</h3>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant">${card.description}</p>
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = markup;
}

export function initOrientationCards() {
  renderOrientationCards();
}
