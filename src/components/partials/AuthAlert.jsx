import React from "react";

export default function AuthAlert(props) {
  const { errorMessage, openError } = props;

  return (
    <>
      {openError && (
        <div className="auth_alert">
          <h3>{errorMessage}</h3>
        </div>
      )}
    </>
  );
}
