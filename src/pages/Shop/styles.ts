import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 1248px;
  margin: 0 auto;
`;

export const MyShopHeader = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  #title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

