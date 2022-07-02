import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0.2rem 0.2rem;
    th {
      color: var(--primary);
      font-weight: 400;
      padding: 1rem 1rem;
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
      padding: 0.5rem 2rem;
      border: 0;
      background: var(--primary-light);
      color: var(--secondary);
      border-radius: 0.25rem;
      &:first-child {
        color: var(--background);
        font-weight: 500;
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }

    }

    #trash {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: var(--primary-light);
        color: var(--secondary);
        transition: color 0.2s;

        &:hover {
          color: var(--red);
        }
      }
    }
  }
`;


export const DivPages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.25rem 0;

  p {
    margin: 0 1rem;
  }

  button {
    height: 2.5rem;
    width: 2.5rem;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    color: var(--primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    & + button {
      margin-left: 1rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    :hover {
      background: var(--secondary);
    }
  }
`;

