import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 32px;

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
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
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
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  #darkTheme {
    position: absolute;
    height: 20px;
    width: 20px;
    right: 8px;
    bottom: 6px;
    color: var(--primary-light);
  }

  #cleanTheme {
    position: absolute;
    height: 22px;
    width: 22px;
    left: 7px;
    bottom: 5px;
    color: var(--primary-light);
  }

`;
