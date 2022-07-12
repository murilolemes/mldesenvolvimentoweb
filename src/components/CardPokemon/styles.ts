import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  width: 20rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary);
  border-radius: 0.25rem;
  box-shadow: 0 0 4px 1px var(--primary);
  background: var(--secondary-light);
  transition: 0.2s;

  #title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.375rem 1rem 0;

    h1 {
      text-align: center;
      color: var(--white-100);
    }

    p{
      font-size: 0.75rem;
      filter: opacity(0.4);
    }
  }

  #imgPokemon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

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
    align-items: flex-start;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: var(--white-100);

    .stats, .skills {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      p {
        width: 100%;
        text-align: center;
        font-weight: 500;
        color: var(--blue-900);
      }

      div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0.25rem;

        p {
          width: 100%;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }

    .skills {
      border-left: 1px solid var(--blue-800);
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
