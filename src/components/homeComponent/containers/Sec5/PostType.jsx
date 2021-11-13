import React from "react";

export default function PostType(props) {
  const { SVG, secondRow, type, dataTestid } = props;
  return (
    <div
      data-testid={dataTestid}
      className={`post-type ${secondRow ? "second-row" : ""}`}
    >
      <div className="post-type-circle">{SVG}</div>
      {type}
    </div>
  );
}
