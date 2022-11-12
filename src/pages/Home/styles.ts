import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Perfil = styled.div`
  width: 100%;
  height: 25rem;
  /* padding: 1rem; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h1 {
      width: 100%;
      font-size: 2rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 1rem;
      color: var(--primary);
      text-align: justify;
      line-height: 1.5rem;

      & + p {
        margin-top: 1rem;
      }
    }

    /* .bio {
      width: 100%;
      height: 12rem;
      font-size: 1.4rem;
      text-align: justify;
      padding-right: 1rem;
      line-height: 1.6rem;
      color: var(--primary);
    } */
  }

  @media(max-width: 530px) {
    height: auto;
    flex-direction: column;

    .header {
      width: 100%;

      h1, .bio {
        text-align: center;
      }

      /* .bio {
        height: auto;
        padding-right: 0;
      } */
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
      /* .bio {
        font-size: 1.25rem;
      } */
    }
  }
`;

export const Description = styled.div`
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

  @media(max-width: 530px) {
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
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      color: var(--primary-light);
      transition: 0.2s;

      & + button {
        margin-left: 0.5rem;
      }

      &:hover {
        border: 1px solid var(--primary-light);
        background: var(--primary-light);
        color: var(--background);
      }
    }

    .listActive {
      border: 1px solid var(--primary-light);
      background: var(--primary-light);
      color: var(--background);
    }

    .listInative {
      border: none;
      background: initial;
      color: var(--primary-light);
    }
  }
`;

export const Repos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  #listCompact{
    width: 100%;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    a {
      height: 3.5rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--secondary);
      border: 1px solid var(--secondary);
      border-radius: 0.25rem;
      transition: background 0.2s;

      &:hover {
        background: var(--background);
      }

      h2 {
        font-size: 1.2rem;
      }

      p{
        display: none;
      }

      img {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }

  #listGroup {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;

    a {
      width: 22rem;
      height: 25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: var(--secondary);
      border-radius: 0.25rem;
      border: 1px solid orange;

      /* h2, p {
        width: calc(18.75rem - 2rem);
        width: 100%;
        border: 1px solid red;
        text-align: center;
      } */

      h2 {
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--background);
      }

      p {
        font-size: 0.875rem;

      }

      /* & + a {
        margin-left: 1rem;
      } */

      &:hover {
        border: 1px solid var(--primary-light);
        box-shadow: 0 0 4px 1px var(--primary-light);
      }
    }
  }

  /* #arrowLeft, #arrowRight {
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    bottom: 50%;
    border: none;
    opacity: 0.5;
    transition: 0.2s;
    background: var(--primary-light);
    color: var(--background);

    &:hover {
      opacity: initial;
    }

    &:disabled {
      opacity: 0.1;
    }
  } */

  /* #arrowLeft {
    left: 3rem;
  } */

  /* #arrowRight {
    right: 3rem;
  } */

  /* .listGroup {
    display: flex;
  } */

  /* .listCompact {
    display: none;
  } */

  /* @media(max-width: 930px) {
    #listGroup {
      overflow-x: scroll;

      a {
        margin-bottom: 0.25rem;
      }
    }

    .listCompact, .listGroup {
      display: none;
    }
  }

  @media(max-width: 768px) {
    #listCompact {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media(max-width: 530px) {
    #listCompact {
      grid-template-columns: auto;

      a {
        h2 {
          font-size: 1rem;
        }
      }
    }
  } */
`;
