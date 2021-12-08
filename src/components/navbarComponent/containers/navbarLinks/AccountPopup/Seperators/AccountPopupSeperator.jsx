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
            data-testid="dropDownAccountSeperator"
            className={`account-popup-header`}
        >
            <div>Tumblrs</div>
            <NavLink to="/new/blog" className={`clickable`}>
                + New
            </NavLink>
        </div>
    );
}
