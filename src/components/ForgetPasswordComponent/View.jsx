import React from 'react';
import ForgetPassword from './containers/ForgetPassword';
export default function ForgetPasswordView() {
    return (
        <div
            data-testid="forget-password-container"
            id="forget-password"
            className="LoginView"
        >
            <ForgetPassword />
        </div>
    );
}
