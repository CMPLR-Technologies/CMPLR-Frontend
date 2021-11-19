import React from 'react';
import '../../../../../styles/styles.css';
import { Link } from 'react-router-dom';
const AuthLinks = () => {
    return (
        <>
            <button className="log">
                <Link to="/login">Log in</Link>
            </button>
            <button className="sign">
                <Link to="/register">Sign up</Link>
            </button>
        </>
    );
};

export default AuthLinks;
