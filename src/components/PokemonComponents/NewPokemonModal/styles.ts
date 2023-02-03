import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--white-100);
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid var(--blue-200);
    background: var(--white-100);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--blue-200);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--green);
    color: var(--blue-900);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const CardPokemon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

    .card {
      width: 18.75rem;
      height: 31.25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      background: var(--white-100);
      transition: 0.2s;
      position: relative;

      &:hover {
        border-color: var(--primary-light);
        box-shadow: 0 0 4px 2px var(--primary-light);
      }
    }

  .none {
    display: none;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  h1 {
    font-size: 1.25rem;
    color: var(--white-100);
    text-shadow: 1px 1px var(--blue-900);
    text-transform: capitalize;
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
    background: var(--white-100);
    color: var(--blue-900);
    filter: opacity(0.5);
    padding: 0.25rem;
    border-radius: 0.25rem;
  }
`;

export const ImgPokemon = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .type {
    position: absolute;
    right: 0.5rem;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: opacity(0.5);

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      background: var(--white-100);
      color: var(--blue-800);
      border-radius: 0.25rem;

      p {
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
      }

      & + div {
        margin-left: 0.25rem;
      }
    }
  }

  img {
    width: 13rem;
    height: 13rem;
    position: absolute;
    top: 2.5rem;
  }
`;

export const Descriptions = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: var(--white-100);
  border-radius: 0 0 0.25rem 0.25rem;

  .stats, .skills {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3rem 0.5rem 1rem;

    h4 {
      font-size: 1rem;
      color: var(--blue-900);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.25rem;
      background: #D9D9D9;
      border-radius: 0.25rem;

      & + div {
        margin-top: 0.25rem;
      }

      p {
        font-size: 0.75rem;
        color: var(--blue-900);
        text-transform: capitalize;

        &:first-child {
        font-weight: 600;
        }
      }

    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    button {
      width: 2rem;
      height: 2rem;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--white-100);
      font-weight: 600;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    span {
      color: var(--white-100);
      border-radius: 0.25rem;
      position: absolute;
      top: -32px;
      padding: 0.25rem;
      transition: visibility 0.1s, opacity 1s;
      visibility: hidden;
      opacity: 0;
    }

    span::after {
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      bottom: -3px;
      transform: rotate(45deg);
      left: calc(50% - 3px);
    }

    & + div {
      margin-left: 0.25rem;
    }

    &:hover {
      span {
        visibility: initial;
        opacity: 1;
      }
    }
  }

  .remove, .remove::after {
    background: var(--red);
  }

  .add, .add::after {
    background: var(--green);
  }
`;
