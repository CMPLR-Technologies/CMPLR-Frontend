import React from 'react';
import { Link } from 'react-router-dom';
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
