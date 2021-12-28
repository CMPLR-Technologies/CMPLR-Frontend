import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthInput from '../../partials/AuthInput';
import AuthBtn from '../../partials/AuthBtn';
import OrBar from '../../partials/OrBar';
import AuthAlert from '../../partials/AuthAlert';
import { handleLogin } from '../Controller';
import PlaystoreApplestore from '../../partials/PlaystoreApplestore';
import { useContext } from 'react';
import { responseGoogleFailure, responseGoogleSuccess } from '../Service.jsx';
import { UserContext } from '../../../contexts/userContext/UserContext';
import { ChatContext } from '../../../contexts/chatContext/chatContext';
import { CircularProgress } from '@mui/material';
import GoogleLogin from 'react-google-login';

/**
 * LoginCard Component
 * @function LoginCard
 * @description The component that contains content fo login page
 * @returns {Component} Input fields for email and password,
 * forget password button, continue with Google button and two icons for downloading app on
 * Apple store and Google play
 */

export default function LoginCard() {
    const { setUser } = useContext(UserContext);
    const { setUserBlog } = useContext(ChatContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="LoginCard">
            <div className="LoginCard__logo-container">
                <p className="LoginCard__logo">cmplr</p>
            </div>
            {error && error !== '' && (
                <AuthAlert
                    openError={error.length !== 0}
                    errorMessage={error}
                />
            )}

            <div className="login-form">
                <AuthInput
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    dataTestid="email"
                ></AuthInput>

                <AuthInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    dataTestid="password"
                ></AuthInput>

                <p>
                    {'By clicking "log in", or continuing with the other options' +
                        'below, you agree to Tumblr’s Terms of Service and have read' +
                        'the Privacy Policy'}
                </p>

                <AuthBtn
                    text="Log in"
                    color="#00b8ff"
                    dataTestid="login"
                    isPending={isPending}
                    handleClick={() =>
                        handleLogin(
                            email,
                            password,
                            setError,
                            setUser,
                            setIsPending,
                            navigate,
                            setUserBlog
                        )
                    }
                ></AuthBtn>
                {isPending && (
                    <div className="load-circle">
                        <CircularProgress />
                    </div>
                )}
            </div>

            <a className="LoginCard__a" href="/forget_password">
                Forgot your password?
            </a>

            <OrBar></OrBar>

            <GoogleLogin
                className="AuthBtnGoogle"
                clientId={
                    '897018969322-knobrd9ontkafr46u2ukkv3rnjc5qej8.apps.googleusercontent.com'
                }
                buttonText="Continue with Google"
                onSuccess={res =>
                    responseGoogleSuccess(
                        res,
                        navigate,
                        setIsPending,
                        setUser,
                        setUserBlog
                    )
                }
                onFailure={res => responseGoogleFailure(res, setError)}
                cookiePolicy={'single_host_origin'}
                disabled={isPending}
            />

            <p className="LoginCard__a">
                New to Cmplr?{' '}
                <Link to="/register" style={{ color: 'white' }}>
                    Sign up!
                </Link>
            </p>

            <PlaystoreApplestore />
        </div>
    );
}
