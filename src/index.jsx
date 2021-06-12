import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import React from 'react';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './templates/Home/index';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route to="*" component={Home} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
