import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Navbar2MainViewUnAuthLinks: contains the navbar unauth links
 * @function Navbar2MainViewUnAuthLinks
 * @description this is the main navbar unauth links 
 * @returns {Component}  includes sign/log in buttons
 */
export default function Navbar2MainViewUnAuthLinks() {
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
