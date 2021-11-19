import ShortcutsContainer from "./ShortcutsContainer";
import React from "react";

function ShortcutsPageOverlay() {
  const unOverlay = () => {
    document.querySelector(".overlay-container").style.display = "none";
  };

  return (
    <div className="overlay-container">
      <div className="overlay-div" onClick={unOverlay}>
        {" "}
      </div>
      <ShortcutsContainer />
    </div>
  );
}

export default ShortcutsPageOverlay;
