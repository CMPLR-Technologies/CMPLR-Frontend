import "./styles/styles.css";
import React from "react";
import { ThemeContextProvider } from "./contexts/themeContext/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ShortcutsPageOverlay from "./components/shortcuts/ShortcutsPageOverlay";

function App() {
  return (
    <ThemeContextProvider>
      <div>
        <ThemeToggle />
        <ShortcutsPageOverlay />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
