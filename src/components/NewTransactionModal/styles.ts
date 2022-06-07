import styled from 'styled-components'
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--primary-light);
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--primary-light);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--background);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--primary);
    color: var(--background);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 3rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive
    ? transparentize(0.7, colors[props.activeColor])
    : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.2, '#d7d7d7')};
  }
  img {
    width: 1.25rem;
    height: 1.25rem;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.2rem;
    color: var(--primary-light);
  }
`;
