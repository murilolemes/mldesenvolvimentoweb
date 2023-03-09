import styled from "styled-components";

export const Container = styled.div`
  form {
    width: 32rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--background);
      border-radius: 0.25rem;
      border: 1px solid var(--blue-800);
      color: var(--primary-light);
      padding: 0.5rem 1rem;
      transition: 0.2s;
      margin-left: 0.25rem;

      &:hover {
        background: var(--blue-800);
      }
    }
  }
`;
