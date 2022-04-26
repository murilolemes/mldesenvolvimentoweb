import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
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
  background: ${shade(0.4, '#8794c0')};
  border: 1px solid ${shade(0.7, '#1c2135')};
  box-shadow: 0px 0px 12px 6px ${shade(0.7, '#1c2135')};
`;

export const Log = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 10px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${shade(0.3, '#8794c0')};
  border: 1px solid ${shade(0.7, '#1c2135')};
  box-shadow: 0px 0px 6px 3px ${shade(0.7, '#1c2135')};

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
      background: var(--background);
      border: 1px solid var(--secondary-light);
      border-radius: 7px;
      transition: 0.5s;
      font-size: 2rem;
      font-weight: 700;
      transition: 0.5s;
      color: var(--primary-light);

      &:hover {
        transform: translateY(-5px);
        background: var(--secondary-light);
        color: var(--background);
        border: 1px solid ${shade(0.7, '#1c2135')};
        box-shadow: 0px 0px 12px 6px ${shade(0.7, '#1c2135')};
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
