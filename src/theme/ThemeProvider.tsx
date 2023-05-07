import React from 'react';
import type { FC, ReactNode } from 'react';

import {
  ITheme,
  ThemeProvider as StyledComponentProvider,
} from 'styled-components';
import GlobalStyle from './GlobalStyle';

type ThemeProviderProps = {
  children: ReactNode;
  theme: ITheme;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  return (
    <StyledComponentProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledComponentProvider>
  );
};

export default ThemeProvider;
