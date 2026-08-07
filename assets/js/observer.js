/**
 * observer.js
 * IntersectionObserver centralisé pour les animations au scroll.
 *
 * Gère les classes :
 *  - .stat-card      → fade-in-up 0.6s (avec stagger via transitionDelay)
 *  - .feature-header → fade-in-up 0.8s
 *  - .feature-card   → fade-in-up 0.6s (avec stagger)
 *
 * Une fois l'animation déclenchée, on arrête d'observer l'élément
 * (obs.unobserve) pour éviter les re-triggers inutiles.
 *
 * Dépendances : animation.js
 * Utilisé par : app.js → initObserver()
 */

import { applyFadeInUp, getElementDelay } from './animation.js';

/** Sélecteurs observés et leur configuration d'animation */
const OBSERVED_SELECTORS = [
  { selector: '.stat-card',      duration: '0.6s', useDelay: true  },
  { selector: '.feature-header', duration: '0.8s', useDelay: false },
  { selector: '.feature-card',   duration: '0.6s', useDelay: true  },
];

/**
 * Initialise l'IntersectionObserver sur toutes les pages.
 * À appeler après DOMContentLoaded.
 */
export function initObserver() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const config = OBSERVED_SELECTORS.find(({ selector }) =>
          el.matches(selector)
        );

        if (config) {
          const delay = config.useDelay ? getElementDelay(el) : '0s';
          applyFadeInUp(el, delay, config.duration);
          el.classList.add('animated'); // Marque l'élément pour le CSS
        }

        obs.unobserve(el);
      });
    },
    { threshold: 0.1 }
  );

  // Enregistre tous les éléments ciblés présents dans la page courante
  OBSERVED_SELECTORS.forEach(({ selector }) => {
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  });
}
