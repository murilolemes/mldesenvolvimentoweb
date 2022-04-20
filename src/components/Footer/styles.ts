import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  background: linear-gradient(
    0,
    var(--secondary),
    var(--background)
  );
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  }
`;
