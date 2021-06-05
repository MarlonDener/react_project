import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
