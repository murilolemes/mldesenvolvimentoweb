import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--white-50);
  border-radius: 0.25rem;
  transition: 0.2s;
  box-shadow: 0 0 4px var(--primary);

  .img {
    width: 18.75rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1px var(--primary);
  }

  &:hover {
    box-shadow: 0 0 6px 2px var(--primary);
  }
`;

export const Description = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--blue-900);

  .infTotal {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .inf {
    p {
      font-size: 1rem;

      &:first-child {
        font-size: 1.125rem;
        font-weight: 700;
      }

      span {
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--red);
      }

      .firstValue {
        text-decoration: line-through;
      }

      & + p {
        margin-top: 0.25rem;
      }
    }
  }

  .qntTotal {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    .qnt {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      p {
        font-size: 1.25rem;
        font-weight: 700;
      }

      .btnQntd {
        display: flex;
        align-items: center;
        justify-content: center;

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
          transition: filter 0.2s;

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
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.25rem;
      font-weight: 700;

      span {
        color: var(--red);
        font-size: 1.5rem;
      }
    }
  }

  .btnTrash {
    width: 5.5rem;
    height: 100%;
    background: var(--red);
    color: var(--white-100);
    border: none;
    border-radius: 0 0.25rem 0.25rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
