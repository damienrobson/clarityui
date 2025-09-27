import type { ReactNode } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

const ThemeProvider = ({ children, theme = 'light' }: { children: ReactNode; theme?: Theme }) => {
  console.log('ThemeProvider active');
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
