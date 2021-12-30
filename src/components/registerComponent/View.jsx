import React, { useState } from 'react';
import '../../styles/styles.css';
import { getRandomImage } from '../loginComponent/Controller';
import AuthFooter from '../partials/AuthFooter';
import RegisterCard from './containers/RegisterCard';

/**
 * Register Main Component
 * @function Register
 * @description this is the main Component of register contains in it's body all the register cards
 * @returns {Component} register_card & auth_footer
 */

export default function Register() {
    // eslint-disable-next-line no-unused-vars
    const [b, setB] = useState(getRandomImage());
    return (
        <div className="LoginView" style={{ backgroundImage: `url(${b})` }}>
            <RegisterCard />
            <AuthFooter />
        </div>
    );
}
