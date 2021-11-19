import { createContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export const themes = {
  trueBlue: {
    black: `rgb(0, 0, 0)`,
    white: `rgb(255, 255, 255)`,
    whiteOnDark: `rgb(255, 255, 255)`,
    navy: `rgb(0, 25, 53)`,
    accent: `rgb(0, 184, 255)`,
    secondaryAccent: `rgb(229, 231, 234)`,
    follow: `rgb(243, 248, 251)`,
  },
  darkMode: {
    black: `rgb(255, 255, 255)`,
    white: `rgb(34, 34, 34)`,
    whiteOnDark: `rgb(255, 255, 255)`,
    navy: `rgb(0, 0, 0)`,
    accent: `rgb(0, 184, 255)`,
    secondaryAccent: `rgb(57, 57, 57)`,
    follow: `rgb(36, 54, 62)`,
  },
  lowContrast: {
    black: `rgb(191, 191, 191)`,
    white: `rgb(54, 70, 93)`,
    whiteOnDark: `rgb(191, 191, 191)`,
    navy: `rgb(26, 39, 53)`,
    accent: `rgb(32, 185, 252)`,
    secondaryAccent: `rgb(71,87,109)`,
    follow: `rgb(43,76,104)`,
  },
  cement: {
    black: `rgb(0, 0, 0)`,
    white: `rgb(233, 233, 233)`,
    whiteOnDark: `rgb(0, 0, 0)`,
    navy: `rgb(26, 39, 53)`,
    accent: `rgb(0,0,0)`,
    secondaryAccent: `rgb(221, 221, 221)`,
    follow: `rgb(209, 227, 235)`,
  },
};

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("trueBlue");

  useEffect(() => {
    axios.get("http://localhost:3333/users").then((response) => {
      setTheme(response.data.theme);
    });
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
}
