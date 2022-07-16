import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 9.375rem;
  padding: 0.625rem;
  background: linear-gradient(var(--secondary-light), var(--background));

  @media(max-width: 420px) {
    height: auto;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;

  @media(max-width: 420px) {
    flex-direction: column;
  }
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
`;

export const NavBar = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 1rem;
        font-weight: 500;
        color: var(--blue-900);
        text-decoration: none;
        transition: color 0.2s;
        padding: 0.375rem;
        background: var(--white-100);
        border-radius: 0.25rem;
        border: none;

        &:hover {
          border: 1px solid var(--white-100);
          box-shadow: 0px 0px 4px 2px var(--white-100);
          border-radius: 0.25rem;
          margin: 0 0.25rem;
        }
      }

      & + li {
        margin-left: 0.25rem;
      }
    }
  }

  .active {
    border: 1px solid var(--white-100);
    box-shadow: 0px 0px 4px 2px var(--white-100);
    border-radius: 0.25rem;
    margin: 0 0.25rem;
  }


  @media(max-width: 300px) {
    ul {
      li {
        a {
          font-size: 0.875rem;
        }
      }
    }
  }

  @media(max-width: 420px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;
