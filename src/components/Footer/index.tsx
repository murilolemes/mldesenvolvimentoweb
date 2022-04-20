import { CgCopyright } from 'react-icons/cg';

import { Container, Content } from './styles';

export function Footer() {
  return (
    <Container>
      <Content>
        <p className="copyright">
          <CgCopyright size={16} />
          Desenvolvido por ML Desenvolvimento Web
        </p>
      </Content>
    </Container>
  );
}
