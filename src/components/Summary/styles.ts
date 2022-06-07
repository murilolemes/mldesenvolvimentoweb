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
    color: var(--primary-light);
  }

  .negative {
    background: var(--red);
    color: var(--primary-light);
  }
`;
