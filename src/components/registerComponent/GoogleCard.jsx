import React, { useEffect, useState } from 'react';
import AuthInput from '../partials/AuthInput';
import AuthBtn from '../partials/AuthBtn';
import AuthAlert from '../partials/AuthAlert';
// import PropTypes from 'prop-types';
import PlaystoreApplestore from '../partials/PlaystoreApplestore';
import { CircularProgress } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleGoogleAuth } from './Service';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext/UserContext';
import { getRandomImage } from '../loginComponent/Controller';

/**
 * @function GoogleCard
 * @description this is a view where we get the blogName & age of user who is registering with google
 * @returns {Component} age & blogName inputs
 */
export default function GoogleCard() {
    const { state } = useLocation();
    const [openError, setOpenError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [age, setAge] = useState();
    const [blogName, setBlogName] = useState('');
    const [isPending, setIsPending] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [b, setB] = useState(getRandomImage());
    const [token, setToken] = useState();

    const handleGoogleRegister = () => {
        const bodyData = {
            token: token,
            // eslint-disable-next-line camelcase
            blog_name: blogName,
            age: age
        };
        console.log('passed data', bodyData);

        setIsPending(true);
        handleGoogleAuth(
            bodyData,
            setOpenError,
            setErrorMessage,
            setUser,
            navigate,
            setIsPending
        );
    };

    useEffect(() => {
        if (!state) {
            navigate('/');
        } else {
            setToken(state?.token);
        }
    }, []);

    return (
        <div className="LoginView" style={{ backgroundImage: `url(${b})` }}>
            <div className="LoginCard">
                <div className="LoginCard__logo-container">
                    <p className="LoginCard__logo">cmplr</p>
                </div>

                <div className="login-form">
                    {openError &&
                        errorMessage &&
                        errorMessage?.length !== 0 && (
                            <AuthAlert
                                openError={openError}
                                errorMessage={errorMessage}
                            />
                        )}
                    <AuthInput
                        value={age || ''}
                        setValue={setAge}
                        name="register_age_google"
                        type="number"
                        placeholder="How old are you?"
                        dataTestid="register_age"
                    />
                    <AuthInput
                        value={blogName || ''}
                        setValue={setBlogName}
                        name="register_blog_name_google"
                        type="text"
                        placeholder="Blog name"
                        dataTestid="register_age"
                    />
                    <AuthBtn
                        handleClick={handleGoogleRegister}
                        text="Next"
                        color="#00b8ff"
                        dataTestid="register_step2"
                    />
                    {isPending && (
                        <div className="load-circle">
                            <CircularProgress />
                        </div>
                    )}
                </div>
                <p className="LoginCard__a">
                    <Link to="/explore" className="register_explore_anchor">
                        <svg
                            viewBox="0 0 21.8 21.8"
                            width="22"
                            height="24"
                            fill="#ffffff"
                        >
                            <path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z"></path>
                        </svg>
                        {"Here's what's trending"}
                    </Link>
                </p>

                <PlaystoreApplestore />
            </div>
        </div>
    );
}

// GoogleCard.propTypes = {
//     token: PropTypes.string.isRequired
// };
