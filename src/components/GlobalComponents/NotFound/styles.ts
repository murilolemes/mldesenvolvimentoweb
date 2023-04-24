import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 140px);
  gap: 1rem;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
