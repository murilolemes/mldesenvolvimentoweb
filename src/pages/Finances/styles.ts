import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 30px 10px 10px 10px;
  margin: 0 auto;
`;

export const ButtonNewTransaction = styled.button`
  width: 100%;
  height: 5rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  border: none;
  color: var(--primary-light);
  background: var(--secondary);
  font-size: 2rem;
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Summary = styled.div``;
