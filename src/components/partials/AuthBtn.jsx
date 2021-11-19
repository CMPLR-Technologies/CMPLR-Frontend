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
    const { text, color, logo = null, handleClick } = props;
    return (
        <a
            onClick={handleClick}
            className="AuthBtn"
            style={{ backgroundColor: color, color: 'black' }}
            title={text}
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
        </a>
    );
}

AuthBtn.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    logo: PropTypes,
    handleClick: PropTypes.func.isRequired
};
