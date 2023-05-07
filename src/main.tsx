import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ThemeProvider from '@theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import store from './store/store';
import { theme } from '@theme/theme';
import client from './apolloClient';

import App from './App';

const rootNode = document.querySelector('#root');
if (rootNode) {
  createRoot(rootNode).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ApolloProvider client={client}>
            <Provider store={store}>
              <App />
            </Provider>
          </ApolloProvider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}
