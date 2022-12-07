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

    #buttonCart {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: transparent;
      border: none;
      transition: 0.2s;

      span {
        width: 0.75rem;
        height: 0.75rem;
        font-size: 0.625rem;
        background: var(--red);
        border-radius: 50% 50% 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -2px;
        right: 10px;
        color: var(--white-100);
      }

      svg {
        color: var(--green);
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  #inputSearch {
    width: 31rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background: var(--secondary);
    box-shadow: 0 0 2px var(--primary);
    border-radius: 0.25rem;

    input {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--primary-light);
      font-weight: 500;
      padding: 0.5rem;

      &::placeholder {
        color: var(--primary);
        font-weight: 400;
      }
    }

    button{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      padding: 0.25rem;
      border-radius: 0 0.25rem 0.25rem 0;
      transition: 0.2s;

      svg {
        color: var(--primary-light);
      }

      &:hover {
        background: var(--background);
      }
    }
  }
`;

