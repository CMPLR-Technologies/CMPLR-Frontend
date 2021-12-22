import React, { useState } from 'react';
import AuthInput from '../../partials/AuthInput';
import AuthBtn from '../../partials/AuthBtn';
import { deleteAccount } from '../Service';
import { useNavigate } from 'react-router-dom';
/**
 * @function DeleteAccount
 * @description this is the stateful component of the delete account page
 * @param {password} password - the password of the user
 * @param {email} email - the email of the user
 * @returns {component} the component of DeleteAccount
 */

export default function DeleteAccountCard() {
    const history = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    return (
        <div className="LoginCard">
            <div className="LoginCard__logo-container" id="reset-pass-logo">
                <p className="LoginCard__logo logo-delete-account">Now just a minute.</p>
            </div>

            <div data-testid="message-error" className="form-msg">
                <p className="form-ms-delete-account">
                    You’re not just deleting your primary blog —you’re deleting
                    your whole account. Sure you want to do that? You’ll lose
                    access to everything. All of your blogs, original posts,
                    themes, the love we shared, likes, and messages. This can’t
                    be undone.
                </p>
            </div>
            <div data-testid="message-error" className="form-msg">
                <p className="form-ms-delete-account">
                    If you’re sure, confirm by logging in below.
                </p>
            </div>
            <div className="login-form" id="reset-pass-logo">
                <AuthInput
                    id="reset-auth-input"
                    name="email"
                    type="email"
                    placeholder={email}
                    className="text-field"
                    value={email}
                    setValue={setEmail}
                    readonly={true}
                    dataTestid="input-labels"
                ></AuthInput>
                <AuthInput
                    id="reset-auth-input"
                    name="password"
                    type="password"
                    placeholder="New Password"
                    className="text-field"
                    value={password}
                    setValue={setPassword}
                    dataTestid="input-labels"
                ></AuthInput>
                {errorMsg.length !== 0 && (
                    <div data-testid="message-error" className="form-msg">
                        <p
                            style={{
                                textAlign: 'center',
                                fontSize: '14px',
                                padding: '0'
                            }}
                        >
                            {errorMsg}
                        </p>
                    </div>
                )}
                <AuthBtn
                    id="reset-password-btn"
                    text="Delete Everything"
                    color="#405368"
                    handleClick={() =>
                        deleteAccount(password, email, setErrorMsg, history)
                    }
                    dataTestid="button-reset-password"
                ></AuthBtn>
                <AuthBtn
                    id="reset-password-btn"
                    text="Nevermind"
                    color="#405368"
                    handleClick={() => history.goBack()}
                    dataTestid="button-reset-password"
                ></AuthBtn>
            </div>
        </div>
    );
}
