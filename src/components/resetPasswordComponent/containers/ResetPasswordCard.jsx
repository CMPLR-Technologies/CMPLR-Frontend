import React, { useEffect, useContext } from 'react';
import AuthInput from '../../partials/AuthInput';
import AuthBtn from '../../partials/AuthBtn';
import { newPassword } from '../Service';
import { getEmail } from '../Service';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../contexts/userContext/UserContext';
import { useNavigate } from 'react-router-dom';
/**
 * @function ResetPassword
 * @description this is the statful component of the reset password page
 * @param {password} password - the New password of the user
 * @returns {component} the component of ResetPassword
 */

export default function ResetPasswordCard() {
    const { setUser } = useContext(UserContext);
    const [firstPassword, setFirstPassword] = React.useState('');
    const [secondPassword, setSecondPassword] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');

    const { token } = useParams();
    const [email, setEmail] = React.useState();
    useEffect(() => {
        getEmail(token, setEmail, setErrorMsg);
    }, []);
    const navigate = useNavigate();
    return (
        <div className="LoginCard">
            <div className="LoginCard__logo-container" id="reset-pass-logo">
                <p className="LoginCard__logo">cmplr</p>
            </div>
            <div className="login-form" id="reset-pass-logo">
                <AuthInput
                    id="reset-auth-input"
                    name="email"
                    type="email"
                    placeholder={email}
                    className="text-field"
                    value={email}
                    setValue=""
                    readonly={true}
                    dataTestid="input-labels"
                ></AuthInput>
                <AuthInput
                    id="reset-auth-input"
                    name="password"
                    type="password"
                    placeholder="New Password"
                    className="text-field"
                    value={firstPassword}
                    setValue={setFirstPassword}
                    dataTestid="input-labels"
                ></AuthInput>
                <AuthInput
                    id="reset-auth-input"
                    name="password"
                    type="password"
                    placeholder="Confirm new password"
                    className="text-field"
                    value={secondPassword}
                    setValue={setSecondPassword}
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
                    text="set new password"
                    color="#405368"
                    handleClick={() =>
                        newPassword(
                            firstPassword,
                            secondPassword,
                            email,
                            setErrorMsg,
                            token,
                            setUser,
                            navigate
                        )
                    }
                    dataTestid="button-reset-password"
                ></AuthBtn>
            </div>
        </div>
    );
}
