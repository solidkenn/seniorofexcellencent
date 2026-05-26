import { useCallback, useLayoutEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function getPreferredTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch {
    /* ignore */
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function applyHtmlTheme(theme) {
  const root = document.documentElement;
  const isDark = theme === 'dark';
  root.classList.toggle('dark', isDark);
  root.classList.toggle('light', !isDark);
}

/**
 * Syncs theme with localStorage (when set) or prefers-color-scheme, toggles `html.dark` / `html.light`.
 */
export function useDarkMode() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useLayoutEffect(() => {
    applyHtmlTheme(theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const isDark = theme === 'dark';

  return { theme, isDark, toggle, setTheme };
}
