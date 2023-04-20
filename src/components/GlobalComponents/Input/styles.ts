import styled, { css } from "styled-components";

import { Tooltip } from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.label`
  width: 100%;
  color: var(--gray-600);
  font-weight: 600;

  & + label {
    margin-top: 0.5rem;
  }
`;

export const Content = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background: var(--secondary);
  border-radius: 0.25rem;
  border: 1px solid var(--gray-600);
  padding: 0.5rem;
  color: var(--gray-600);
  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid var(--red-300);
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--green-300);
      border: 1px solid var(--green-300);
      box-shadow: 0 0 4px 1px var(--green-300);
    `}

  ${(props) =>
    props.isField &&
    css`
      color: var(--green-300);
      border: 1px solid var(--green-300);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--text);

    &::placeholder {
      color: var(--gray-600);
    }
  }
  svg {
    margin-right: 0.5rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0;
  }

  span {
    background: var(--red-300);
    color: var(--gray-100);
    &::before {
      border-color: var(--red-300) transparent;
    }
  }
`;
