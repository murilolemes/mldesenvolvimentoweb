import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const Perfil = styled.div`
  width: 100%;
  height: 25rem;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
      width: 100%;
      font-size: 3rem;
    }

    .bio {
      width: 100%;
      height: 12rem;
      font-size: 1.4rem;
      text-align: justify;
      padding-right: 1rem;
      line-height: 1.6rem;
      color: var(--primary);
    }
  }

  .description {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      width: 16rem;
      height: 16rem;
      border-radius: 50%;
    }

    .data {
      text-align: center;

      p {
        & + p {
          margin: 0.375rem 0;
        }
      }

      a {
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary-light);
        border: 1px solid var(--secondary-light);
        color: var(--primary-light);
        border-radius: 0.25rem;
        transition: filter 0.2s, color 0.5s;
        padding: 1rem;

        &:hover {
          filter: brightness(0.9);
          color: var(--secondary);
        }

        svg {
          margin-right: 0.375rem;
        }
      }
    }
  }

  @media(max-width: 530px) {
    height: auto;
    flex-direction: column;

    .header {
      width: 100%;

      h1, .bio {
        text-align: center;
      }

      .bio {
        height: auto;
        padding-right: 0;
      }
    }

    .description {
      width: 100%;

      img {
        padding: 1rem;
      }

      .data {
        width: 100%;

        a {
          width: 100%;
        }
      }
    }
  }

  @media(max-width: 550px) {
    .header {
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;

export const Repos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;

  a {
    width: 30rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid var(--primary);
    box-shadow: 0 0 4px 1px var(--primary);
    transition: 0.2s;
    background: var(--secondary-light);

    h2, p {
      width: 100%;
      text-align: center;
    }

    h2 {
      color: var(--background);
    }

    p {
      font-size: 0.9rem;
      color: var(--primary-light);
    }

    &:hover {
      border-color: var(--primary-light);
      box-shadow: 0 0 6px 2px var(--primary-light);
    }
  }

  @media(max-width: 530px) {
    a {
      width: 100%;
    }
  }
`;
