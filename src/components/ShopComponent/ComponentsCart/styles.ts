import styled from "styled-components";

export const ContainerInputSearch = styled.div`
  width: 31rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: var(--secondary);
  box-shadow: 0 0 2px var(--primary);
  border-radius: 0.25rem;

  form {
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--primary-light);
      font-weight: 500;
      padding: 0.5rem;

      &::placeholder {
        color: var(--primary);
        font-weight: 400;
      }
    }

    button{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      padding: 0.25rem;
      border-radius: 0 0.25rem 0.25rem 0;
      transition: 0.2s;

      svg {
        color: var(--primary-light);
      }

      &:hover {
        background: var(--background);
      }
    }
  }
`;
