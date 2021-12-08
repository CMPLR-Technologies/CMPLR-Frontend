import React, { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/userContext/UserContext';
import { NavLink } from 'react-router-dom';

/**
 * @function AccountPopupHeader
 * @description Account Popup Header with a log out button
 * @property {function} logOut - even handling function to handle loging out
 * @returns {Component}
 */

export default function AccountPopupHeader() {
    const { setUser } = useContext(UserContext);

    const logOut = () => {
        setUser(null);
    };

    return (
        <div
            data-testid="dropDownAccountHeader"
            className={`account-popup-header`}
        >
            <div>Account</div>
            <NavLink to="/" className={`clickable`}>
                <div onClick={() => logOut()}>Log out</div>
            </NavLink>
        </div>
    );
}
