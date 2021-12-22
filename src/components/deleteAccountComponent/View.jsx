import React from 'react';
import DeleteAccountCard from './containers/DeleteAccountCard';
export default function DeleteAccount() {
    return (
        <div
            data-testid="delete-account-container"
            id="forget-password"
            className="LoginView"
        >
            <DeleteAccountCard />
        </div>
    );
}
