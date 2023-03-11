import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 9.375rem;
  padding: 1rem;
  background: linear-gradient(var(--gray-700), var(--background));

  @media(max-width: 768px) {
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

  @media(max-width: 768px) {
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

  @media(max-width: 768px) {
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 500;
        color: var(--purple-400);
        transition: 0.2s;
        padding: 0.375rem;
        background: transparent;
        border-radius: 0.25rem;
        border: none;

        &:hover {
          color: var(--green-300);
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
    color: var(--green-300);
    border-radius: 0.25rem;
    margin: 0 0.25rem;
    font-weight: 700;
  }

  @media(max-width: 768px) {
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: var(--green-300);
      border: none;
    }

    .buttonActive {
      width: 2rem;
      height: 100%;
      background: var(--gray-700);
      border-radius: 0.25rem 0 0 0.25rem;
    }

    .buttonInative {
      width: 2rem;
      height: 100%;
      background: none;
      border-radius: 0;
    }

    #menuInative {
      display: none;
    }

    #menuActive {
      width: calc(100% - 2rem);
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 0;
      left: 2rem;
      border: none;
      background: var(--gray-700);
      padding: 0.625rem;
      border-radius: 0 0.25rem 0.25rem;

      li {
        width: 100%;
        height: 3rem;

        a {
          height: 100%;
          width: 100%;
          padding: 0;

          &:hover {
            margin: 0;
          }
        }

        & + li {
          margin-left: 0;
          margin-top: 0.625rem;
        }
      }
    }

    .active {
      margin: 0;
      box-shadow: 0px 0px 4px 2px var(--green-300);
      border: 1px solid var(--green-300);
      color: var(--green-300);
    }
  }
`;
