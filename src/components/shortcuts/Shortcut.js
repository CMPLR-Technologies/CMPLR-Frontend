import "../../styles/styles.css";
import React from "react";

function Shortcut(props) {
  return (
    <div className="shortcut">
      <div className="shortcut-name">{props.data.name}</div>
      <div className="shortcut-key-container">
        {props.data.keys.map((key, index) => {
          return (
            <span key={index}>
              {Boolean(index) && <span>&nbsp;+&nbsp;</span>}
              <span className="shortcut-key">{key}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Shortcut;
