import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
`;

export const Body = styled.div`
  max-width: 400px;
  height: 500px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  border: 1px solid var(--color-secondary-light);
`;

export const Log = styled.div`
  width: 100%;
  height: 150px;
  margin-top: -50px;
  background: var(--color-background);
  border: 1px solid var(--color-secondary-light);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 100%;
    height: 20px;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;

    & + p {
      margin-top: 5px;
    }
  }

  #result {
    color: #ff5555;
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
      width: 60px;
      height: 50px;
      background: var(--color-background);
      border: 1px solid var(--color-secondary-light);
      border-radius: 7px;
      transition: 0.5s;
      font-size: 2rem;
      font-weight: 700;
      transition: 0.5s;
      color: var(--color-primary-light);

      &:hover {
        transform: translateY(-5px);
        background: var(--color-secondary-light);
        color: var(--color-background);
      }

      & + button {
        margin-left: 20px;
      }
    }

    & + .keyboardButtons {
      margin-top: 20px;
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
