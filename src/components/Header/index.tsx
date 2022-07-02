import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi'

import Logo1 from '../../assets/Logo1.png';

import { Container, Content, Title, NavBar, DarkTheme } from './styles';

export function Header() {
  const [path, setPath] = useState('');
  const [home, setHome] = useState('inative');
  const [calc, setCalc] = useState('inative');
  const [finance, setFinance] = useState('inative');
  const [pokemon, setPokemon] = useState('inative');
  const [theme, setTheme] = useState('darkTheme');

  useEffect(() => {
    switch (path) {
      case 'home':
        setHome('active');
        setCalc('inative');
        setFinance('inative');
        setPokemon('inative');
        break;
      case 'calculadora':
        setCalc('active');
        setHome('inative');
        setFinance('inative');
        setPokemon('inative');
        break;
      case 'financas':
        setFinance('active');
        setHome('inative');
        setCalc('inative');
        setPokemon('inative');
        break;
      case 'pokemon':
        setPokemon('active');
        setFinance('inative');
        setHome('inative');
        setCalc('inative');
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
            break;
        }
        break;
    }
  }, [path]);

  function handleDarkTheme() {
    theme === 'darkTheme' ? setTheme('cleanTheme') : setTheme('darkTheme');
  }

  return (
    <Container>
      <Content>
        <Title>
          <Link to="/" onClick={() => setPath('home')}>
            <img src={Logo1} alt="Logo Murilo" />
          </Link>
        </Title>
        <NavBar>
          <ul>
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
        <DarkTheme>
          <button type='button' onClick={handleDarkTheme} id={theme}>
            {theme === 'darkTheme' ? <FiSun /> : <FiMoon />}
          </button>
        </DarkTheme>
      </Content>
    </Container >
  );
};
;
