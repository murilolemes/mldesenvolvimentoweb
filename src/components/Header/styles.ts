import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 9.375rem;
  padding: 1rem;
  background: linear-gradient(var(--secondary-light), var(--background));

  @media(max-width: 530px) {
    height: auto;
  }
`;

export const Content = styled.div`
  max-width: 1248px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;

  @media(max-width: 530px) {
    flex-direction: column;
    height: 6.25rem;
  }
`;

export const Title = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media(max-width: 530px) {
    width: 12.5rem;
    height: 3.75rem;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    display: none;
  }

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
        font-weight: 600;
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
    box-shadow: 0px 0px 4px 2px var(--white-100);
    border-radius: 0.25rem;
    margin: 0 0.25rem;
    font-weight: 700;
  }

  @media(max-width: 530px) {
    width: initial;
    justify-content: flex-start;
    margin-top: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1000;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: var(--white-100);
      border: none;
    }

    #menuInative {
      display: none;
    }

    .menuActive {
      width: 2rem;
      height: 100%;
      background: var(--secondary-light);
      border-radius: 0.25rem 0 0 0.25rem;
    }

    .menuInative {
      width: initial;
      height: initial;
      background: none;
      border-radius: 0;
    }

    #menuActive {
      flex-direction: column;
      width: 17.5rem;
      height: 12.5rem;
      position: absolute;
      border: none;
      top: 0;
      left: 2rem;
      align-items: flex-start;
      background: var(--secondary-light);
      padding: 0.5rem;
      border-radius: 0 0.25rem 0.25rem;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          font-size: 0.875rem;
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
          margin-left: 0;
          margin-top: 0.5rem;
        }
      }
    }

    .active {
      border: 1px solid var(--white-100);
      box-shadow: 0px 0px 2px 2px var(--white-100);
      border-radius: 0.25rem;
    }
  }
`;
