import React, { createContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextProps {
  darkMode: 'light' | 'dark' | 'system';
  setDarkMode: (value: 'light' | 'dark' | 'system') => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  darkMode: 'system',
  setDarkMode: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<'light' | 'dark' | 'system'>(
    (localStorage.getItem("darkMode") as 'light' | 'dark' | 'system') || 'light'
  );

  useEffect(() => {
    const applyTheme = (theme: 'light' | 'dark') => {
      if (theme === 'dark') {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    if (darkMode === 'system') {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(systemPrefersDark ? 'dark' : 'light');
    } else {
      applyTheme(darkMode);
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ setDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;