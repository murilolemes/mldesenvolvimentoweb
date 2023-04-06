import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --background: var(--gray-900);
    --secondary: var(--gray-700);

    --text: var(--gray-100);
    --title: var(--purple-400);

    --gray-900: #0b0a0d;
    --gray-700: #2c2c2e;
    --gray-600: #707070;
    --gray-500: #aeaeb2;
    --gray-100: #F5F5F5;

    --red-300: #ff3b30;
    --purple-400: #7159c1;
    --green-300: #30d158;
    --white: #FFFFFF;

    --electric: #f8d030;
    --grass: #49d0b0;
    --fire: #f08030;
    --normal: #a8a878;
    --fighting: #C03028;
    --water: #76befe;
    --flying: #a890f0;
    --poison: #a040a0;
    --ground: #E0C068;
    --psychic: #f85888;
    --rock: #B8A038;
    --ice: #98D8D8;
    --bug: #8aee71;
    --dragon: #7038f8;
    --ghost: #705898;
    --dark: #705848;
    --steel: #B8B8D0;
    --fairy: #ee99ac;
  }
  [data-theme = 'lightTheme'] {
    --background: var(--gray-100);
    --text: var(--gray-900);
    --secondary: var(--gray-500);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  @media (max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    overflow-y: auto;
    scrollbar-width: 1px;
    ::-webkit-scrollbar-track {
      background-color: var(--gray-700);
    }
    ::-webkit-scrollbar {
      width: 6px;
      background: var(--gray-700);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--purple-400);
    }
  }
  html, body {
    height: 100vh;
  }
  body, input, textarea, select, button {
    font-family: 'Inter', 'Roboto', sans-serif;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  p, span, a, h1, h2, h3, h4, h5, h6 {
    margin: 0;
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
    z-index: 1000;


    @media(max-width: 600px) {
      padding: 1rem;
    }
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--secondary);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 600px) {
      padding: 1rem;
    }

    @media(max-height: 600px) {
      overflow-y: scroll;
      max-height: 90%;
    }
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    svg {
      color: var(--text);
      transition: 0.2s;
    }

    &:hover {
      svg {
        color: var(--red-300);
        filter: opacity(0.5);
      }
    }
  }
`;
