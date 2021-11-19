import ShortcutsContainer from "./ShortcutsContainer";
import React from "react";


function ShortcutsPageOverlay() {
    const unOverlay = () => {
      document.querySelector(".overlay-container").style.display = "none";
    }
  
    return (
      <div className="overlay-container" onClick={unOverlay}>
        <ShortcutsContainer onClick={e => e.stopPropagation()}/>
      </div>
    );
  }

export default ShortcutsPageOverlay;