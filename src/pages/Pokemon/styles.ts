import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem 1rem;
`;

export const Content = styled.div`
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;

  #divButton {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 2rem;
  }

  .cards {
    width: 100%;
    border: 1px solid red;
    padding: 1rem 0;

    .card {
      width: 10rem;
      height: 13rem;
      border: 1px solid orange;
    }
  }
`;

export const ButtonNewTransaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 2rem;
  /* padding: 0.75rem; */
  border-radius: 0.25rem;
  border: 1px solid var(--white-100);
  color: var(--white-100);
  background: none;
  font-size: 1.25rem;
  font-weight: 600;
  transition: filter 0.2s;

  input {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    padding: 0.5rem 0.25rem;
  }

  button {
    width: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;

    svg {
      background: none;
      color: var(--white-100);
    }
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 428px) {
    width: 100%;
    border-radius: 0.25rem;
  }
`;
