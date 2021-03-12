import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import StatusContext from './context/StatusContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [status, setStatus] = useState('Aprovado');

  return (
    <BrowserRouter>
      <StatusContext.Provider value={{ status, setStatus }}>
        <Header />
        <Routes />
        <Footer />
      </StatusContext.Provider>
    </BrowserRouter>
  );
}

export default App;
