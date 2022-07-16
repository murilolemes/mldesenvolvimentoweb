import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { shade } from 'polished';

export default createGlobalStyle`
  :root {
    --background: #080C25;
    --secondary: #161E35;
    --secondary-light: #3071E7;
    --primary: #A6B2EC;
    --primary-light: #F5F5F5;

    --blue-900: #080C25;
    --blue-800: #161E35;
    --blue-200: #A6B2EC;
    --white-100: #F5F5F5;
    --red: #E52E4D;
    --green: #33CC95;

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
  body, input, textarea, select, button {
    font-family: 'Roboto';
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

    @media(max-width: 600px) {
      padding: 0.625rem;
    }
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--blue-800);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    @media(max-width: 600px) {
      padding: 1rem;
    }
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
