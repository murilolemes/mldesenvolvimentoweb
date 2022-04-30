import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  :root {
    --background: #1c2135;
    --primary-light: #e7e9ee;
    --primary: #cfdaff;
    --secondary-light: #8794c0;
    --secondary: #5a6794;
    --red: #e52e4d;
    --green: #33cc95;

    font-size: 60%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: var(--background);
    color: var(--primary-light);
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    overflow-y: auto;
    scrollbar-width: 1px;
    ::-webkit-scrollbar-track {
      background-color: ${shade(0.6, '#5a6794')};
    }
    ::-webkit-scrollbar {
      width: 6px;
      background: ${shade(0.6, '#5a6794')};
    }
    ::-webkit-scrollbar-thumb {
      background: var(--secondary-light);
    }
  }
  html, body {
    height: 100vh;
  }
  body, input, button {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: ${shade(0.3, '#5a6794')};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
