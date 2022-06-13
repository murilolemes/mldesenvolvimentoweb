import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
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

  .btnRemove {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      height: 2rem;
      border: none;
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-light);
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
