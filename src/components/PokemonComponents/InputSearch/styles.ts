import styled from "styled-components";

export const Container = styled.form`
  width: 30rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  input {
    flex: 1;
    height: 100%;
    padding: 0.25rem 0.5rem;
    background: transparent;
    border: none;
  }

  button {
    width: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 0 4px 4px 0;
    border: 1px solid white;
    color: green;

    &:hover {
      background: var(--white-100);
    }
  }
  border: 1px solid red;
`;
