import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @function AccountPopupSeperator
 * @description in between seperator in the Account Popup Container
 * @returns {Component}
 */

export default function AccountPopupSeperator() {
    return (
        <div
            data-testid="AccountPopupSeperator"
            className={`account-popup-header`}
        >
            <div>Tumblrs</div>
            <NavLink to="/blog/new" className={`clickable`}>
                + New
            </NavLink>
        </div>
    );
}
