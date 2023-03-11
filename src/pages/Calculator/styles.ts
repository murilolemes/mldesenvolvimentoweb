import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 25rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  height: 31.25rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  background: var(--purple-400);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Log = styled.div`
  width: 100%;
  height: 9.375rem;
  margin-top: 0.625rem;
  border-radius: 0.5rem;
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 100%;
    height: 1.25rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text);

    & + p {
      margin-top: 0.375rem;
    }
  }

  #result {
    color: var(--red-300)
  }
`;

export const Keyboard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .keyboardButtons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 3.25rem;
      height: 3.25rem;
      background: transparent;
      border: 1px solid var(--green-300);
      color: var(--green-300);
      border-radius: 50%;
      transition: 0.5s;
      font-size: 1.2rem;
      font-weight: 700;
      transition: 0.5s;

      &:hover {
        border: 1px solid var(--green-300);
        box-shadow: 0 0 8px var(--green-300);
        font-size: 1.5rem;
      }

      & + button {
        margin-left: 1.25rem;
      }
    }

    & + .keyboardButtons {
      margin-top: 1.25rem;
    }

    #backSpace {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #equal {
      border-radius: 0.25rem;
      flex: 1;
    }
  }
`;
