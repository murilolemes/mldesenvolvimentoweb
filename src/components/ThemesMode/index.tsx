import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { Container } from "./styles";

export function ThemesMode() {
  const existsTheme = window.localStorage.getItem('localStorageTheme');

  const [theme, setTheme] = useState(
    existsTheme === null ? 'darkTheme' : existsTheme
  );

  if (existsTheme) {
    window.localStorage.setItem('localStorageTheme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  function handleTheme() {
    theme === 'darkTheme' ? setTheme('lightTheme') : setTheme('darkTheme');
    window.localStorage.setItem('localStorageTheme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <Container>
      <button type="button" onClick={handleTheme}>
        <span className={theme} />
        {theme === 'darkTheme' ? <FiSun id={theme} /> : <FiMoon id={theme} />}
      </button>
    </Container>
  )
}
