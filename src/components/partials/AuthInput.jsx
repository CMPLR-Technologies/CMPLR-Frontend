import React from "react";

const AuthInput = ({
  name,
  type,
  placeholder,
  value,
  setValue,
  id,
  readonly,
  dataTestid,
}) => {
  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      className="AuthInput"
      value={value}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      readOnly={readonly}
      data-testid={dataTestid}
    />
  );
};

export default AuthInput;
