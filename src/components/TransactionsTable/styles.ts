import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  padding-top: 1rem;
  table {
    width: 100%;
    border-spacing: 0.25rem 0.25rem;

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

  @media(max-width: 1080px) {
    padding-bottom: 0.5rem;
    overflow-x: scroll;

    ::-webkit-scrollbar-track {
      background-color: ${shade(0.6, '#5a6794')};
      border-radius: 0.25rem;
    }

    ::-webkit-scrollbar {
      height: 6px;
      border-radius: 0.25rem;
      background: ${shade(0.6, '#5a6794')};
    }

    ::-webkit-scrollbar-thumb {
      background: var(--secondary-light);
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

