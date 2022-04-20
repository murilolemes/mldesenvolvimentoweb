import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header'
import { Routes } from './routes'
import { Footer } from './components/Footer';
import GlobalStyle from './styles/global';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
