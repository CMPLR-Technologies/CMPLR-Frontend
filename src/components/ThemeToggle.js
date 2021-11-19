import { useContext } from "react";
import { ThemeContext, themes } from "../contexts/themeContext/ThemeContext";
import React from "react";
import axios from "axios";

function ThemeToggle() {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    console.log(theme, themes[theme]);

    const keys = Object.keys(themes);
    const nextIndex = (keys.indexOf(theme) + 1) % keys.length;
    axios
      .put("http://localhost:3333/users", { theme: keys[nextIndex] })
      .then(() => {
        setTheme(keys[nextIndex]);
      });
  };

  return (
    <div>
      <input type="button" value={theme} onClick={toggleTheme} />
    </div>
  );
}
export default ThemeToggle;
