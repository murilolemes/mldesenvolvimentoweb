import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  :root {
    --background: #1c2135;
    --primary-light: #e7e9ee;
    --primary: #cfdaff;
    --secondary-light: #8794c0;
    --secondary: #5a6794;

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
`;
