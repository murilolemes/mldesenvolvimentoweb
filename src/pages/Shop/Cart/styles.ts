import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem 1rem;
`;

export const Content = styled.div`
  max-width: 1248px;
  margin: 0 auto;
`;

export const MyShopHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 600;
      transition: 0.2s;

      &:hover {
        color: var(--red-300);
      }
    }
  }

  @media (max-width: 768px) {
    .title {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

export const BtnBuy = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background: var(--green-300);
  color: var(--gray-100);
  text-shadow: 1px 1px var(--gray-700);
  font-size: 1.5rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gray-100);
  border: 1px solid var(--gray-700);
  padding: 1rem;
  border-radius: 0.25rem;

  .itens {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--gray-900);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      span {
        font-size: 2rem;
        font-weight: 700;
        color: var(--red-300);
      }
    }
  }

  @media (max-width: 900px) {
    .itens {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 768px) {
    .itens {
      p {
        font-size: 1rem;

        span {
          font-size: 1.25rem;
        }
      }
    }
  }

  @media (max-width: 428px) {
    flex-direction: column;
    align-items: flex-start;

    .itens {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      p {
        & + p {
          margin-top: 0.25rem;
        }
      }
    }

    button {
      width: 100%;
    }
  }
`;
