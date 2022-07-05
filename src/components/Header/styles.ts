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
  position: relative;

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
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* border: 1px solid red; */

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
    /* border: 1px solid yellow; */

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
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--primary-light);
        text-decoration: none;
        transition: color 0.2s;
        padding: 0.375rem;
        /* border: 1px solid green; */

        &:hover {
          border: 2px solid #F5F5F5;
          box-shadow: 0px 0px 4px 4px #F5F5F5;
          border-radius: 0.25rem;
          /* padding: 4px; */
        }
      }

      & + li {
        margin-left: 0.625rem;
      }
    }
  }

  .active {
    border: 1px solid #F5F5F5;
    box-shadow: 0px 0px 4px 4px #F5F5F5;
    border-radius: 0.25rem;
    /* padding: 4px; */
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
