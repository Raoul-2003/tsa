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

export function initTheme() {
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
