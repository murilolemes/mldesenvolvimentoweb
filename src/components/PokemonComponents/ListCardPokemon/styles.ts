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

export const ListCard = styled.div`
  width: 10.275rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: 0.2s;
  position: relative;
  border: 1px solid var(--purple-400);

  h1 {
    max-width: 8rem;
    font-size: 1rem;
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    color: var(--gray-100);
    text-shadow: 1px 1px var(--gray-900);
    text-transform: capitalize;
    font-weight: 700;
  }

  .buttonFavorite {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    background: none;
    border: none;
    transition: 0.2s;

    svg {
      position: absolute;
      color: var(--gray-100);
      display: none;
    }

    .pokeFavorite {
      color: var(--electric);
      display: flex;
    }

    .pokeFavoriteBorder {
      color: var(--gray-700);
      display: flex;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .buttonInfo {
    width: 16px;
    height: 16px;
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
    border-radius: 50%;
    border: 1px solid var(--gray-900);
    transition: 0.2s;
    background: transparent;

    svg {
      color: var(--gray-900);
    }

    &:hover {
      background: var(--gray-100);
    }
  }

  span {
    width: 9rem;
    height: 3rem;
    background: var(--gray-100);
    border-radius: 50%;
    position: absolute;
    bottom: 0.75rem;
    filter: opacity(0.5);
  }

  img {
    width: 9rem;
    height: 9rem;
    position: absolute;
    bottom: 1.25rem;
  }

  &:hover {
    border-color: var(--green-300);
    box-shadow: 0 0 8px 1px var(--green-300);

    svg {
      display: flex;
    }

    .buttonInfo {
      display: flex;
    }
  }
`;

export const Pages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 6rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--purple-400);
    color: var(--gray-100);
    border-radius: 0.25rem;
    font-weight: 600;
    background: var(--purple-400);
    transition: 0.2s;

    & + button {
      margin-left: 1rem;
    }

    &:hover {
      border-color: var(--green-300);
      box-shadow: 0 0 8px var(--green-300);
    }
  }
`;
