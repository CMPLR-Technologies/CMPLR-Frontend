import React from 'react';
import ResetPassword from './containers/ResetPassword';
export default function ForgetPasswordView() {
    return (
        <div
            data-testid="reset-password-container"
            id="forget-password"
            className="LoginView"
        >
            <ResetPassword />
        </div>
    );
}
