import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 1279px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
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
  border: 1px solid var(--primary-light);

  &:hover {
    border-color: var(--primary-light);
    box-shadow: 0 0 4px 2px var(--primary-light);
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

export const BtnRemove = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white-100);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  #remove {
    background: var(--red);
  }
`;
