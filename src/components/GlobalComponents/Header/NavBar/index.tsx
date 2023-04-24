import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiMenu, FiX } from 'react-icons/fi';

import Logo1 from 'assets/LogoPNG.png';

import { Content } from './styles';

export function NavBar() {
  const path = useLocation();
  const [home, setHome] = useState(false);
  const [calc, setCalc] = useState(false);
  const [finance, setFinance] = useState(false);
  const [pokemon, setPokemon] = useState(false);
  const [pokemonFavorite, setPokemonFavorite] = useState(false);
  const [shop, setShop] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    switch (path.pathname) {
      case '/':
        setHome(true);
        setCalc(false);
        setFinance(false);
        setPokemon(false);
        setShop(false);
        setPokemonFavorite(false);
        setCart(false);
        break;
      case '/calculadora':
        setCalc(true);
        setHome(false);
        setFinance(false);
        setPokemon(false);
        setShop(false);
        setPokemonFavorite(false);
        setCart(false);
        break;
      case '/financas':
        setFinance(true);
        setHome(false);
        setCalc(false);
        setPokemon(false);
        setShop(false);
        setPokemonFavorite(false);
        setCart(false);
        break;
      case '/pokemons':
        setPokemon(true);
        setPokemonFavorite(false);
        setFinance(false);
        setHome(false);
        setCalc(false);
        setShop(false);
        setCart(false);
        break;
      case '/pokemons/favoritos':
        setPokemonFavorite(true);
        setPokemon(false);
        setFinance(false);
        setHome(false);
        setCalc(false);
        setShop(false);
        setCart(false);
        break;
      case '/shop':
        setShop(true);
        setPokemon(false);
        setFinance(false);
        setHome(false);
        setCalc(false);
        setPokemonFavorite(false);
        setCart(false);
        break;
      case '/shop/carrinho':
        setCart(true);
        setShop(false);
        setPokemon(false);
        setFinance(false);
        setHome(false);
        setCalc(false);
        setPokemonFavorite(false);
        break;
      default:
        break;
    }
  }, [path.pathname]);

  return (
    <Content>
      <Navbar expand="lg">
        <Container>
          <Link
            to='/'
            className={home === true ? 'active navbar-brand' : 'navbar-brand'}
          >
            <img src={Logo1} alt="Logo Murilo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FiMenu size={24} />
          </Navbar.Toggle>
          <Navbar.Collapse className="offcanvas offcanvas-end" id="basic-navbar-nav">
            <div className="offcanvas-header">
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FiX size={24} />
              </Navbar.Toggle>
            </div>
            <Nav className='me-auto'>
              <Link
                to='/'
                className={home === true ? 'active' : ''}
              >
                Home
              </Link>
              <Link
                to='/calculadora'
                className={calc === true ? 'active' : ''}
              >
                Calculadora
              </Link>
              <Link
                to='/financas'
                className={finance === true ? 'active' : ''}
              >
                Finanças
              </Link>
              <NavDropdown
                title="Pokemon"
                id="basic-nav-dropdown"
                className={pokemon || pokemonFavorite === true ? 'subActive' : ''}
              >
                <Link
                  to='/pokemons'
                  className={pokemon === true ? 'active' : 'subInative'}
                >
                  Pokemons
                </Link>
                <Link
                  to='/pokemons/favoritos'
                  className={pokemonFavorite === true ? 'active' : 'subInative'}
                >
                  Favoritos
                </Link>
              </NavDropdown>
              <NavDropdown
                title="Shop"
                id="basic-nav-dropdown"
                className={cart || shop === true ? 'subActive' : ''}
              >
                <Link
                  to='/shop'
                  className={shop === true ? 'active' : 'subInative'}
                >
                  Shop
                </Link>
                <Link
                  to='/shop/carrinho'
                  className={cart === true ? 'active' : 'subInative'}
                >
                  Carrinho
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </Content >
  );
}
