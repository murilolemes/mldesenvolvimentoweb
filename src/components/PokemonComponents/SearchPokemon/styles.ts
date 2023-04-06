import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 32rem;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    button {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--purple-400);
      border-radius: 0.25rem;
      border: 1px solid var(--purple-400);
      color: var(--gray-100);
      padding: 0.5rem 1rem;
      transition: 0.2s;

      &:hover {
        border-color: var(--green-300);
        box-shadow: 0 0 8px var(--green-300);
      }
    }
  }

  @media (max-width: 428px) {
    width: 100%;

    form {
      width: 100%;
      flex-direction: column;
    }
  }

`;
