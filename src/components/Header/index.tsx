import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import { ThemesMode } from '../../components/ThemesMode';

import Logo1 from '../../assets/LogoPNG2.png';

import { Container, Content, Title, NavBar } from './styles';

export function Header() {
  const [path, setPath] = useState('');
  const [home, setHome] = useState('inative');
  const [calc, setCalc] = useState('inative');
  const [finance, setFinance] = useState('inative');
  const [pokemon, setPokemon] = useState('inative');
  const [menu, setMenu] = useState('menuInative');

  useEffect(() => {
    switch (path) {
      case 'home':
        setHome('active');
        setCalc('inative');
        setFinance('inative');
        setPokemon('inative');
        setMenu('menuInative');
        break;
      case 'calculadora':
        setCalc('active');
        setHome('inative');
        setFinance('inative');
        setPokemon('inative');
        setMenu('menuInative');
        break;
      case 'financas':
        setFinance('active');
        setHome('inative');
        setCalc('inative');
        setPokemon('inative');
        setMenu('menuInative');
        break;
      case 'pokemon':
        setPokemon('active');
        setFinance('inative');
        setHome('inative');
        setCalc('inative');
        setMenu('menuInative');
        break;

      default:
        const routePathName = window.location.pathname;
        switch (routePathName) {
          case '/':
            setHome('active');
            break;
          case '/calculadora':
            setCalc('active');
            break;
          case '/financas':
            setFinance('active');
            break;
          case '/pokemon':
            setPokemon('active');
            break;
          default:
            setMenu('menuInative')
            break;
        }
        break;
    }
  }, [path]);

  function handleMenu() {
    menu === 'menuInative' ? setMenu('menuActive') : setMenu('menuInative')
  }

  return (
    <Container>
      <Content>
        <ThemesMode />
        <Title>
          <Link to="/" onClick={() => setPath('home')}>
            <img src={Logo1} alt="Logo Murilo" />
          </Link>
        </Title>
        <NavBar>
          <button
            type='button'
            className={menu === 'menuActive' ? 'menuActive' : 'menuInative'}
            onClick={handleMenu}
          >
            {menu === 'menuActive' ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

          <ul id={menu}>
            <li>
              <Link to="/" className={home} onClick={() => setPath('home')}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/calculadora" className={calc} onClick={() => setPath('calculadora')}>
                Calculadora
              </Link>
            </li>

            <li>
              <Link to="/financas" className={finance} onClick={() => setPath('financas')}>
                Finanças
              </Link>
            </li>

            <li>
              <Link to="/pokemon" className={pokemon} onClick={() => setPath('pokemon')}>
                Pokemon
              </Link>
            </li>
          </ul>
        </NavBar>
      </Content>
    </Container >
  );
};
;
