/**
 * faq.js
 * Gère l'accordion FAQ de orientation.html.
 *
 * Comportement :
 *  - Un seul item ouvert à la fois (accordion)
 *  - L'icône tourne à 180° quand l'item est ouvert
 *  - Utilise les classes CSS définies dans style.css :
 *      .faq-content       → display: none par défaut
 *      .faq-content.open  → display: block
 *      .faq-icon.rotated  → transform: rotate(180deg)
 *
 * Dépendances : aucune
 * Utilisé par : app.js → initFaq()
 *
 * Prérequis HTML (orientation.html) :
 *  - Conteneur : #faq-container
 *  - Item      : .faq-item
 *  - Trigger   : .faq-header (enfant de .faq-item)
 *  - Contenu   : .faq-content (enfant de .faq-item)
 *  - Icône     : .faq-icon (enfant de .faq-header)
 */

/**
 * Ferme tous les items FAQ ouverts.
 */
function closeAll() {
  document.querySelectorAll('.faq-content.open').forEach((content) => {
    content.classList.remove('open');
  });
  document.querySelectorAll('.faq-icon.rotated').forEach((icon) => {
    icon.classList.remove('rotated');
  });
}

/**
 * Initialise l'accordion FAQ.
 * À appeler après DOMContentLoaded — no-op si #faq-container absent.
 */
export function initFaq() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.querySelectorAll('.faq-item').forEach((item) => {
    const header  = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    const icon    = item.querySelector('.faq-icon');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');

      // Ferme tout
      closeAll();

      // Si ce n'était pas déjà ouvert, on l'ouvre
      if (!isOpen) {
        content.classList.add('open');
        if (icon) icon.classList.add('rotated');
      }
    });
  });
}
