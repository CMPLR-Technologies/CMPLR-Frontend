import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import ExploreBtn from './ExploreBtn.svg';
import Footer from './Footer';
//import GoogleButton from './GoogleButton.svg';
import PropTypes from 'prop-types';
import PlaystoreApplestore from '../../../partials/PlaystoreApplestore';
import GoogleLogin from 'react-google-login';
import {
    responseGoogleFailure,
    responseGoogleSuccess
} from '../../../loginComponent/Service';
import { useContext } from 'react';
import { UserContext } from '../../../../contexts/userContext/UserContext';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import AuthAlert from '../../../partials/AuthAlert';

HomeSec1.propTypes = {
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    last: PropTypes.bool.isRequired,
    logo: PropTypes.any,
    isMobile: PropTypes.any
};

/**
 * @function HomeSectionOne
 * @description Section Two Component of HomePage
 * @param {string} heading - main heading in section one
 * @param {string} paragraph - subHeading of section one
 * @param {bool} last - boolean to detect if it is the last section
 * @returns {Component} the Component of the Button
 */

const images = ['1.jpg', '2.jpg', '3.png', '4.jpg', '5.jpg'];
const imageNum = Math.floor(Math.random() * 5);

export default function HomeSec1(props) {
    const { heading, paragraph, last, logo, isMobile } = props;
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState();
    const [isPending, setIsPending] = useState();

    return (
        <>
            <section
                id={`${
                    !last
                        ? 'Get started'
                        : 'Okay, it’s not actually hard to explain.'
                }`}
                className="first-page"
                style={{
                    backgroundImage: `url(${require(`../../../../assets/images/bg${images[imageNum]}`)})`
                }}
                data-testid={`${!last ? 'home-sec1' : 'home-sec6'}`}
            >
                <div data-testid="sec1-content" className="first-page-content">
                    <div
                        data-testid="sec1-logo-container"
                        className="logo-container"
                    >
                        {logo && (
                            <p data-testid="sec1-heading" className="logo">
                                {heading}
                            </p>
                        )}

                        {last && !isMobile && (
                            <h1
                                data-testid="sec1-heading"
                                className="sixth-page-heading"
                            >
                                {heading}
                            </h1>
                        )}

                        <p
                            data-testid="sec1-paragraph"
                            className="sixth-page-paragraph"
                        >
                            {paragraph}
                        </p>
                    </div>

                    <Button
                        dataTestid="signup-btn"
                        href="/register"
                        className="sign-btn"
                        title="Sign up"
                    />
                    <Button
                        dataTestid="login-btn"
                        href="/login"
                        className="login-btn"
                        title="Log in"
                    />

                    <div className="or-container">
                        <div className="left-bar"></div>
                        <div>or</div>
                        <div className="right-bar"></div>
                    </div>

                    <p className="first-page-terms">
                        {
                            ' By continuing with the options below, you agree to CMPlr’s'
                        }
                        <Link to="/terms">Terms of Service</Link> and have read
                        the <Link to="/privacy">Privacy Policy</Link>
                    </p>

                    {isPending && (
                        <div className="load-circle">
                            <CircularProgress />
                        </div>
                    )}

                    {error && error !== '' && (
                        <AuthAlert
                            openError={error.length !== 0}
                            errorMessage={error}
                        />
                    )}

                    <div className="goggleStyleBtn">
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
                                    setUser
                                )
                            }
                            onFailure={res =>
                                responseGoogleFailure(res, setError)
                            }
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    {last && <PlaystoreApplestore />}
                    {!last && (
                        <Button href="" className="explore-btn" title="">
                            <ExploreBtn />
                            <span className="explore-text">
                                {' '}
                                {"Here's what's trending"}
                            </span>
                        </Button>
                    )}
                </div>
                <Footer imageNum={imageNum} last={last} />
            </section>
        </>
    );
}
