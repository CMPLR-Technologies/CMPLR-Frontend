import "./styles/styles.css";
import React from "react";
import { ThemeContextProvider } from "./contexts/themeContext/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ShortcutsPageOverlay from "./components/shortcuts/ShortcutsPageOverlay";

function App() {
  const shortcutController = (e) => {
    if (e.altKey && e.code === "KeyC") {
      console.log("New Post!");
    } else if (e.shiftKey && e.code === "Slash") {
      console.log("Go to SearchBar?");
      //document.querySelector("search-bar").focus();
    } else if (e.code === "Period") {
      console.log("Back to the top ^^");
    } else if (e.code === "KeyL") {
      console.log("Like This one <3");
    } else if (e.code === "KeyJ") {
      console.log("Scroll to next post ->");
    } else if (e.code === "KeyK") {
      console.log("Scroll to prev post <-");
    }
    e.stopImmediatePropagation();
  };
  document.addEventListener("keydown", shortcutController);

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
