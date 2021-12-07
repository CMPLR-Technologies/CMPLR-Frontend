import React from 'react';

export default function AccountPopupHeader() {
    return (
        <div
            data-testid="dropDownAccountHeader"
            className={`account-popup-header`}
        >
            <div>Account</div>
            <div className={`clickable`}>Log out</div>
        </div>
    );
}
