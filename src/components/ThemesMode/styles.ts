import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  .switch {
    position: relative;
    display: inline-block;
    width: 2.75rem;
    height: 1.375rem;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    -webkit-transition: 1s;
    transition: 1s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 0.25rem;
    bottom: 0.2rem;
    background-color: var(--primary-light);
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--background);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--background);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1.3rem);
    -ms-transform: translateX(1.3rem);
    transform: translateX(1.3rem);
  }

  .slider.round {
    border-radius: 2.125rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  #darkTheme {
    position: absolute;
    height: 1rem;
    width: 1rem;
    right: 0.25rem;
    bottom: 0.2rem;
    color: var(--primary-light);
  }

  #cleanTheme {
    position: absolute;
    height: 1rem;
    width: 1rem;
    left: 0.25rem;
    bottom: 0.2rem;
    color: var(--primary-light);
  }
`;
