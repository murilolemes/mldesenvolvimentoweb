import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--primary-light);
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--primary-light);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--background);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--green);
    color: var(--background);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const CardPokemon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  .card {
    width: 16rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--secondary);
    border-radius: 0.25rem;
    box-shadow: 0 0 4px 1px var(--secondary-light);
    transition: 0.2s;
    padding: 1rem;

    &:hover {
      background: var(--secondary);
      border-color: var(--primary);
      box-shadow: 0 0 4px 1px var(--primary-light);

      .descriptions {
        p {
          color: var(--background);
        }
      }
    }

    h1 {
      text-align: center;
    }

    img {
      flex: 1;
    }

    .descriptions {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      background-color: var(--secondary-light);
      border-radius: 0.25rem;

      & + div {
        margin-top: 1rem;
      }

      p:first-child {
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--background);
      }
    }

    .btnAddRemove {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        width: 6.5rem;
        height: 2rem;
        border: none;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-light);
        font-weight: 500;
        transition: filter 0.2s;
        margin: 0;

        &:hover {
          filter: brightness(0.9);
        }

        svg {
          width: 1.125rem;
          height: 1.125rem;
          margin-right: 0.25rem;
        }
      }

      #remove {
        background: var(--red);
      }

      #btnAdd {
        background: var(--green);
      }
    }
  }
`;
