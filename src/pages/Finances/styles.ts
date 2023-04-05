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
`;

export const ButtonNewTransaction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: none;
  color: var(--purple-400);
  background: none;
  border-bottom: 1px solid var(--purple-400);
  font-size: 1.25rem;
  font-weight: 600;
  transition: 0.2s;

  svg {
    background: var(--purple-400);
    color: var(--background);
    border-radius: 50%;
    margin-right: 0.5rem;
    transition: 0.2s;
  }

  &:hover {
    border-bottom: 1px solid var(--green-300);
    color: var(--green-300);

    svg {
      background: var(--green-300);
    }
  }

  @media (max-width: 428px) {
    width: 100%;
    background: var(--purple-400);
    color: var(--gray-100);
    border-radius: 0.25rem;
    border: 1px solid var(--purple-400);

    svg {
      color: var(--gray-100);
    }

    &:hover {
      border: 1px solid var(--green-300);
      color: var(--gray-100);

      svg {
        background: var(--purple-400);
      }
    }
  }
`;
