import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AuthInput from '../../partials/AuthInput';
import AuthBtn from '../../partials/AuthBtn';
import OrBar from '../../partials/OrBar';
import AuthAlert from '../../partials/AuthAlert';
import { handleLogin } from '../Controller';

export default function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    return (
        <div className="LoginCard">
            <div className="LoginCard__logo-container">
                <p className="LoginCard__logo">cmplr</p>
            </div>
            <AuthAlert errorMessage={error} openError={error.length !== 0} />

            <div className="login-form">
                <AuthInput
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                ></AuthInput>

                <AuthInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                ></AuthInput>

                <p>
                    {'By clicking "log in", or continuing with the other options' +
                        'below, you agree to Tumblr’s Terms of Service and have read' +
                        'the Privacy Policy'}
                </p>

                <AuthBtn
                    text="Log in"
                    color="#00b8ff"
                    handleClick={() => handleLogin(email, password, setError)}
                ></AuthBtn>
            </div>

            <a className="LoginCard__a" href="/">
                Forgot your password?
            </a>

            <OrBar></OrBar>

            <AuthBtn
                text="Continue with Google"
                color="white"
                logo="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg"
            ></AuthBtn>

            <p className="LoginCard__a">
                New to Cmplr?{' '}
                <Link to="/register" style={{ color: 'white' }}>
                    Sign up!
                </Link>
            </p>

            <div className="LoginCard__stores-logos">
                <a href="/">
                    <img
                        src="https://assets.tumblr.com/pop/src/assets/images/download-on-the-appstore/en-8c4986ee.svg"
                        alt="Download on the Apple Store"
                        style={{ paddingRight: '20px' }}
                    />
                </a>

                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
}
