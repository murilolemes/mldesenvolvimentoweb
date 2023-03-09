import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem 1rem;
`;

export const Content = styled.div`
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;

  .divHeader {
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      width: 15rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      border: 1px solid var(--blue-800);
      background: var(--blue-800);
      transition: 0.2s;

      &:hover {
        background: var(--blue-900);
      }
    }
  }
`;
