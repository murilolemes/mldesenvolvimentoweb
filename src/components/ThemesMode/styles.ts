import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  button {
    width: 2.75rem;
    height: 1.375rem;
    border-radius: 2.125rem;
    border: none;
    background: var(--background);
    position: relative;
    transition: 1s;

    span {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: var(--primary-light);
      position: absolute;
      transition: 1s;
    }

    .darkTheme {
      left: 0.25rem;
      bottom: 0.2rem;
    }

    .lightTheme {
      right: 0.25rem;
      bottom: 0.2rem;
    }

    svg {
      color: black;
    }
  }

  #darkTheme {
    position: absolute;
    height: 1rem;
    width: 1rem;
    right: 0.25rem;
    bottom: 0.2rem;
    color: var(--primary-light);
  }

  #lightTheme {
    position: absolute;
    height: 1rem;
    width: 1rem;
    left: 0.25rem;
    bottom: 0.2rem;
    color: var(--primary-light);
  }
`;
