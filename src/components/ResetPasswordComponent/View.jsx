import React from 'react';
import ResetPasswordCard from './containers/ResetPasswordCard';
export default function ResetPassword() {
    return (
        <div
            data-testid="reset-password-container"
            id="forget-password"
            className="LoginView"
        >
            <ResetPasswordCard />
        </div>
    );
}
