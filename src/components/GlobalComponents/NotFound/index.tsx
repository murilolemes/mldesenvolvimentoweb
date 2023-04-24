import alert from 'assets/Icons/alert.svg';

import { Container } from "./styles"

export function NotFound() {
  return (
    <Container>
      <h1>
        <img src={alert} alt="Alert" />
        Error 404
        <img src={alert} alt="Alert" />
      </h1>
      <h2>Página não encontrada!</h2>
      <h2>🙁</h2>
    </Container>
  )
}
