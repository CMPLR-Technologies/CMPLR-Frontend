import React from 'react';
import ForgetPasswordCard from './containers/ForgetPassword';
export default function ForgetPassword() {
    return (
        <div
            data-testid="forget-password-container"
            id="forget-password"
            className="LoginView"
        >
            <ForgetPasswordCard />
        </div>
    );
}
