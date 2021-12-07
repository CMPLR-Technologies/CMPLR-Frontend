import React from 'react';
import { NavLink } from 'react-router-dom';

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
