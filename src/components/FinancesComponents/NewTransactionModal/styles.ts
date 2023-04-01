import styled from 'styled-components'
import { transparentize } from 'polished';

export const Container = styled.div`
  width: 100%;

  form {
    h2 {
      color: var(--text);
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    button[type='submit'] {
      width: 100%;
      height: 3rem;
      padding: 0 1.5rem;
      background: var(--green-300);
      color: var(--gray-700);
      font-size: 1.25rem;
      font-weight: 700;
      border-radius: 0.25rem;
      border: 0;
      margin-top: 1rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#30d158',
  red: '#ff3b30'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 3rem;
  border: 1px solid ${(props) => props.isActive
    ? 'var(--green-300)'
    : 'var(--gray-600)'};
  border-radius: 0.25rem;
  background: ${(props) => props.isActive
    ? transparentize(0.7, colors[props.activeColor])
    : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--green-300);
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.2rem;
    color: var(--gray-100);
  }
`;
