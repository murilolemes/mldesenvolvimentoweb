import styled from "styled-components";

interface DisplayButtonProps {
  displayButton: boolean;
}

export const Container = styled.div<DisplayButtonProps>`
  height: 4.25rem;
  position: fixed;
  bottom: 1rem;
  left: calc(50% + 576px);
  display: ${(props) => props.displayButton ? 'flex' : 'none'};
  align-items: flex-end;

  button {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--primary-light);
    }

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media(max-width: 1316px) {
    left: initial;
    right: 1rem;
  }
`;

export const ButtonWhatsApp = styled.a`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s, box-shadow 0.5s;

  svg {
    width: 1.875rem;
    height: 1.875rem;
    color: #f5f5f5;
    transition: color 0.2s;
  }

  &:hover {
    background-color: var(--green);
    box-shadow: 0 0 10px 5px var(--green);
  }
`;
