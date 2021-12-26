import React from 'react';
import PropTypes from 'prop-types';

/**
 * Authentication Button
 * @function AuthBtn
 * @description Custom button for sign up and login pages
 * @property { string } text - the text to be displayed on button
 * @property { string } color - background color of the button
 * @property { function } handleClick - handler for click event
 * @returns Button with the given parameters
 */

export default function AuthBtn(props) {
    const {
        text,
        color,
        logo = null,
        handleClick,
        id,
        dataTestid,
        isPending = false
    } = props;

    return (
        <button
            onClick={handleClick}
            className="AuthBtn "
            style={{ backgroundColor: color }}
            id={id}
            data-testid={dataTestid}
            title={text}
            disabled={isPending}
        >
            {logo && (
                <img
                    width="23"
                    height="24"
                    src={logo}
                    alt="logo"
                    style={{ marginRight: '3px', paddingRight: '5px' }}
                />
            )}
            {text}
        </button>
    );
}

AuthBtn.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    logo: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.string,
    dataTestid: PropTypes.string,
    isPending: PropTypes.bool
};
