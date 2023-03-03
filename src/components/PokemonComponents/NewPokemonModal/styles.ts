import styled from 'styled-components'

export const Container = styled.div`
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
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;

  h1 {
    max-width: 15rem;
    font-size: 1.25rem;
    color: var(--white-100);
    text-shadow: 1px 1px var(--blue-900);
    text-transform: capitalize;
    font-weight: 700;
  }

  p {
    font-size: 0.75rem;
    background: var(--white-100);
    color: var(--blue-900);
    filter: opacity(0.4);
    padding: 0.25rem;
    border-radius: 0.25rem;
  }
`;

export const ImgPokemon = styled.div`
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.25rem;
  right: 0.5rem;
  left: 0.5rem;

  .type {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: opacity(0.4);

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      background: var(--white-100);
      color: var(--blue-800);
      border-radius: 0.25rem;

      p {
        font-size: 0.75rem;
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
    bottom: 1rem;
  }

  span {
    width: 13rem;
    height: 4.625rem;
    background: var(--white-100);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    filter: opacity(0.5);
  }
`;

export const Descriptions = styled.div`
  height: 12rem;
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;

  .stats, .skills {
    position: absolute;
    top: 0;

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

  .stats {
    left: 0;
    right: calc(0px + 51%);
  }

  .skills {
    right: 0;
    left: calc(0px + 51%);
  }
`;

export const ButtonFavorite = styled.button`
  width: 8.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0.875rem;
  right: 0.5rem;
  background: none;
  border: none;
  transition: 0.2s;
  border: 0px solid var(--blue-800);
  border-radius: 4px;
  box-shadow: 0 0 4px 1px var(--blue-800);
  padding: 0.5rem;

  span {
    font-size: 0.875rem;
    color: var(--blue-900);
    font-weight: 600;
  }

  div {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  svg {
    color: var(--white-100);
    position: absolute;
  }

  .pokeFavorite {
    color: var(--electric);
    display: flex;
  }

  .pokeFavoriteBorder {
    color: var(--blue-900);
    display: flex;
  }

  &:hover {
    border: 1px solid var(--blue-800);
  }
`;
