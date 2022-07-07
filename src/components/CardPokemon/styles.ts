import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  width: 16rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary);
  border-radius: 0.25rem;
  box-shadow: 0 0 4px 1px var(--primary);
  background: var(--secondary-light);
  transition: 0.2s;
  padding: 1rem;

  h1 {
    text-align: center;
    color: var(--white-100);
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
    background-color: var(--white-100);
    border-radius: 0.25rem;
    color: var(--blue-800);

    & + div {
      margin-top: 1rem;
    }

    p:first-child {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--blue-900);
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
      border-radius: 0.25rem;
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
