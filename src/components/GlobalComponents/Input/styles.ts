import styled, { css } from "styled-components";

import { Tooltip } from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background: var(--blue-900);
  border-radius: 0.25rem;
  border: 1px solid var(--blue-800);
  padding: 0.5rem;
  color: var(--blue-200);
  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--secondary-light);
      border-color: var(--secondary-light);
    `}
  ${(props) =>
    props.isField &&
    css`
      color: var(--secondary-light);
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--white-100);
    &::placeholder {
      color: var(--blue-200);
    }
  }
  svg {
    margin-right: 0.5rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: var(--red);
    color: var(--white-100);
    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
