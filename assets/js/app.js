/**
 * app.js
 * Point d'entrée principal — Bibliothèque TSA
 *
 * Importe et initialise tous les modules JS dans le bon ordre.
 * Chaque module est autonome et vérifie lui-même la présence
 * des éléments DOM dont il a besoin (pas d'erreurs sur les pages
 * où certains éléments n'existent pas).
 *
 * Ordre d'initialisation :
 *  1. theme      → applique le thème sauvegardé AVANT le premier paint
 *  2. navigation → active state + menu mobile
 *  3. hero       → zoom-out + parallax (index.html seulement)
 *  4. observer   → IntersectionObserver pour animations au scroll
 *  5. faq        → accordion (orientation.html seulement)
 */

import { initTheme }      from './theme.js';
import { initNavigation } from './navigation.js';
import { initHero }       from './hero.js';
import { initObserver }   from './observer.js';
import { initFaq }        from './faq.js';
import { initCoursesPage } from './courses.js';
import { initOrientationCards } from './orientation.js';
import { initSchools } from './schools.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initHero();
  initObserver();
  initFaq();
  initCoursesPage();
  initOrientationCards();
  initSchools();
});
