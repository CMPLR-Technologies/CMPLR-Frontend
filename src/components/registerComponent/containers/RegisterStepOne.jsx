import React from 'react';
import AuthInput from '../../partials/AuthInput';
import AuthBtn from '../../partials/AuthBtn';
import OrBar from '../../partials/OrBar';
import PlaystoreApplestore from '../../partials/PlaystoreApplestore';
import AuthAlert from '../../partials/AuthAlert';
import PropTypes from 'prop-types';
/**
 * Register Step1: includes the email/password/blog_name inputs for registeration process
 * @function RegisterStepOne
 * @property {string} email - Email state
 * @property {function} setEmail - Email Setter state
 * @property {string} password - Password state
 * @property {function} setPassword - Password Setter state
 * @property {string} blogName - Blogname state
 * @property {function} setBlogName - Blogname Setter state
 * @property {function} handleStepOne - To handle pressing Signup
 * @property {boolean} openError - To check if there is an error
 * @property {string} errorMessage - State to store the message error from backend
 * @returns {Component} inputs for email/password/blog_name & button for sign-up & google registeration
 */

export default function RegisterStepOne(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        blogName,
        setBlogName,
        handleStepOne,
        openError,
        errorMessage
    } = props;
    const logoUrl =
        'https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg';

    return (
        <div className="LoginCard">
            <div className="LoginCard__logo-container">
                <p className="LoginCard__logo">cmplr</p>
            </div>

            <div className="login-form">
                {openError &&
                    errorMessage &&
                    errorMessage?.length !== 0 &&
                    errorMessage?.map((errorMsg, index) => {
                        return (
                            <AuthAlert
                                key={index}
                                openError={openError}
                                errorMessage={errorMsg}
                            />
                        );
                    })}
                <AuthInput
                    value={email}
                    setValue={setEmail}
                    name="register_email"
                    type="text"
                    placeholder="Email"
                />
                <AuthInput
                    value={password}
                    setValue={setPassword}
                    name="register_password"
                    type="password"
                    placeholder="Password"
                />
                <AuthInput
                    value={blogName}
                    setValue={setBlogName}
                    name="register_blogname"
                    type="text"
                    placeholder="Blog Name"
                />
                <p>
                    {
                        'By clicking "sign up", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy'
                    }
                </p>
                <AuthBtn
                    handleClick={handleStepOne}
                    text="Sign up"
                    color="#00b8ff"
                />
            </div>

            <OrBar></OrBar>
            <AuthBtn text="Continue with Google" color="white" logo={logoUrl} />
            <p className="LoginCard__a">
                <a href="/explore" className="register_explore_anchor">
                    <svg
                        viewBox="0 0 21.8 21.8"
                        width="22"
                        height="24"
                        fill="#ffffff"
                    >
                        <path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z"></path>
                    </svg>
                    {"Here's what's trending"}
                </a>
            </p>

            <PlaystoreApplestore />
        </div>
    );
}

RegisterStepOne.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
    blogName: PropTypes.string.isRequired,
    setBlogName: PropTypes.func.isRequired,
    handleStepOne: PropTypes.func.isRequired,
    openError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired
};
