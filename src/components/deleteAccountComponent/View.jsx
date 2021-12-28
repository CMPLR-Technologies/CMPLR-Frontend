import React ,{useEffect}from 'react';
import DeleteAccountCard from './containers/DeleteAccountCard';
import PropsTypes from 'prop-types';
export default function DeleteAccount({setWithNav}) {
    useEffect(() => {
        setWithNav(false);
    }, []);
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
DeleteAccount
.propTypes = {
    setWithNav: PropsTypes.func.isRequired,
};
