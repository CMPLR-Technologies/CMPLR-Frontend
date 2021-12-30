import React from 'react';
import AuthInput from '../../partials/AuthInput';
import AuthBtn from '../../partials/AuthBtn';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import { emailInDataBase } from '../Service';

/**
 * @function ForgetPassword
 * @description this is the stateful component of the forget password page
 * @param {email} email - the email of the user
 * @returns {Component} the Component of the forget password page
 */

export default function ForgetPasswordCard() {
    const [email, setEmail] = React.useState('');
    const history = useNavigate();

    //check if the email is empty
    const [emptyEmail, setEmptyEmail] = React.useState(false);
    //check if recaptcha is checked or not
    const [reCAPTCHAFlag, setReCAPTCHAFlag] = React.useState(false);
    const [ReCAPTCHAIsClicked, setReCAPTCHAIsClicked] = React.useState(false);
    //check if the email is not a valid email
    const [emailEnteredIsTrue, setEmailEnteredIsTrue] = React.useState(false);

    //we are in page for forget password waiting page
    const [weAreInForgetPassPage, setWeAreInForgetPassPage] =
        React.useState(true);
    const handleCancel = () => {
        history('/login');
    };

    const handleDone = () => {
        history('/');
    };

    const recaptchaCallback = () => {
        setReCAPTCHAFlag(true);
    };

    return (
        <div className="LoginCard">
            <div className="LoginCard__logo-container">
                <p className="LoginCard__logo">cmplr</p>
            </div>
            <div className="login-form">
                {weAreInForgetPassPage && (
                    <AuthInput
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="text-field"
                        id="forget-password-email"
                        value={email}
                        setValue={setEmail}
                        dataTestid="email-forget-password"
                    ></AuthInput>
                )}

                {emptyEmail && (
                    <div className="form-msg">
                        <p
                            data-testid="empty-msg-err"
                            style={{
                                textAlign: 'center',
                                fontSize: '14px',
                                padding: '0'
                            }}
                        >
                            Please enter your email address
                        </p>
                    </div>
                )}
                {ReCAPTCHAIsClicked && (
                    <div className="form-msg">
                        <p
                            data-testid="recapatch-error-msg"
                            style={{
                                textAlign: 'center',
                                fontSize: '14px',
                                padding: '0'
                            }}
                        >
                            There was an error submitting your request
                        </p>
                    </div>
                )}
                {emailEnteredIsTrue && weAreInForgetPassPage && (
                    <div className="form-msg">
                        <p
                            data-testid="invalid-email"
                            style={{ textAlign: 'center' }}
                        >
                            Sorry, that email address is not registered with us
                        </p>
                        <p>
                            Please try again or
                            <a href="/register"> register a new account.</a>
                        </p>
                    </div>
                )}
                {weAreInForgetPassPage && (
                    <div
                        onClick={recaptchaCallback}
                        data-testid="recaptcha"
                        className="ReCAPTCHA"
                    >
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={recaptchaCallback}
                        />
                    </div>
                )}

                {!weAreInForgetPassPage && (
                    <div data-testid="confirmation-msg" className="show-msg">
                        <div className="form-msg">
                            <p style={{ textAlign: 'center' }}>
                                We&apos;ve sent you an email with instructions
                                to reset your password.
                            </p>
                            <p>
                                Please make sure it didn&apos;t wind up in your
                                Junk Mail. If you aren&apos;t receiving our
                                password reset emails, see our
                                <a href="https://tumblr.zendesk.com/hc/en-us/articles/226167067-Resetting-your-password">
                                    {' '}
                                    help documents.
                                </a>
                            </p>
                        </div>
                        <AuthBtn
                            id="done"
                            text="Done"
                            color="#001124"
                            handleClick={handleDone}
                        ></AuthBtn>
                    </div>
                )}
                {weAreInForgetPassPage && (
                    <div className="buttons-box">
                        <AuthBtn
                            dataTestid="cancel-btn"
                            id="cancel"
                            text="Cancel"
                            color="#001124"
                            handleClick={handleCancel}
                        ></AuthBtn>
                        <AuthBtn
                            id="reset-password"
                            text="Reset Password"
                            color="#FF0000"
                            handleClick={() =>
                                emailInDataBase(
                                    email,
                                    reCAPTCHAFlag,
                                    setEmptyEmail,
                                    setReCAPTCHAIsClicked,
                                    setEmailEnteredIsTrue,
                                    setWeAreInForgetPassPage
                                )
                            }
                            dataTestid="reset-password-btn"
                        ></AuthBtn>
                    </div>
                )}
            </div>
        </div>
    );
}
