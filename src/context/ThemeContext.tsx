import { createContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'system';
  });

  const applyTheme = (currentTheme: Theme) => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToApply =
      currentTheme === 'system' ? (systemPrefersDark ? 'dark' : 'light') : currentTheme;

    if (themeToApply === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const systemPreferenceListener = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', systemPreferenceListener);

    return () => {
      mediaQuery.removeEventListener('change', systemPreferenceListener);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};