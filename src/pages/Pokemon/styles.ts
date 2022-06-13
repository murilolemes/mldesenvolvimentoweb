import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0.625rem;
  margin: 0 auto;

  > div {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

`;

export const ButtonNewTransaction = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  border: none;
  color: var(--primary-light);
  background: var(--secondary);
  font-size: 1.2rem;
  font-weight: 500;
  &:hover {
    filter: brightness(0.9);
  }
`;
