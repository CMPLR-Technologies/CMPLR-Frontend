import React, { useEffect } from 'react';
import '../../styles/styles.css';
import AuthFooter from '../partials/AuthFooter';
import RegisterCard from './containers/RegisterCard';
import { UserContext } from '../../contexts/userContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

/**
 * Register Main Component
 * @function Register
 * @description this is the main Component of register contains in it's body all the register cards
 * @returns {Component} register_card & auth_footer
 */

export default function Register() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, []);

    return (
        <div className="LoginView">
            <RegisterCard />
            <AuthFooter />
        </div>
    );
}
