import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        dark: string;
        lightgrey: string;
      };
      secondary: {
        main: string;
        dark: string;
      };
      background: {
        default: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        contrastText: string;
      };
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
