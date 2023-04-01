import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .navbar-brand {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 3.75rem;
    }
  }

  .navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      max-width: 1248px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;

      .navbar-toggler {
        display: none;
      }

      .navbar-brand {
        padding: 0;
        margin: 0;
      }

      .offcanvas {
        background: var(--gray-700);

        .offcanvas-header {
          width: 3rem;
          height: 3rem;
          position: absolute;
          right: 1rem;
          top: 1rem;
        }
      }

      button {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        box-shadow: none;
        border-radius: 0.5rem;
        background: var(--purple-400);

        svg {
          color: var(--gray-100);
        }

        &:hover {
          border: none;
          box-shadow: none;
        }
      }

      .navbar-collapse {
        flex-grow: initial;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 500;
          color: var(--purple-400);
          transition: 0.2s;
          padding: 0.375rem;
          background: transparent;
          border-radius: 0.25rem;
          border: none;

          &:hover {
            color: var(--green-300);
            margin: 0 0.25rem;
            filter: opacity(0.9);
          }
        }

        .nav-item {
          position: relative;
        }

        .active {
          color: var(--green-300);
          margin: 0 0.25rem;
          font-weight: 700;
        }
      }

      .dropdown-menu {
        max-width: 200px;
        background: var(--background);
        border: 1px solid var(--purple-400);
        right: 0;
        left: auto;

        .active {
          color: var(--green-300);
          margin: 0 0.25rem;
          font-weight: 700;
        }
      }

      .subActive {
        a {
          color: var(--green-300);
        }

        .subInative {
          color: var(--purple-400);
        }
      }
    }
  }

  @media(max-width: 991px) {
    .navbar {
      display: flex;
      align-items: center;
      justify-content: center;

      .container {
        .navbar-toggler {
          display: flex;
          position: absolute;
          right: 0;
          bottom: 0;
        }

        .offcanvas {
          padding: 1rem;
        }

        button {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }

  @media(max-width: 425px) {
    .navbar {
      .container {
        position: relative;

        button {
          width: 2.5rem;
          height: 2rem;
        }
      }
    }
  }

  @media(max-width: 375px) {
    .navbar {
      .container {
        position: relative;

        .navbar-brand {
          width: 15rem;
        }
      }
    }
  }
`;
