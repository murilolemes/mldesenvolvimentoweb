import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  div {
    background: var(--white);
    padding: 1rem;
    border-radius: 0.25rem;
    color: var(--gray-900);
    box-shadow: 0 0 4px var(--purple-400);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 700;
      line-height: 3rem;
      text-align: center;
    }

    #valueDeposit {
      color: var(--green-300);
    }

    #valueWithdraw {
      color: var(--red-300);
    }
  }
  .positive {
    background: var(--green-300);
    color: var(--gray-900);
  }

  .negative {
    background: var(--red-300);
    color: var(--gray-900);
  }

  @media(max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media(min-width: 769px) and (max-width: 834px) {
    div {
      padding: 1rem;
      strong {
        font-size: 1.8rem;
      }
    }
  }
`;
