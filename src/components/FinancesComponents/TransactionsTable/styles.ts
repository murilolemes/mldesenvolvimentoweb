import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  padding-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: initial;

    th {
      color: var(--text);
      padding: 0.5rem;
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
      padding: 0.5rem;
      border: 0;
      background: var(--secondary);
      color: var(--gray-600);
      box-shadow: 0 0 2px var(--green-300);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text);
        font-weight: 600;
      }

      &.deposit {
        color: var(--green-300);
        font-weight: 600;
      }

      &.withdraw {
        color: var(--red-300);
        font-weight: 600;
      }

    }

    #trash {
      width: 2rem;
      height: 100%;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--gray-100);
        transition: color 0.2s;

        &:hover {
          color: var(--red-300);
        }
      }
    }
  }

  @media(max-width: 1080px) {
    padding-bottom: 0.5rem;
    overflow-x: scroll;

    ::-webkit-scrollbar-track {
      background-color: var(--gray-700);
      border-radius: 0.25rem;
    }

    ::-webkit-scrollbar {
      height: 6px;
      border-radius: 0.25rem;
      background-color: var(--gray-700);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--purple-400);
      border-radius: 0.25rem;
    }

    table {
      width: 1248px;
    }
  }

  @media (max-width: 768px) {
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
`;

export const DivPages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 0;

  p {
    margin: 0 1rem;
  }

  button {
    height: 2.5rem;
    width: 2.5rem;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    color: var(--text);
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
      border: 1px solid var(--green-300);
      box-shadow: 0 0 8px var(--green-300);
    }
  }
`;

