import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */

  #divButton {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 2rem;
  }

  > div {
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem; */
  }

`;

export const ButtonNewTransaction = styled.button`
   display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 2em;
  border: none;
  color: var(--white-100);
  background: var(--green);
  font-size: 1.25rem;
  font-weight: 600;
  transition: filter 0.2s;

  svg {
    background: var(--white-100);
    color: var(--green);
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 428px) {
    width: 100%;
    border-radius: 0.25rem;
  }
`;
