import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 1.875rem 0.625rem 0.625rem 0.625rem;
  margin: 0 auto;
`;

export const ButtonNewTransaction = styled.button`
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  border: none;
  color: var(--secondary);
  background: var(--primary);
  font-size: 1.2rem;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
