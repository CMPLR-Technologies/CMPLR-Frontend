import React from "react";

const AuthBtn = ({
  text,
  color,
  logo = null,
  handleClick,
  width,
  id,
  dataTestid,
}) => {
  return (
    <a
      onClick={handleClick}
      className="AuthBtn "
      style={{ backgroundColor: color, color: "black", width: width }}
      id={id}
      data-testid={dataTestid}
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
