window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Couleur principale de marque : Vert Amicale */
        primary:   '#2d6a04',
        secondary: '#3b8a05',
        tertiary:  '#4a9e10',
        
        /* Couleur d'accent d'origine (utilisée dans le logo) */
        'brand-green': '#2d6a04',

        /* ── Surfaces : Blanc, Beige clair, Sable ── */
        background:                '#FAF8F3',   
        surface:                   '#FFFFFF',
        'surface-bright':          '#FFFFFF',
        'surface-dim':             '#F1ECE4',
        'surface-variant':         '#F1ECE4',
        'surface-tint':            '#5C4033',

        /* Containers : Beige clair vers Sable */
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low':    '#F1ECE4',   
        'surface-container':        '#EAE1D3',
        'surface-container-high':   '#E5DED5',
        'surface-container-highest':'#D8C3A5',

        /* ── Textes : Marron très foncé et Gris-brun ── */
        'on-background':           '#29241F',
        'on-surface':              '#29241F',
        'on-surface-variant':      '#6B625A',
        'on-primary':              '#FFFFFF',
        'on-secondary':            '#FFFFFF',
        'on-tertiary':             '#FFFFFF',

        /* ── Bordures ── */
        outline:                   '#D8C3A5',
        'outline-variant':         '#E5DED5',

        /* ── Accents et états ── */
        'primary-fixed':           '#EAE1D3',
        'primary-fixed-dim':       '#D8C3A5',
        'inverse-primary':         '#D8C3A5',
        'on-primary-fixed':        '#29241F',
        'on-primary-fixed-variant':'#5C4033',
        'primary-container':       '#8B6B4A',
        'on-primary-container':    '#F1ECE4',

        'secondary-fixed':         '#F1ECE4',
        'secondary-fixed-dim':     '#EAE1D3',
        'secondary-container':     '#8B6B4A',
        'on-secondary-container':  '#FFFFFF',
        'on-secondary-fixed':      '#29241F',
        'on-secondary-fixed-variant':'#5C4033',

        'tertiary-fixed':          '#F1ECE4',
        'tertiary-fixed-dim':      '#EAE1D3',
        'tertiary-container':      '#B8894A',
        'on-tertiary-container':   '#FFFFFF',
        'on-tertiary-fixed':       '#29241F',
        'on-tertiary-fixed-variant':'#5C4033',

        /* ── Inverse ── */
        'inverse-surface':         '#29241F',
        'inverse-on-surface':      '#FAF8F3',

        /* ── Erreur ── */
        error:                     '#dc2626',
        'error-container':         '#fee2e2',
        'on-error':                '#ffffff',
        'on-error-container':      '#7f1d1d',
      },
      borderRadius: { DEFAULT: '0.375rem', lg: '0.625rem', xl: '1rem', full: '9999px' },
      spacing: {
        xl:               '64px',
        'max-width':      '1280px',
        lg:               '40px',
        'margin-desktop': '48px',
        sm:               '16px',
        'margin-mobile':  '16px',
        base:             '4px',
        md:               '24px',
        xs:               '8px',
        gutter:           '24px'
      },
      fontFamily: {
        sans:                ["'Century Gothic'", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display:             ["'Century Gothic'", 'ui-sans-serif', 'sans-serif'],
        'body-lg':           ["'Century Gothic'", 'sans-serif'],
        'headline-lg':       ["'Century Gothic'", 'sans-serif'],
        'headline-lg-mobile':["'Century Gothic'", 'sans-serif'],
        'headline-sm':       ["'Century Gothic'", 'sans-serif'],
        'label-md':          ["'Century Gothic'", 'sans-serif'],
        'headline-md':       ["'Century Gothic'", 'sans-serif'],
        'body-md':           ["'Century Gothic'", 'sans-serif'],
        'label-sm':          ["'Century Gothic'", 'sans-serif'],
      },
      fontSize: {
        'body-lg':           ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-lg':       ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg-mobile':['24px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-sm':       ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'label-md':          ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'headline-md':       ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-md':           ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        display:             ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'label-sm':          ['12px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600' }],
      }
    }
  }
};
