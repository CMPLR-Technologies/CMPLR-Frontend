import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @function AccountPopupFooter
 * @description Account Popup Footer with some links
 * @returns {Component}
 */

export default function AccountPopupFooter() {
    return (
        <div
            data-testid="dropDownAccountFooter"
            className={`account-popup-footer account-popup-header`}
        >
            <NavLink to="/about" className={`clickable`}>
                About
            </NavLink>
            <NavLink to="/apps" className={`clickable`}>
                Apps
            </NavLink>
            <NavLink to="/policy/terms-of-service" className={`clickable`}>
                Legal{' '}
            </NavLink>
            <NavLink to="/policy/privacy" className={`clickable`}>
                Privacy{' '}
            </NavLink>
        </div>
    );
}
