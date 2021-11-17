import React from "react";
import LoginCard from "./containers/LoginCard";
import AuthFooter from "../partials/AuthFooter";
import {getRandomImage} from "./Controller";

const LoginView = () => {
  const b = getRandomImage();
  return (
    <div className="LoginView" style={{ backgroundImage: `url(${b})` }}>
      <LoginCard></LoginCard>
      <AuthFooter></AuthFooter>
    </div>
  );
};

export default LoginView;
