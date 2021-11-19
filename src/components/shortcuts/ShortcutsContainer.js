import ShortcutGroup from "./ShortcutGroup";
import React from "react";

function ShortcutsContainer() {
  const shortcuts = {
    dashboard: {
      name: "Dashboard",
      list: [
        {
          name: "New post",
          keys: ["alt", "C"],
        },
        {
          name: "Move forward",
          keys: ["tab"],
        },
        {
          name: "Move backward",
          keys: ["shift", "tab"],
        },
        {
          name: "Scroll down",
          keys: ["J"],
        },
        {
          name: "Scroll up",
          keys: ["K"],
        },
        {
          name: "Back to the top",
          keys: ["."],
        },
        {
          name: "Like a post",
          keys: ["L"],
        },
        {
          name: "Search Tumblr",
          keys: ["?"],
        },
      ],
    },
    lightbox: {
      name: "Lightbox",
      list: [
        {
          name: "Close",
          keys: ["esc"],
        },
      ],
    },
    composing: {
      name: "Composing",
      list: [
        {
          name: "New post",
          keys: ["alt", "C"],
        },
        {
          name: "MoveForward",
          keys: ["tab"],
        },
        {
          name: "MoveForward",
          keys: ["shift", "tab"],
        },
      ],
    },
  };

  return (
    <div className="shortcut-container">
      <h1>Keyboard shortcuts</h1>
      <ShortcutGroup data={shortcuts.dashboard} />
      <ShortcutGroup data={shortcuts.lightbox} />
      <ShortcutGroup data={shortcuts.composing} />
    </div>
  );
}

export default ShortcutsContainer;