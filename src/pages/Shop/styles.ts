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
    background: var(--white-100);
    border: 1px solid var(--blue-800);
    border-radius: 0.25rem;

    input {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--blue-900);
      font-weight: 500;
      padding: 0.5rem;

      &::placeholder {
        color: var(--blue-800);
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
        color: var(--blue-800);
      }

      &:hover {
        background: var(--white-100);
        filter: brightness(0.95);
      }
    }
  }
`;

export const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem 0;

  .card {
    width: 18.75rem;
    height: 31rem;
    background: var(--white-100);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    border-radius: 0.25rem;
    transition: 0.2s;

    .img {
      height: 15.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
    }

    &:hover {
      box-shadow: 0 0 4px 1px var(--white-100);
    }
  }
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 1rem;
  color: var(--blue-900);
  box-shadow: 0 0 8px 1px var(--blue-800);

  .inf {
    p {
      font-size: 0.875rem;

      &:first-child {
        font-size: 1rem;
        font-weight: 600;
      }

      span {
        font-size: 1rem;
        font-weight: 700;
        color: var(--red);
      }

      .firstValue {
        text-decoration: line-through;
      }
    }
  }

  .quantidade {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      font-size: 2rem;
      margin: 0 1rem;
      font-weight: 500;
    }

    button {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-100);
      border: none;
      border-radius: 0.25rem;
      transition: 0.1s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .btnMinus {
      background: var(--red);
    }

    .btnPlus {
      background: var(--green);
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.25rem;
      font-weight: 700;

      span {
        color: var(--red);
      }
    }
  }

  .btnComprar {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.25rem;
    border: none;
    border-radius: 0.25rem;
    background: var(--green);
    color: var(--white-100);
  }
`;
