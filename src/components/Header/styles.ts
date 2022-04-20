import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 170px;
  padding: 10px;
  background: linear-gradient(var(--secondary), var(--background));
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--background);

  a {
    width: 150px;
    height: 150px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: 0.6s;
      border-top: 3px solid var(--background);
      border-right: 3px solid var(--background);
      border-bottom: 3px solid var(--secondary-light);
      border-left: 3px solid var(--secondary-light);

      &:hover {
        transform: rotate(360deg);
      }
    }
  }

  @media (max-width: 599px) {
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
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    a {
      font-size: 2rem;
      font-weight: 500;
      color: var(--primary-light);
      text-decoration: none;
    }

    li {
      a {
        transition: color 0.2s;

        &:hover {
          color: var(--primary);
        }
      }
      & + li {
        margin-left: 15px;
      }
    }
  }

  .active {
    color: var(--primary);
  }

  @media (max-width: 599px) {
    justify-content: center;

    ul {
      a {
        font-size: 1.4rem;
      }
    }
  }
`;
