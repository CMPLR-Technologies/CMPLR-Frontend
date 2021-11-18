import React from 'react';
import AuthInput from '../../partials/AuthInput';
import AuthBtn from '../../partials/AuthBtn';
import GoogleMedia from './RegisterGoogleMedia';
import AuthAlert from '../../partials/AuthAlert';
import PropTypes from 'prop-types';

export default function RegisterStepTwo(props) {
    const { age, setAge, handleStepTwo, openError, errorMessage } = props;
    return (
        <div style={{ paddingTop: '15%' }} className="LoginCard">
            <div className="LoginCard__logo-container">
                <p className="LoginCard__logo">cmplr</p>
            </div>

            <div className="login-form">
                <AuthAlert openError={openError} errorMessage={errorMessage} />
                <AuthInput
                    value={age}
                    setValue={setAge}
                    name="register_age"
                    type="number"
                    placeholder="How old are you?"
                />
                <p>
                    This site is protected by reCAPTCHA and the Google Terms of
                    Service and Privacy Policy apply.
                </p>
                <AuthBtn
                    handleClick={handleStepTwo}
                    text="Next"
                    color="#00b8ff"
                />
            </div>
            <p className="LoginCard__a">
                <a className="register_explore_anchor">
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

            <GoogleMedia />
        </div>
    );
}

RegisterStepTwo.propTypes = {
    age: PropTypes.number.isRequired,
    setAge: PropTypes.func.isRequired,
    handleStepTwo: PropTypes.func.isRequired,
    openError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired
};
