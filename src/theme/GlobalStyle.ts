import { createGlobalStyle, DefaultTheme, ThemeProps } from 'styled-components';

const GlobalStyle = createGlobalStyle<ThemeProps<DefaultTheme>>`
/* Set global styles for html and body */
html {
  font-size: 16px;
  line-height: 1.5;
  font-family: Lato, Helvetica, sans-serif;
}

body {
  margin: 0 auto;
  height: 100vh;
  max-width:1440px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.background.default};
  overflow-x: hidden;
}


  /* Set styles for the root element */
#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

  /* Set styles for specific form elements */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }
  
  button {
    border:none;
  }

  a {
    text-decoration:none;
  }

  p { 
    padding: 0;
    margin: 0;
  }

  /* Set styles for heading elements */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.4;
  }
`;

export default GlobalStyle;
