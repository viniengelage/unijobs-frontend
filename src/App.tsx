import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Footer from './components/Footer';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
      <Footer />
    </>
  );
};

export default App;
