import React from 'react';
import PropTypes from 'prop-types';

export default function AuthAlert(props) {
    const { errorMessage, openError } = props;

    return (
        <>
            {openError && (
                <div className="auth_alert">
                    <h3>{errorMessage}</h3>
                </div>
            )}
        </>
    );
}

AuthAlert.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    openError: PropTypes.bool.isRequired
};
