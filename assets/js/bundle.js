// Bundle JS - Bibliothèque TSA


/* --- assets/data/documents.js --- */
const documentsData = {
  currentLevel: 'TS1',
  currentSubject: 'Analyse', // Matière par défaut
  levels: [
    { name: 'TS1', label: 'TS1', active: true },
    { name: 'TS2', label: 'TS2', active: false },
    { name: 'TS3', label: 'TS3', active: false }
  ],
  updateText: 'Derniers documents ajoutés le 24 Oct.',
  data: {
    'TS1': {
      description: 'Explorez les ressources, cours magistraux, et travaux dirigés pour maîtriser le programme de première année.',
      subjects: [
        {
          name: 'Analyse',
          icon: 'calculate',
          count: 24,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Espaces Vectoriels', meta: '2.4 MB • Modifié le 12 Sept 2023' },
              { title: 'Chapitre 2 : Applications Linéaires', meta: '3.1 MB • Modifié le 19 Sept 2023' }
            ],
            td: [
              { title: 'TD 1 : Sous-espaces Vectoriels', meta: '1.2 MB • Modifié le 15 Sept 2023' },
              { title: 'Corrigé TD 1', meta: '1.5 MB • Modifié le 22 Sept 2023' }
            ],
            annales: [
              { title: 'Annales 2022 — Analyse', meta: '1.8 MB • Modifié le 08 Oct 2023' }
            ]
          }
        },
        {
          name: 'Algèbre Linéaire',
          icon: 'function',
          count: 18,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 3 : Matrices et Déterminants', meta: '2.6 MB • Modifié le 16 Sept 2023' }
            ],
            td: [
              { title: 'TD 2 : Calcul matriciel', meta: '1.3 MB • Modifié le 20 Sept 2023' }
            ],
            annales: [
              { title: 'Annales 2021 — Algèbre', meta: '1.4 MB • Modifié le 02 Oct 2023' }
            ]
          }
        },
        {
          name: 'Probabilités',
          icon: 'data_usage',
          count: 12,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 4 : Événements et Probabilités', meta: '2.1 MB • Modifié le 11 Sept 2023' }
            ],
            td: [
              { title: 'TD 3 : Lois de probabilité', meta: '1.1 MB • Modifié le 17 Sept 2023' }
            ],
            annales: [
              { title: 'Annales 2023 — Probabilités', meta: '1.6 MB • Modifié le 06 Oct 2023' }
            ]
          }
        }
      ]
    },
    'TS2': {
      description: 'Découvrez les cours avancés et les travaux dirigés de la deuxième année de la filière TSA.',
      subjects: [
        {
          name: 'Thermodynamique',
          icon: 'thermostat',
          count: 15,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Premier Principe', meta: '3.0 MB • Modifié le 01 Oct 2023' }
            ],
            td: [
              { title: 'TD 1 : Bilans d\'énergie', meta: '1.1 MB • Modifié le 05 Oct 2023' }
            ],
            annales: [
              { title: 'Examen 2022 — Thermo', meta: '1.5 MB • Modifié le 15 Oct 2023' }
            ]
          }
        },
        {
          name: 'Électromagnétisme',
          icon: 'bolt',
          count: 10,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Électrostatique', meta: '2.8 MB • Modifié le 10 Sept 2023' }
            ],
            td: [
              { title: 'TD 1 : Champ Électrique', meta: '1.3 MB • Modifié le 15 Sept 2023' }
            ],
            annales: []
          }
        }
      ]
    },
    'TS3': {
      description: 'Accédez aux ressources de spécialisation et de préparation aux diplômes finaux de la troisième année.',
      subjects: [
        {
          name: 'Mécanique Quantique',
          icon: 'blur_on',
          count: 8,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Postulats', meta: '4.2 MB • Modifié le 05 Sept 2023' }
            ],
            td: [
              { title: 'TD 1 : Équation de Schrödinger', meta: '1.8 MB • Modifié le 12 Sept 2023' }
            ],
            annales: []
          }
        },
        {
          name: 'Optique Ondulatoire',
          icon: 'waves',
          count: 14,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Interférences', meta: '3.5 MB • Modifié le 22 Sept 2023' }
            ],
            td: [
              { title: 'TD 1 : Trous d\'Young', meta: '1.2 MB • Modifié le 28 Sept 2023' }
            ],
            annales: [
              { title: 'Annales 2023 — Optique', meta: '2.0 MB • Modifié le 10 Oct 2023' }
            ]
          }
        }
      ]
    }
  }
};


/* --- assets/data/orientation.js --- */
const orientationData = {
  categories: [
    {
      id: 'grandesEcoles',
      title: 'Grandes Écoles',
      description: 'Découvrez les possibilités d\'intégration des grandes écoles accessibles aux étudiants issus de la formation TSA.',
      buttonText: 'Découvrir',
      icon: 'account_balance',
      variant: 'large',
      iconClass: 'w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-md text-primary',
      buttonClass: 'font-label-md text-label-md text-primary flex items-center gap-xs hover:gap-sm transition-all',
      cardClass: 'md:col-span-8 bg-surface-container-lowest rounded-xl p-lg relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 border border-outline-variant/30 text-left'
    },
    {
      id: 'concours',
      title: 'Concours',
      description: 'Calendrier, modalités et préparation aux épreuves écrites et orales.',
      buttonText: 'Découvrir',
      icon: 'quiz',
      variant: 'accent',
      iconClass: 'w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-md text-on-tertiary',
      buttonClass: 'font-label-md text-label-md text-on-tertiary flex items-center gap-xs hover:gap-sm transition-all mt-auto pt-lg',
      cardClass: 'md:col-span-4 bg-tertiary rounded-xl p-lg relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 text-left'
    },
    {
      id: 'passerelles',
      title: 'Passerelles',
      description: 'Voies d\'admission parallèles et réorientations pour diversifier vos opportunités.',
      buttonText: 'Découvrir',
      icon: 'alt_route',
      variant: 'default',
      iconClass: 'w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary',
      buttonClass: 'font-label-md text-label-md text-secondary flex items-center gap-xs hover:gap-sm transition-all mt-md',
      cardClass: 'md:col-span-4 bg-surface-container-lowest rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-outline-variant/30 text-left'
    },
    {
      id: 'universites',
      title: 'Universités',
      description: 'Licences, Masters et filières d\'excellence universitaires accessibles post-TSA.',
      buttonText: 'Découvrir',
      icon: 'school',
      variant: 'default',
      iconClass: 'w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary',
      buttonClass: 'font-label-md text-label-md text-secondary flex items-center gap-xs hover:gap-sm transition-all mt-md',
      cardClass: 'md:col-span-4 bg-surface-container-lowest rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-outline-variant/30 text-left'
    },
    {
      id: 'bourses',
      title: 'Bourses & Aides',
      description: 'Soutien financier, bourses d\'excellence et modalités de financement des études.',
      buttonText: 'Découvrir',
      icon: 'monetization_on',
      variant: 'default',
      iconClass: 'w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary',
      buttonClass: 'font-label-md text-label-md text-secondary flex items-center gap-xs hover:gap-sm transition-all mt-md',
      cardClass: 'md:col-span-4 bg-surface-container-lowest rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-outline-variant/30 text-left'
    }
  ],
  details: {
    grandesEcoles: {
      title: "Grandes Écoles",
      description: "Les détails sur les grandes écoles accessibles seront publiés prochainement par l'administration. Consultez votre encadrement pour les informations officielles.",
      items: []
    },
    concours: {
      title: "Concours",
      description: "Les informations sur les concours (calendrier, conditions, modalités) seront publiées prochainement. Rapprochez-vous de votre administration.",
      items: []
    },
    passerelles: {
      title: "Passerelles",
      description: "Les possibilités de passerelles et réorientations académiques seront détaillées prochainement par l'administration.",
      items: []
    },
    universites: {
      title: "Universités",
      description: "Les filières universitaires accessibles post-TSA seront publiées prochainement. Contactez votre administration pour plus d'informations.",
      items: []
    },
    bourses: {
      title: "Bourses & Aides",
      description: "Les informations sur les bourses et aides financières seront publiées prochainement. Rapprochez-vous du service des affaires étudiantes.",
      items: []
    }
  }
};


/* --- assets/data/schools.js --- */
const schoolsData = [
  {
    id: "esa",
    name: "ESA (École Supérieure d'Agronomie)",
    institution: "INP-HB Yamoussoukro",
    domain: "Agronomie, Sciences du Sol, Foresterie",
    admission: "Concours, Sur titre",
    icon: "psychiatry", // material icon
    colorClass: "bg-primary/10 text-primary"
  },
  {
    id: "escae",
    name: "ESCAE",
    institution: "INP-HB Yamoussoukro",
    domain: "Commerce, Administration, Entrepreneuriat",
    admission: "Concours",
    icon: "storefront",
    colorClass: "bg-tertiary/10 text-tertiary"
  },
  {
    id: "estp",
    name: "ESTP",
    institution: "INP-HB Yamoussoukro",
    domain: "Travaux Publics, Génie Civil",
    admission: "Concours",
    icon: "architecture",
    colorClass: "bg-secondary/10 text-secondary"
  },
  {
    id: "universite-ufhb",
    name: "Université FHB",
    institution: "Cocody, Abidjan",
    domain: "Biosciences, Chimie, Physique",
    admission: "Sur titre (Licence 3, Master)",
    icon: "science",
    colorClass: "bg-primary/10 text-primary"
  },
  {
    id: "universite-una",
    name: "Université Nangui Abrogoua",
    institution: "Abobo-Adjamé",
    domain: "Sciences de la Nature, Environnement",
    admission: "Sur titre (Licence 3)",
    icon: "eco",
    colorClass: "bg-secondary/10 text-secondary"
  }
];


/* --- assets/js/animation.js --- */
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
function applyFadeInUp(el, delay = '0s', duration = '0.6s') {
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
function getElementDelay(el) {
  return el.style.transitionDelay || window.getComputedStyle(el).transitionDelay || '0s';
}


/* --- assets/js/theme.js --- */
/**
 * Theme manager for the TSA library.
 *
 * The selected theme is persisted in localStorage. When no explicit choice
 * exists, the system preference from prefers-color-scheme is used.
 */

const STORAGE_KEY = 'tsa-theme';
const DARK_CLASS = 'dark';
const DARK_VALUE = 'dark';
const LIGHT_VALUE = 'light';
const THEME_QUERY = '(prefers-color-scheme: dark)';

const systemTheme = window.matchMedia(THEME_QUERY);

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Theme still works for the current session when storage is unavailable.
  }
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme();

  if (storedTheme === DARK_VALUE || storedTheme === LIGHT_VALUE) {
    return storedTheme;
  }

  return systemTheme.matches ? DARK_VALUE : LIGHT_VALUE;
}

function updateThemeButtons(theme) {
  const isDark = theme === DARK_VALUE;

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('title', isDark ? 'Activer le mode clair' : 'Activer le mode sombre');

    const icon = button.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    }
  });
}

function applyTheme(theme) {
  const isDark = theme === DARK_VALUE;

  document.documentElement.classList.toggle(DARK_CLASS, isDark);
  document.documentElement.dataset.theme = theme;
  updateThemeButtons(theme);
}

function syncWithPreference() {
  applyTheme(getPreferredTheme());
}

syncWithPreference();

function initTheme() {
  syncWithPreference();

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = document.documentElement.classList.contains(DARK_CLASS)
        ? LIGHT_VALUE
        : DARK_VALUE;

      setStoredTheme(nextTheme);
      applyTheme(nextTheme);
    });
  });

  const handleSystemThemeChange = () => {
    if (!getStoredTheme()) {
      syncWithPreference();
    }
  };

  if (typeof systemTheme.addEventListener === 'function') {
    systemTheme.addEventListener('change', handleSystemThemeChange);
  } else if (typeof systemTheme.addListener === 'function') {
    systemTheme.addListener(handleSystemThemeChange);
  }
}


/* --- assets/js/navigation.js --- */
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
function initNavigation() {
  setActiveLinks();
  initMobileMenu();
}


/* --- assets/js/hero.js --- */
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
function initHero() {
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


/* --- assets/js/observer.js --- */
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
function initObserver() {
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


/* --- assets/js/faq.js --- */
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
function initFaq() {
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


/* --- assets/js/courses.js --- */


const documentTypeConfig = [
  {
    key: 'cours',
    title: 'Cours Magistraux',
    icon: 'menu_book',
    iconColor: 'text-primary'
  },
  {
    key: 'td',
    title: 'Travaux Dirigés (TD)',
    icon: 'assignment',
    iconColor: 'text-primary'
  },
  {
    key: 'annales',
    title: 'Annales / Autres',
    icon: 'quiz',
    iconColor: 'text-primary'
  }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '');
}

function highlightMatches(text, query) {
  if (!query) return escapeHtml(text);

  const escapedText = escapeHtml(text);
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');

  return escapedText.replace(regex, '<mark class="bg-primary/10 text-primary rounded px-1 py-0.5">$1</mark>');
}

function renderLevels() {
  const levelsContainer = document.getElementById('courses-levels');
  if (!levelsContainer) return;

  levelsContainer.innerHTML = documentsData.levels
    .map((level) => {
      const isActive = level.name === documentsData.currentLevel;
      return `
        <button data-level="${level.name}" aria-pressed="${isActive}" class="level-tab shrink-0 lg:w-full flex items-center justify-center lg:justify-between px-md py-sm rounded-lg ${isActive ? 'bg-primary/10 text-primary relative group transition-colors font-bold' : 'text-on-surface-variant hover:bg-surface-container transition-colors group'}">
          ${isActive ? '<div class="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>' : ''}
          <span class="font-label-md">${level.label}</span>
          <span class="material-symbols-outlined text-[20px] hidden lg:block ${isActive ? '' : 'opacity-0 group-hover:opacity-100 transition-opacity'}">chevron_right</span>
        </button>
      `;
    })
    .join('');
}

function renderHeader() {
  const title = document.getElementById('courses-title');
  const description = document.getElementById('courses-description');
  const updateText = document.getElementById('courses-update-text');

  if (title) title.textContent = `${documentsData.currentSubject} — ${documentsData.currentLevel}`;
  
  const currentLevelData = documentsData.data[documentsData.currentLevel];
  if (description && currentLevelData) {
    description.textContent = currentLevelData.description;
  }
  
  if (updateText) updateText.textContent = documentsData.updateText;
}

function renderSubjectCards() {
  const grid = document.getElementById('subjects-grid');
  if (!grid) return;

  const currentLevelData = documentsData.data[documentsData.currentLevel];
  if (!currentLevelData) {
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = currentLevelData.subjects
    .map((subject) => {
      const isActive = subject.name === documentsData.currentSubject;
      const cardClass = isActive
        ? 'bg-primary/5 border border-primary/20 p-md rounded-2xl shadow-sm transition-shadow group relative overflow-hidden cursor-pointer'
        : 'bg-surface-container-lowest p-md rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden cursor-pointer';

      return `
        <button type="button" data-subject="${escapeHtml(subject.name)}" class="subject-card text-left w-full ${cardClass}">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
          <div class="${subject.iconWrapperClass}">
            <span class="material-symbols-outlined ${isActive ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary transition-colors'} text-[24px]">${subject.icon}</span>
          </div>
          <h3 class="font-headline-sm ${isActive ? 'text-primary' : 'text-on-surface'} mb-xs">${subject.name}</h3>
          <p class="font-label-sm text-on-surface-variant mb-lg">${subject.count} Documents</p>
          <div class="font-label-md ${isActive ? 'text-primary' : 'text-on-surface-variant'} flex items-center gap-xs">
            Afficher les documents <span class="material-symbols-outlined text-[18px]">arrow_downward</span>
          </div>
        </button>
      `;
    })
    .join('');
}

function renderDocuments() {
  const container = document.getElementById('documents-lists');
  if (!container) return;

  const currentLevelData = documentsData.data[documentsData.currentLevel];
  if (!currentLevelData) {
    container.innerHTML = '';
    return;
  }

  const subject = currentLevelData.subjects.find(s => s.name === documentsData.currentSubject) || currentLevelData.subjects[0];
  
  if (!subject) {
    container.innerHTML = '<p class="text-on-surface-variant">Aucune matière sélectionnée.</p>';
    return;
  }

  const sectionsMarkup = documentTypeConfig
    .map((config) => {
      const documents = subject.sections[config.key] || [];
      const rowsMarkup = documents
        .map((documentItem, index) => `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between p-md gap-md ${index === documents.length - 1 ? '' : 'border-b border-surface-container/50'} hover:bg-surface-container/20 transition-colors">
            <div class="flex items-start sm:items-center gap-md">
              <span class="material-symbols-outlined text-error text-[24px] shrink-0">picture_as_pdf</span>
              <div>
                <h4 class="font-label-md text-on-surface">${documentItem.title}</h4>
                <p class="font-label-sm text-on-surface-variant mt-1">${documentItem.meta}</p>
              </div>
            </div>
            <div class="flex items-center gap-xs shrink-0 self-end sm:self-auto">
              <button class="p-xs text-primary hover:bg-primary/10 rounded-lg transition-colors font-label-md hidden sm:block">Ouvrir</button>
              <button aria-label="Télécharger" class="p-xs text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <span class="material-symbols-outlined text-[20px]">download</span>
              </button>
              <button aria-label="Ajouter à Drive" class="p-xs text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <span class="material-symbols-outlined text-[20px]">add_to_drive</span>
              </button>
            </div>
          </div>
        `)
        .join('');

      return `
        <section class="mb-lg opacity-0 translate-y-4 animate-[fade-in-up_0.5s_ease-out_forwards]">
          <div class="flex items-center gap-sm mb-lg">
            <span class="material-symbols-outlined ${config.iconColor} text-[28px]">${config.icon}</span>
            <h2 class="font-headline-md text-on-background">${config.title}</h2>
          </div>
          <div class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
            ${rowsMarkup || `
              <div class="p-md text-on-surface-variant">Aucun document disponible pour cette catégorie.</div>
            `}
          </div>
        </section>
      `;
    })
    .join('');

  container.innerHTML = `
    <section class="space-y-xl mb-xl">
      <div class="flex items-center gap-sm mb-lg border-b border-outline-variant/30 pb-sm">
        <span class="material-symbols-outlined text-primary text-[28px]">${subject.icon}</span>
        <h2 class="font-headline-md text-on-background">${subject.name} <span class="text-on-surface-variant font-normal text-lg">(${documentsData.currentLevel})</span></h2>
      </div>
      <div class="space-y-xl">
        ${sectionsMarkup}
      </div>
    </section>
  `;
}

function buildSearchIndex() {
  const entries = [];

  documentsData.levels.forEach((level) => {
    entries.push({
      type: 'year',
      category: 'Années',
      title: level.label,
      detail: `Niveau • ${level.label}`,
      keywords: [level.label, level.name, 'année', 'niveau']
    });
  });

  Object.values(documentsData.data).forEach((levelData) => {
    levelData.subjects.forEach((subject) => {
      entries.push({
        type: 'subject',
        category: 'Matières',
        title: subject.name,
        detail: `${subject.count} documents disponibles`,
        keywords: [subject.name, 'matière', 'cours', 'ressource']
      });

      Object.entries(subject.sections).forEach(([sectionKey, documents]) => {
        const sectionTitle = documentTypeConfig.find((item) => item.key === sectionKey)?.title || sectionKey;
        documents.forEach((documentItem) => {
          entries.push({
            type: 'document',
            category: 'Documents',
            title: documentItem.title,
            detail: `${subject.name} • ${sectionTitle}`,
            keywords: [documentItem.title, documentItem.meta, subject.name, sectionTitle, 'document', 'cours', 'td', 'annale']
          });
        });
      });
    });
  });

  return entries;
}

function renderSearchResults(query) {
  const resultsPanel = document.getElementById('courses-search-results');
  const input = document.getElementById('courses-search-input');

  if (!resultsPanel || !input) return;

  const normalizedQuery = normalizeText(query.trim());
  if (!normalizedQuery) {
    resultsPanel.classList.add('hidden');
    return;
  }

  const entries = buildSearchIndex()
    .filter((entry) => entry.keywords.some((keyword) => normalizeText(keyword).includes(normalizedQuery)))
    .slice(0, 8);

  if (!entries.length) {
    resultsPanel.innerHTML = `
      <div class="search-empty-state">
        <span class="material-symbols-outlined text-[22px]">search_off</span>
        <p>Aucun résultat pour “${escapeHtml(query)}”.</p>
      </div>
    `;
    resultsPanel.classList.remove('hidden');
    return;
  }

  const resultsByCategory = {
    Documents: entries.filter((entry) => entry.category === 'Documents'),
    Matières: entries.filter((entry) => entry.category === 'Matières'),
    Années: entries.filter((entry) => entry.category === 'Années')
  };

  const groupsMarkup = Object.entries(resultsByCategory)
    .filter(([, items]) => items.length)
    .map(([category, items]) => `
      <div class="search-group">
        <div class="search-group-title">${category}</div>
        ${items.map((item) => `
          <div class="search-result-item">
            <div class="search-result-icon">
              <span class="material-symbols-outlined">${item.type === 'year' ? 'calendar_month' : item.type === 'subject' ? 'school' : 'picture_as_pdf'}</span>
            </div>
            <div class="search-result-content">
              <div class="search-result-title">${highlightMatches(item.title, query)}</div>
              <div class="search-result-detail">${highlightMatches(item.detail, query)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `)
    .join('');

  resultsPanel.innerHTML = `
    <div class="search-results-list">${groupsMarkup}</div>
  `;
  resultsPanel.classList.remove('hidden');
}

function initCoursesPage() {
  // Initialisation par défaut si nécessaire
  if (!documentsData.currentSubject) {
    const defaultData = documentsData.data[documentsData.currentLevel];
    if (defaultData && defaultData.subjects.length > 0) {
      documentsData.currentSubject = defaultData.subjects[0].name;
    }
  }

  renderLevels();
  renderHeader();
  renderSubjectCards();
  renderDocuments();

  // Click handler pour les niveaux (sidebar)
  const levelsContainer = document.getElementById('courses-levels');
  if (levelsContainer) {
    levelsContainer.addEventListener('click', (event) => {
      const btn = event.target.closest('.level-tab');
      if (!btn) return;
      const newLevel = btn.getAttribute('data-level');
      if (newLevel && newLevel !== documentsData.currentLevel) {
        documentsData.currentLevel = newLevel;
        documentsData.levels.forEach(l => l.active = (l.name === newLevel));
        
        // Sélectionner la première matière du nouveau niveau par défaut
        const newLevelData = documentsData.data[newLevel];
        if (newLevelData && newLevelData.subjects.length > 0) {
          documentsData.currentSubject = newLevelData.subjects[0].name;
        } else {
          documentsData.currentSubject = null;
        }

        renderLevels();
        renderHeader();
        renderSubjectCards();
        renderDocuments();
      }
    });
  }

  // Click handler pour les cartes de matières
  const grid = document.getElementById('subjects-grid');
  if (grid) {
    grid.addEventListener('click', (event) => {
      const card = event.target.closest('.subject-card');
      if (!card) return;
      const subjectName = card.getAttribute('data-subject');
      
      if (subjectName && subjectName !== documentsData.currentSubject) {
        documentsData.currentSubject = subjectName;
        renderHeader();
        renderSubjectCards();
        renderDocuments();
        
        // Scroll vers les documents
        const docsList = document.getElementById('documents-lists');
        if (docsList) {
          const y = docsList.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  }

  const searchInput = document.getElementById('courses-search-input');
  const resultsPanel = document.getElementById('courses-search-results');

  if (!searchInput || !resultsPanel) return;

  searchInput.addEventListener('input', (event) => {
    renderSearchResults(event.target.value);
  });

  document.addEventListener('click', (event) => {
    if (!resultsPanel.contains(event.target) && event.target !== searchInput) {
      resultsPanel.classList.add('hidden');
    }
  });
}


/* --- assets/js/orientation.js --- */


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

function initOrientationCards() {
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


/* --- assets/js/schools.js --- */
function initSchools() {
  const schoolsGrid = document.getElementById('schools-grid');
  const searchInput = document.getElementById('school-search');
  const searchClear = document.getElementById('school-search-clear');
  const noResults = document.getElementById('schools-no-results');

  if (!schoolsGrid) return; // Seulement sur orientation.html

  // render function
  function renderSchools(schools) {
    schoolsGrid.innerHTML = '';
    if (schools.length === 0) {
      schoolsGrid.classList.add('hidden');
      noResults.classList.remove('hidden');
    } else {
      schoolsGrid.classList.remove('hidden');
      noResults.classList.add('hidden');
      
      schools.forEach(school => {
        const card = document.createElement('div');
        card.className = 'bg-surface-container-lowest rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-outline-variant/30 text-left group flex flex-col h-full';
        
        card.innerHTML = `
          <div class="flex items-start gap-md mb-md">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${school.colorClass}">
              <span class="material-symbols-outlined text-[24px]">${school.icon}</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">${school.name}</h3>
              <p class="text-xs text-on-surface-variant flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">location_on</span>
                ${school.institution}
              </p>
            </div>
          </div>
          <div class="space-y-sm flex-grow">
            <div>
              <span class="text-xs text-on-surface-variant uppercase tracking-wider font-semibold block mb-1">Domaine</span>
              <p class="font-body-md text-sm text-on-surface">${school.domain}</p>
            </div>
            <div>
              <span class="text-xs text-on-surface-variant uppercase tracking-wider font-semibold block mb-1">Admission</span>
              <p class="font-body-md text-sm text-on-surface">${school.admission}</p>
            </div>
          </div>
          <div class="mt-lg pt-4 border-t border-outline-variant/30">
            <a href="#" class="inline-flex items-center gap-2 text-primary font-label-md hover:gap-3 transition-all cursor-not-allowed opacity-70" title="Informations à venir">
              Détails <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        `;
        schoolsGrid.appendChild(card);
      });
    }
  }

  // normalisation pour la recherche
  function normalizeText(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // initial render
  if (typeof schoolsData !== 'undefined') {
    renderSchools(schoolsData);

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = normalizeText(e.target.value);
        if (query.length > 0) {
          searchClear.classList.remove('hidden');
        } else {
          searchClear.classList.add('hidden');
        }
        
        const filtered = schoolsData.filter(school => 
          normalizeText(school.name).includes(query) ||
          normalizeText(school.domain).includes(query) ||
          normalizeText(school.institution).includes(query)
        );
        renderSchools(filtered);
      });

      if (searchClear) {
        searchClear.addEventListener('click', () => {
          searchInput.value = '';
          searchClear.classList.add('hidden');
          renderSchools(schoolsData);
          searchInput.focus();
        });
      }
    }
  }
}


/* --- assets/js/contact-form.js --- */
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

    if (name === 'firstName') {
      return trimmedValue.length > 0 ? '' : 'Veuillez renseigner votre prénom.';
    }

    if (name === 'lastName') {
      return trimmedValue.length > 0 ? '' : 'Veuillez renseigner votre nom.';
    }

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(trimmedValue) ? '' : 'Veuillez renseigner une adresse email valide.';
    }

    if (name === 'message') {
      return trimmedValue.length > 0 ? '' : 'Veuillez saisir votre message.';
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
      // Pas de backend configuré : on affiche le message demandé
      showToast('Votre message est prêt à être envoyé. Le service de contact sera connecté prochainement.', 'success');
      form.reset();
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
      showToast('Votre message est prêt à être envoyé. Le service de contact sera connecté prochainement.', 'success');
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      showToast('L’envoi a échoué. Veuillez réessayer plus tard.', 'error');
    } finally {
      isSubmitting = false;
      setSubmittingState(false);
    }
  });
})();


/* --- assets/js/app.js --- */
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

