import React, { useState } from 'react';
import LogOutOverlay from './LogOutOverlay';

/**
 * @function AccountPopupHeader
 * @description Account Popup Header with a log out button
 * @property {bool} overlay - log out overlay screen
 * @property {function} setOverlay
 * @returns {Component}
 */

export default function AccountPopupHeader() {
    const [overlay, setOverlay] = useState(false);

    return (
        <div
            data-testid="AccountPopupHeader"
            className={`account-popup-header`}
        >
            {overlay && <LogOutOverlay hideOverlay={() => setOverlay(false)} />}
            <div>Account</div>
            <div
                data-testid="LogOutButton"
                className={`clickable`}
                onClick={() => setOverlay(true)}
            >
                Log out
            </div>
        </div>
    );
}
