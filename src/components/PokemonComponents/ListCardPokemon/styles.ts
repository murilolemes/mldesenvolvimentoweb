import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;


  #ImgNull {
      display: none;
    }

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
  background: var(--white-100);
  transition: 0.2s;
  position: relative;
  border: 1px solid var(--primary-light);

  &:hover {
    border-color: var(--primary-light);
    box-shadow: 0 0 4px 2px var(--primary-light);
  }

  h1 {
    max-width: 8rem;
    font-size: 1rem;
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    color: var(--white-100);
    text-shadow: 1px 1px var(--blue-900);
    text-transform: capitalize;
    font-weight: 700;
  }

  button {
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

    svg {
      position: absolute;
      /* color: var(--electric); */
      color: var(--white-100);
    }

    #fundo {
      color: var(--blue-900);
    }
  }

  span {
    width: 9rem;
    height: 3rem;
    background: var(--white-100);
    border-radius: 50%;
    position: absolute;
    bottom: 0.5rem;
    filter: opacity(0.5);
  }

  img {
    width: 9rem;
    height: 9rem;
    position: absolute;
    bottom: 1rem;
  }
`;
