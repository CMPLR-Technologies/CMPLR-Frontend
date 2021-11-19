import ShortcutsContainer from "./ShortcutsContainer";
import React from "react";

function ShortcutsPageOverlay() {
  const unOverlay = () => {
    document.querySelector(".overlay-container").style.display = "none";
  };

  return (
    <div className="overlay-container" data-testid="overlayContainer">
      <div className="overlay-div" onClick={unOverlay} data-testid="overlayDiv">
        {" "}
      </div>
      <ShortcutsContainer />
    </div>
  );
}

export default ShortcutsPageOverlay;
