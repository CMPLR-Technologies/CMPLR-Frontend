import React, { useEffect } from 'react';
import DeleteAccountCard from './containers/DeleteAccountCard';
import PropsTypes from 'prop-types';
export default function DeleteAccount({ setWithNav }) {
    useEffect(() => {
        setWithNav(false);
    }, []);
    window.addEventListener('popstate', function (event) {
        setWithNav(true);
    });
    return (
        <div
            data-testid="delete-account-container"
            id="forget-password"
            className="LoginView"
        >
            <DeleteAccountCard setWithNav={setWithNav} />
        </div>
    );
}
DeleteAccount.propTypes = {
    setWithNav: PropsTypes.func.isRequired
};
