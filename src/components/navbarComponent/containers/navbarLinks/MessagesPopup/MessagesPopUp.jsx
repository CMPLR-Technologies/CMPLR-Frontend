/* eslint-disable react/prop-types */
import React from 'react';
import MessagesContainer from './MessagesContainer';
import PropTypes from 'prop-types';
/**
 * Navbar MessagesPopUp: includes MessageItems blogs to chat with 
 * @function Messages
 * @property {funtion} clickMessagePopup - funtion to close the popup
 * @returns {Component}  array of blogs you have a previous chat with 
 */
export default function MessagesPopUp(props) {
    const { clickMessagePopup } = props;
    const darkTheme = false;
    return (
        <div
            data-testid="dropDownMessage"
            className={`popup ${darkTheme ? 'dark ' : ''}`}
        >
            <MessagesContainer clickMessagePopup={clickMessagePopup} />
        </div>
    );
}
PropTypes.propTypes = {
    clickMessagePopup: PropTypes.func.isRequired
};
