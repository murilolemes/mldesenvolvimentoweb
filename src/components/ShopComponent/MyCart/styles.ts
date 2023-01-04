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

    img {
      max-width: 16.75rem;
      max-height: 13.5rem;
    }
  }

  &:hover {
    box-shadow: 0 0 6px 2px var(--primary);
  }

  @media (max-width: 768px) {
    height: 12.5rem;

    .img {
      width: 12.5rem;

      img {
        max-width: 11.5rem;
        max-height: 11.5rem;
      }
    }
  }

  @media (max-width: 428px) {
    .img {
      width: 6rem;

      img {
        max-width: 5rem;
        max-height: 5rem;
      }
    }
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

  @media (max-width: 768px) {
    .inf {
      p {
        font-size: 0.75rem;

        &:first-child {
          font-size: 1rem;
        }

        span {
          font-size: 1rem;
        }
      }
    }

    .qntTotal {
      .qnt {
        p {
          font-size: 1rem;
        }

        .btnQntd {
          p {
            font-size: 1.5rem;
          }

          button {
            width: 1.5rem;
            height: 1.5rem;

            svg {
              width: 0.75rem;
              height: 0.75rem;
            }
          }
        }
      }
    }

    .total {
      p {
        font-size: 1rem;

        span {
          font-size: 1.25rem;
        }
      }
    }

    .btnTrash {
      width: 3rem;
    }
  }

  @media (max-width: 428px) {
    .infTotal {
      flex-direction: column;
    }

    .inf {
      width: 100%;
    }

    .qntTotal {
      width: 100%;
      height: auto;
      align-items: flex-start;

      .qnt {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .total {
      width: 100%;
      margin-top: 0.25rem;

      p {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;
