import styled from 'styled-components';

import ImagemSite1 from '../../assets/site1.png';
import ImagemSite2 from '../../assets/site2.png';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
`;

export const DivNetworking = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: space-between;

  .descriptions {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 6rem;
      text-align: center;
    }

    p {
      font-size: 1.6rem;
      color: var(--secondary-light);
    }
  }

  .images {
    width: 750px;
    background: url(${ImagemSite1}) no-repeat;
    background-position: center;
  }

  @media (max-width: 599px) {
    height: initial;
    flex-direction: column;
    justify-content: flex-start;

    .descriptions {
      flex: none;
      margin-top: 15px;

      h2 {
        font-size: 3.5rem;
      }

      p {
        font-size: 1.2rem;
        text-align: center;
        margin-top: 10px;
      }
    }

    .images {
      width: 100%;
      height: 250px;
      background-size: contain;
      border-left: none;
      margin-top: 50px;
    }
  }
`;

export const MakeYourSite = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  .images {
    width: 750px;
    background: url(${ImagemSite2}) no-repeat;
    background-position: center;
  }

  .descriptions {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 6rem;
      text-align: center;
    }

    p {
      max-width: 500px;
      text-align: center;
      font-size: 1.6rem;
      margin-top: 10px;
      color: var(--secondary-light);
    }
  }

  @media (max-width: 599px) {
    height: initial;
    flex-direction: column;
    justify-content: flex-start;

    .images {
      width: 100%;
      height: 250px;
      background-size: contain;
      border-left: none;
      margin-top: 50px;
      order: 2;
    }

    .descriptions {
      flex: none;
      margin-top: 15px;
      order: 1;

      h2 {
        font-size: 3.5rem;
        text-align: center;
      }

      p {
        font-size: 1.2rem;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
`;
