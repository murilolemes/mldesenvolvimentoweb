import { ThemesMode } from 'components/GlobalComponents/ThemesMode';
import { NavBar } from 'components/GlobalComponents/Header/NavBar'

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <ThemesMode />
        <NavBar />
      </Content>
    </Container>
  );
};
