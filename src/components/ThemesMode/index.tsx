import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { Container } from "./styles";

export function ThemesMode() {
  const [theme, setTheme] = useState('darkTheme');

  function handleDarkTheme() {
    theme === 'darkTheme' ? setTheme('cleanTheme') : setTheme('darkTheme');

    if (theme !== 'darkTheme') {
      document.body.style.setProperty('--background', '#080C25');
      document.body.style.setProperty('--secondary', '#161e35');
      document.body.style.setProperty('--secondary-light', '#3071e7');
      document.body.style.setProperty('--primary', '#a6b2ec');
      document.body.style.setProperty('--primary-light', '#F5F5F5');
    } else {
      document.body.style.setProperty('--background', '#F5F5F5');
      document.body.style.setProperty('--secondary', '#a6b2ec');
      document.body.style.setProperty('--secondary-light', '#3071e7');
      document.body.style.setProperty('--primary', '#161e35');
      document.body.style.setProperty('--primary-light', '#080C25');
    }
  }
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" onClick={handleDarkTheme} />
        <span className="slider round"></span>
        {theme === 'darkTheme' ? <FiSun id={theme} /> : <FiMoon id={theme} />}
      </label>
    </Container>
  )
}
