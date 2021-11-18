import { useContext } from "react";
import { ThemeContext, themes } from "../contexts/themeContext/ThemeContext";
import React from "react";

function ThemeToggle() {
  const [theme, setTheme] = useContext(ThemeContext);
  console.log(themes[theme]);
  const toggleTheme = () =>{
      if(theme === 'light')
          setTheme('dark');
      else
          setTheme('light');
  }

  return (
    <div>
      <input type="button" onClick={toggleTheme} />
      {theme}
    </div>
  );
}
export default ThemeToggle;
