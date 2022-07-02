import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 9.375rem;
  padding: 0.625rem;
  background: linear-gradient(var(--secondary-light), var(--background));
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  /* @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  } */
`;

export const Title = styled.div`
  width: 7.625rem;
  height: 7.625rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: 0.6s;
      border-top: 0.125rem solid var(--background);
      border-right: 0.125rem solid var(--background);
      border-bottom: 0.125rem solid var(--secondary-light);
      border-left: 0.125rem solid var(--secondary-light);

      &:hover {
        transform: rotate(360deg);
      }
    }
  }

  /* @media (max-width: 599px) {
    width: 100px;
    height: 100px;

    a {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  } */
`;

export const NavBar = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      a {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--primary-light);
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: var(--primary);
        }
      }

      & + li {
        margin-left: 1rem;
      }
    }
  }

  .active {
    color: var(--primary);
  }

  .inative {
    color: var(--primary-light);
  }

  /* @media (max-width: 599px) {
    justify-content: center;

    ul {
      a {
        font-size: 1rem;
      }
    }
  } */
`;

export const DarkTheme = styled.div`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.25rem;
      height: 1.25rem;
      transition: color 0.2s;

      &:hover {
        color: var(--primary-light);
      }
    }
  }
`;
