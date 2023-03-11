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
    /* border: 1px solid red; */

    a {
      width: 15rem;
      height: 100%;
      font-weight: 600;
      color: var(--gray-100);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      border: 1px solid var(--purple-400);
      background: var(--purple-400);
      transition: 0.2s;

      &:hover {
        box-shadow: 0 0 8px var(--green-300);
        border-color: var(--green-300);
      }
    }
  }
`;
