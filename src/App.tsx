import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyles />
    </Router>
  );
};

export default App;
