import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo1 from '../../assets/Logo1.png';

import { Container, Content, Title, NavBar } from './styles';

export function Header() {
  const [path, setPath] = useState('');
  const [home, setHome] = useState('inative');
  const [calc, setCalc] = useState('inative');
  const [finance, setFinance] = useState('inative');

  useEffect(() => {
    switch (path) {
      case 'home':
        setHome('active');
        setCalc('inative');
        setFinance('inative');
        break;
      case 'calculadora':
        setCalc('active');
        setHome('inative');
        setFinance('inative');
        break;
      case 'financas':
        setFinance('active');
        setHome('inative');
        setCalc('inative');
        break;

      default:
        const routePathName = window.location.pathname;
        console.log(routePathName)
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
          default:
            break;
        }
        break;
    }
  }, [path]);

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
          </ul>
        </NavBar>
      </Content>
    </Container >
  );
};
;
