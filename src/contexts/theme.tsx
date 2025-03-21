import { createContext, ReactNode, useContext, useState } from 'react';

export type Theme = 'auto' | 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  handleThemeChange: ((newTheme: Theme) => void) | undefined;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  handleThemeChange: undefined,
});

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  return context;
}

function isTheme(value: string | null): value is Theme {
  return value === 'dark' || value === 'light' || value === 'auto';
}

function getDefaultTheme() {
  const initialTheme = document.documentElement.getAttribute('data-theme');
  const storedTheme = localStorage.getItem('theme');

  if (isTheme(initialTheme)) {
    if (initialTheme === 'dark' && (!isTheme(storedTheme) || storedTheme === 'auto')) {
      return 'auto';
    } else {
      return initialTheme;
    }
  }

  return 'auto';
}

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme);

  function handleThemeChange(newTheme: Theme) {
    if (newTheme === 'auto') {
      document.documentElement.setAttribute('data-theme', prefersDarkScheme ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', newTheme);
    }

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return <ThemeContext value={{ theme, handleThemeChange }}>{children}</ThemeContext>;
}
