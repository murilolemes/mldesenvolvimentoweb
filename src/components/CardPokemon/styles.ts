import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled.div`
  width: 18.75rem;
  height: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary);
  border-radius: 0.25rem;
  box-shadow: 0 0 4px 1px var(--primary);
  background: var(--white-100);
  transition: 0.2s;

  #title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.375rem 1rem 0;

    h1 {
      font-size: 1.5rem;
      text-align: center;
      color: var(--white-100);
      text-transform: capitalize;
    }

    p{
      font-size: 0.625rem;
      background: var(--white-100);
      color: var(--blue-900);
      filter: opacity(0.4);
      padding: 0.25rem;
      border-radius: 0.25rem;
    }
  }

  #imgPokemon {
    width: 100%;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .type {
      position: absolute;
      right: 1rem;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: opacity(0.8);

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        background: var(--white-100);
        color: var(--blue-800);
        border-radius: 0.375rem;

        p {
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: capitalize;
        }

        &+div {
          margin-left: 0.25rem;
        }
      }
    }

    img {
      width: 13rem;
      height: 13rem;
      position: absolute;
      top: 0;
    }
  }

  .descriptions {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background-color: var(--white-100);

    .stats, .skills {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 3rem 0.75rem 0.25rem;

      h4 {
        color: var(--blue-900);
      }

      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.25rem;
        background: #dfdfdf;
        border-radius: 0.25rem;

        & + div {
          margin-top: 0.25rem;
        }

        p {
          font-size: 0.75rem;
          color: var(--blue-800);
          text-transform: capitalize;
        }
      }
    }
  }

  &:hover {
    border-color: var(--primary-light);
    box-shadow: 0 0 4px 2px var(--primary-light);
  }

  .btnRemove {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      height: 2rem;
      border: none;
      border-radius: 0 0 0.25rem 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-100);
      font-weight: 500;
      transition: filter 0.2s;

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
  }
`;
