import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 7.5rem;
  padding: 0.625rem;
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
    font-size: 0.625rem;

    svg {
      margin-right: 0.063rem;
    }
  }

  /* @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  } */
`;
