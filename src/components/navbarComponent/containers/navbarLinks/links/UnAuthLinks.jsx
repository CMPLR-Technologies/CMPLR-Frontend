import React from 'react';
import '../../../../../styles/styles.css';
import { Link } from 'react-router-dom';
/**
 * Navbar UnAuthLinks: includes two buttons login and sign up
 * @function NavbarUnAuthLinks
 * @returns {Component} two buttons login and sign up
 */
export default function UnAuthLinks() {
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
}
