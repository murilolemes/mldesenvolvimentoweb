import { Container, Content, DivNetworking, MakeYourSite } from './styles';

export function Home() {
  return (
    <Container>
      <Content>
        <DivNetworking>
          <div className="descriptions">
            <h2>Desenvolvimento de Sites</h2>
            <p>Você deseja ter um site para sua loja, empresa ou seu produto?</p>
          </div>
          <div className="images" />
        </DivNetworking>
        <MakeYourSite>
          <div className="images" />
          <div className="descriptions">
            <h2>Sites para todos os tamanhos de telas</h2>
            <p>
              Desenvolve-mos sites responsivo que ajusta em todos os tamanhos de
              telas, Desktop, Mobile, Tablet e TV.
            </p>
          </div>
        </MakeYourSite>
      </Content>
    </Container>
  );
}