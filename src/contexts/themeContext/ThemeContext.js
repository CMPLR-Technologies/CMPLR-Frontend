import { createContext, useState } from "react";
import React from "react";

export const themes = {
  light: {
    black: `rgb(0, 0, 0)`,
    white: `rgb(255, 255, 255)`,
    whiteOnDark: `rgb(255, 255, 255)`,
    navy: `rgb(0, 25, 53)`,
    accent: `rgb(0, 184, 255)`,
    secondaryAccent: `rgb(229, 231, 234)`,
    follow: `rgb(243, 248, 251)`
  },
  dark: {
    black: `rgb(255, 255, 255)`,
    white: `rgb(34, 34, 34)`,
    whiteOnDark: `rgb(255, 255, 255)`,
    navy: `rgb(0, 0, 0)`,
    accent: `rgb(0, 184, 255)`,
    secondaryAccent: `rgb(57, 57, 57)`,
    follow: `rgb(36, 54, 62)`
  },
};

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");
  //const theme = 'light';
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
}
