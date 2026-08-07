/**
 * hero.js
 * Gère l'effet visuel de la Hero Section de index.html :
 *  - Zoom-out au chargement (scale 1.05 → 1, piloté par la transition CSS Tailwind)
 *  - Parallax au scroll (translateY proportionnel à scrollY)
 *
 * Dépendances : aucune
 * Utilisé par : app.js → initHero()
 */

/**
 * Initialise les effets du hero.
 * À appeler après DOMContentLoaded.
 */
export function initHero() {
  const heroBgImg = document.getElementById('hero-bg-img');
  if (!heroBgImg) return; // La page n'a pas de hero avec image (courses, orientation, resources)

  // Déclenche le zoom-out : retire le scale(1.05) initial dès le prochain frame
  // La transition `duration-[8000ms]` Tailwind assure le fondu progressif
  requestAnimationFrame(() => {
    heroBgImg.style.transform = 'scale(1) translateY(0px)';
  });

  // Parallax au scroll : l'image se déplace à 35 % de la vitesse de scroll
  const heroSection = document.getElementById('hero-section');
  if (!heroSection) return;

  window.addEventListener(
    'scroll',
    () => {
      const scrollY = window.scrollY;
      const heroHeight = heroSection.offsetHeight;

      // On n'applique le parallax que tant que le hero est visible
      if (scrollY < heroHeight) {
        const offset = scrollY * 0.35;
        heroBgImg.style.transform = `scale(1) translateY(${offset}px)`;
      }
    },
    { passive: true }
  );
}
