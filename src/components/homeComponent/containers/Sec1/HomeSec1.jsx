import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import ExploreBtn from './ExploreBtn.svg';
import Footer from './Footer';
import GoogleButton from './GoogleButton.svg';
import PropTypes from 'prop-types';

HomeSec1.propTypes = {
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    last: PropTypes.bool.isRequired
};

const images = ['1.jpg', '2.jpg', '3.png', '4.jpg', '5.jpg'];
const imageNum = Math.floor(Math.random() * 5);

export default function HomeSec1(props) {
    const { heading, paragraph, last } = props;
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
                        {!last ? (
                            <>
                                <p data-testid="sec1-heading" className="logo">
                                    {heading}
                                </p>
                                <p data-testid="sec1-paragraph">{paragraph}</p>
                            </>
                        ) : (
                            <>
                                <h1
                                    data-testid="sec1-heading"
                                    className="sixth-page-heading"
                                >
                                    {heading}
                                </h1>
                                <p
                                    data-testid="sec1-paragraph"
                                    className="sixth-page-paragraph"
                                >
                                    {paragraph}
                                </p>
                            </>
                        )}
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
                            ' By continuing with the options below, you agree to Tumblr’s'
                        }
                        <Link to="/terms">Terms of Service</Link> and have read
                        the <Link to="/privacy">Privacy Policy</Link>
                    </p>

                    <Button href="/auth/google" className="google-btn" title="">
                        <GoogleButton />
                        <div className="btn-text">Continue with Google</div>
                    </Button>

                    <Button href="" className="explore-btn" title="">
                        <ExploreBtn />
                        <span className="explore-text">
                            {' '}
                            {"Here's what's trending"}
                        </span>
                    </Button>
                </div>
                <Footer imageNum={imageNum} last={last} />
            </section>
        </>
    );
}
