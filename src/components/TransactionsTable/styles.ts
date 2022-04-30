import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--secondary-light);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      &:last-child {
        width: 9.375rem;
      }
    }

    #valueId {
        width: 20rem;
      }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--primary-light);
      color: var(--secondary);
      border-radius: 0.25rem;
      &:first-child {
        color: var(--background);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
