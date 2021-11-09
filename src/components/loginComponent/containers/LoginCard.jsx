import React from "react";
import LoginInput from "../../partials/LoginInput";
import LoginBtn from '../../partials/LoginBtn'
import OrBar from "../../partials/OrBar";

const LoginCard = () => {
    return (
        <div className="LoginCard">
            <div className="LoginCard__logo-container">
                <p className="LoginCard__logo">cmplr</p>
            </div>

            <div className="login-form">
                <LoginInput name="email" type="text" placeholder="Email"></LoginInput>
                <LoginInput name="password" type="password" placeholder="Password"></LoginInput>
                <p>By clicking "log in", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</p>
                <LoginBtn text="Log in" color="#00b8ff"></LoginBtn>
            </div>

            <a href="/">Forgot your password?</a>
            <OrBar></OrBar>
            <LoginBtn text="Continue with Google" color="white"></LoginBtn>
        </div>
    );
}

export default LoginCard;