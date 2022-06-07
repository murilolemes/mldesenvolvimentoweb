import styled from 'styled-components';

import ImagemSite1 from '../../assets/site1.png';
import ImagemSite2 from '../../assets/site2.png';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0.625rem;
  margin: 0 auto;
`;

export const DivNetworking = styled.div`
  width: 100%;
  height: 31.25rem;
  display: flex;
  justify-content: space-between;

  .descriptions {
    max-width: 37.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 3rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      color: var(--secondary-light);
      margin-top: 0.625rem;
    }
  }

  .images {
    width: 37.5rem;
    background: url(${ImagemSite1}) no-repeat;
    background-position: center;
  }

  /* @media (max-width: 599px) {
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
  } */
`;

export const MakeYourSite = styled.div`
  width: 100%;
  height: 31.25rem;
  display: flex;
  justify-content: space-between;

  .descriptions {
    max-width: 37.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 3rem;
      text-align: center;
    }

    p {
      max-width: 25rem;
      width: 100%;
      text-align: center;
      font-size: 1rem;
      color: var(--secondary-light);
      margin-top: 0.625rem;
    }
  }

  .images {
    width: 37.5rem;
    background: url(${ImagemSite2}) no-repeat;
    background-position: center;
  }

  /* @media (max-width: 599px) {
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
  } */
`;
