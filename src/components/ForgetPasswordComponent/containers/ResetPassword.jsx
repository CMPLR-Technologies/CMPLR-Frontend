import React from "react";
import AuthInput from "../../partials/AuthInput";
import AuthBtn from "../../partials/AuthBtn";
import { useNavigate } from "react-router-dom";
export default function ResetPassword() {
  const [email, setEmail] = React.useState("");
  const history = useNavigate();
  const setNewPassword = () => {};
  return (
    <div className="LoginCard">
      <div className="LoginCard__logo-container">
        <p className="LoginCard__logo">cmplr</p>
      </div>
      <div className="login-form">
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          className="text-field"
          value={email}
          setValue={setEmail}
        ></AuthInput>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          className="text-field"
          value={email}
          setValue={setEmail}
        ></AuthInput>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          className="text-field"
          value={email}
          setValue={setEmail}
        ></AuthInput>
        <AuthBtn
          id="set-new-password"
          text="set new password"
          color="#001124"
          handleClick={setNewPassword}
        ></AuthBtn>
      </div>
    </div>
  );
}
