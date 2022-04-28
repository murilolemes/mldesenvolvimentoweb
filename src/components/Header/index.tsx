import { Link } from 'react-router-dom';

import Logo1 from '../../assets/Logo1.png';

import { Container, Content, Title, NavBar } from './styles';

export function Header() {
  const routePathName = window.location.pathname;

  const activeHome = routePathName === '/' ? 'active' : '';
  const activeCalc = routePathName === '/calculadora' ? 'active' : '';
  const activeFin = routePathName === '/finances' ? 'active' : '';

  return (
    <Container>
      <Content>
        <Title>
          <Link to="/">
            <img src={Logo1} alt="Logo Murilo" />
          </Link>
        </Title>
        <NavBar>
          <ul>
            <li>
              <Link to="/" className={activeHome}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/calculadora" className={activeCalc}>
                Calculadora
              </Link>
            </li>

            <li>
              <Link to="/financas" className={activeFin}>
                Finanças
              </Link>
            </li>
          </ul>
        </NavBar>
      </Content>
    </Container>
  );
};
