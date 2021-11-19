import Shortcut from "./Shortcut";
import React from "react";

function ShortcutGroup(props) {
  return (
    <div>
      <h2>{props.data.name}</h2>
      <div className="shortcut-group">
        {props.data.list.map((shortcut, index) => (
          <Shortcut data={shortcut} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ShortcutGroup;
