import styled from "styled-components";

export const Container = styled.div`
  a {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: transparent;
    border: none;
    transition: 0.2s;

    span {
      width: 1rem;
      height: 1rem;
      font-size: 0.625rem;
      background: var(--red);
      border-radius: 0.25rem 0.25rem 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -1px;
      right: 16px;
      color: var(--white-100);
    }

    svg {
      color: var(--green);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;