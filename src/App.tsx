import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
