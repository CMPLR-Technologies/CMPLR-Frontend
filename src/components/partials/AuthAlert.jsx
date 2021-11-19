import React from 'react';
import PropTypes from 'prop-types';
/**
 * @function AuthAlert
 * @property {string} errorMessage - stores in it the errors come from back-end
 * @property {boolean} openError - indicate wether there is an error or not
 * @returns {Component} alert error div
 */
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
