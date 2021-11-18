import "./styles/styles.css";
import React from "react";
import { ThemeContextProvider } from "./contexts/themeContext/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeContextProvider>
      <div>
        {/* <ThemeToggle /> */}
        
      </div>
    </ThemeContextProvider>
  );
}

export default App;
