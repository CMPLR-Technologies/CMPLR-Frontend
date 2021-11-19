import "./styles/styles.css";
import React from "react";
import { ThemeContextProvider } from "./contexts/themeContext/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ShortcutsPageOverlay from "./components/shortcuts/ShortcutsPageOverlay";
import { shortcutController } from "./components/shortcuts/shortcutController";

function App() {
  shortcutController();

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
