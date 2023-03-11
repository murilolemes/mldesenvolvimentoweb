import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem 1rem;
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
  height: 26rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: var(--purple-400);
  }

  div {
    max-width: 37.5rem;
    height: 100%;

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: justify;

      & + p {
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;

    h1 {
      margin-bottom: 2rem;
    }

    div {
      max-width: 100%;
    }
  }
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem;


  img {
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1rem;
      color: var(--white);

      & + p {
        margin-top: 0.25rem;
        margin-bottom: 1rem;
      }
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border: 1px solid var(--purple-400);
      border-radius: 0.25rem;
      background: var(--purple-400);
      transition: 0.2s;
      color: var(--gray-100);

      svg {
        margin-right: 0.5rem;
      }

      &:hover {
        border-color: var(--green-300);
        box-shadow: 0 0 8px var(--green-300);
      }
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;

    div {
      margin-top: 1rem;
    }
  }

  @media (max-width: 428px) {
    width: 100%;
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
    font-weight: 600;
    color: var(--title);
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
      transition: 0.2s;

      & + button {
        margin-left: 0.5rem;
      }

      &:hover {
        border-color: var(--green-300);
        box-shadow: 0 0 8px var(--green-300);
        background: var(--purple-400);
        color: var(--white-100);
      }
    }

    .listActive {
      border: 1px solid var(--green-300);
      box-shadow: 0 0 8px var(--green-300);
      background: var(--purple-400);
      color: var(--green-300);
    }

    .listInative {
      border: 1px solid var(--gray-700);
      background: var(--gray-700);
      color: var(--gray-600);
    }
  }
`;

export const Repos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;

  h2 {
    text-transform: capitalize;
    color: var(--green-300);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--gray-700);
    border: 1px solid var(--purple-400);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--gray-700);
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar {
    height: 6px;
    border-radius: 0.25rem;
    background: var(--gray-700);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--purple-400);
    border-radius: 0.25rem;
  }

  #listCompact {
    width: 100%;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    a {
      height: 3.5rem;
      padding: 1rem;

      border-radius: 0.25rem;
      transition: 0.2s;

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
    justify-content: flex-start;
    padding: 0 0 0.5rem;

    a {
      width: 22rem;
      height: 25rem;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-radius: 0.25rem;

      h2 {
        font-size: 1.25rem;
        font-weight: 700;
      }

      p {
        font-size: 1rem;
        text-align: center;
        color: var(--text);
      }

      img {
        width: 2rem;
        height: 2rem;
      }

      &:hover {
        background: var(--background);
      }

      & + a {
        margin-left: 1rem;
      }
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

    #listCompact {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    #listCompact {
      grid-template-columns: 1fr;
    }
  }
`;
