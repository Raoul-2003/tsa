/**
 * animation.js
 * Utilitaires d'animation réutilisables sur toutes les pages.
 *
 * Les keyframes (fade-in-up, float, spin) sont déclarés dans style.css.
 * Ce module fournit les helpers JS qui appliquent ces animations
 * via l'API style.animation, en respectant les délais de stagger.
 *
 * Dépendances : aucune
 * Utilisé par : observer.js, app.js
 */

/**
 * Applique l'animation fade-in-up sur un élément.
 *
 * @param {HTMLElement} el      - L'élément cible
 * @param {string}      delay   - Délai CSS ex. "200ms" (défaut : "0s")
 * @param {string}      duration - Durée CSS (défaut : "0.6s")
 */
export function applyFadeInUp(el, delay = '0s', duration = '0.6s') {
  el.style.animation = `fade-in-up ${duration} ease-out forwards ${delay}`;
}

/**
 * Lit le délai de transition déjà posé sur l'élément via style.transitionDelay
 * (ex. style="transition-delay: 200ms;" dans le HTML).
 * Fallback à "0s" si absent.
 *
 * @param {HTMLElement} el
 * @returns {string}
 */
export function getElementDelay(el) {
  return el.style.transitionDelay || window.getComputedStyle(el).transitionDelay || '0s';
}
