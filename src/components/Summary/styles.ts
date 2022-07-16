import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  div {
    background: var(--primary-light);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--background);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 1.4rem;
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2.3rem;
      font-weight: 500;
      line-height: 3rem;
      text-align: center;
    }

    #valueDeposit {
      color: var(--green);
    }

    #valueWithdraw {
      color: var(--red);
    }
  }
  .positive {
    background: var(--green);
    color: var(--blue-900);
  }

  .negative {
    background: var(--red);
    color: var(--blue-900);
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
