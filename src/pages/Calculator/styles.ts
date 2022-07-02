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
  background: var(--secondary-light);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Log = styled.div`
  width: 100%;
  height: 9.375rem;
  margin-top: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid var(--background);
  box-shadow: 0 0 8px 2px var(--background);
  background: var(--secondary-light);
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

    & + p {
      margin-top: 0.375rem;
    }
  }

  #result {
    color: var(--red)
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
      width: 3.75rem;
      height: 3.125rem;
      background: var(--background);
      border: 1px solid var(--background );
      color: var(--primary-light);
      border-radius: 0.5rem;
      transition: 0.5s;
      font-size: 1.2rem;
      font-weight: 700;
      transition: 0.5s;

      &:hover {
        transform: translateY(-0.313rem);
        background: var(--secondary-light);
        color: var(--background);
        border: 1px solid var(--background);
        box-shadow: 0 0 12px 6px var(--background);
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
      flex: 1;
    }
  }
`;
