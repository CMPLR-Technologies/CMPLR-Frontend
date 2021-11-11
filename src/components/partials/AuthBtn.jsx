import React from "react";

const AuthBtn = ({ text, color, logo = null, handleClick }) => {
  return (
    <a
      onClick={handleClick}
      className="AuthBtn"
      style={{ backgroundColor: color, color: "black" }}
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
