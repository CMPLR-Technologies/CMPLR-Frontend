import React from 'react';
import '../../styles/styles.css';
import AuthFooter from '../partials/AuthFooter';
import RegisterCard from './containers/RegisterCard';

/**
 * Register Main Component
 * @function Register
 * @description this is the main Component of register contains in it's body all the register cards
 * @returns {Component} register_card & auth_footer
 */
export default function Register() {
    return (
        <div className="LoginView">
            <RegisterCard />
            <AuthFooter />
        </div>
    );
}
