import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';

import { Header } from './components/Header'
import { Routes } from './routes'
import { Footer } from './components/Footer';
import GlobalStyle from './styles/global';

export function App() {
  Modal.setAppElement('#root')

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        {/* <Footer /> */}
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
