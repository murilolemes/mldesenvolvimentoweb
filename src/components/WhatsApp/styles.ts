import styled from "styled-components";

export const ButtonWhatsApp = styled.a`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  left: calc(50% + 600px);
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
