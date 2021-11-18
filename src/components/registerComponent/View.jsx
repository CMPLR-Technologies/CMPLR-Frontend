import React from 'react';
import '../../styles/styles.css';
import AuthFooter from '../partials/AuthFooter';
import RegisterCard from './containers/RegisterCard';

export default function Register() {
    return (
        <div className="LoginView">
            <RegisterCard />
            <AuthFooter />
        </div>
    );
}
