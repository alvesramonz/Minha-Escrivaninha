import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <ToastContainer autoClose={3000}/>
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
