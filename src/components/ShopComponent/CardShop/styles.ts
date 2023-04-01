import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem 0;

  @media (max-width: 1279px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 18.75rem;
  height: 31rem;
  background: var(--gray-100);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  border-radius: 0.25rem;
  transition: 0.2s;
  border: 1px solid var(--gray-600);
  box-shadow: 0 0 4px var(--gray-600);

  .img {
    height: 15.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.25rem 0.25rem 0 0;
    border-bottom: 1px solid var(--gray-500);

    img {
      max-width: 17.75rem;
      max-height: 14.5rem;
    }
  }

  &:hover {
    box-shadow: 0 0 6px var(--green-300);
    border-color: var(--green-300);
  }
`;

export const Description = styled.div`
  height: 15.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 1rem;
  color: var(--gray-900);

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
        color: var(--red-300);
      }

      .firstValue {
        font-size: 0.875rem;
        text-decoration: line-through;
      }

      & + p {
        margin-top: 0.25rem;
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
      color: var(--gray-100);
      border: none;
      border-radius: 0.25rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .btnMinus {
      background: var(--red-300);
    }

    .btnPlus {
      background: var(--green-300);
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
        color: var(--red-300);
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
    background: var(--purple-400);
    border: 1px solid var(--purple-400);
    color: var(--gray-100);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
