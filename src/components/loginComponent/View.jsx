import React from 'react';
import LoginCard from './containers/LoginCard';
import AuthFooter from '../partials/AuthFooter';
import { getRandomImage } from './Controller';
import useRedirect from '../../hooks/useRedirect';

/**
 * Login Main Component
 * @function LoginView
 * @description The main container for the login page
 * @returns {Component} Component that contains LoginCard and AuthFooter
 */
export default function LoginView() {
    useRedirect();
    const b = getRandomImage();
    return (
        <div className="LoginView" style={{ backgroundImage: `url(${b})` }}>
            <LoginCard></LoginCard>
            <AuthFooter></AuthFooter>
        </div>
    );
}
