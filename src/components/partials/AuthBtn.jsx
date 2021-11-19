import React from "react";

const AuthBtn = ({
  text,
  color,
  logo = null,
  handleClick,
  width,
  id,
  readonly,
}) => {
  return (
    <a
      onClick={handleClick}
      className="AuthBtn "
      style={{ backgroundColor: color, color: "black", width: width }}
      id={id}
      readonly={readonly}
    >
      {logo && (
        <img
          width="23"
          height="24"
          src={logo}
          alt="logo"
          style={{ marginRight: "3px", paddingRight: "5px" }}
        />
      )}
      {text}
    </a>
  );
};

export default AuthBtn;
