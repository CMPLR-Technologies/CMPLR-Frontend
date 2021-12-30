import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';

/**
 * @function Modal
 * @description Compoenent for alert modal used to display diffrent messages to the user
 * @param {string} messageHeading- heading of alert message
 * @param {string} messageDesc - content of alert message
 * @param {node} children - buttons dispalyed in modal sucha s cancel ,confirm ,...etc
 * @returns {Component} Alert Modal Component
 */

Modal.propTypes = {
    messageHeading: PropTypes.string.isRequired,
    messageDesc: PropTypes.string,
    children: PropTypes.node
};
export default function Modal(props) {
    const theme = useContext(ThemeContext)[0];
    const css = `
    .modal .msg-heading {
        color:rgb(${themes[theme].whiteOnDark}) !important;
    }
    .modal .msg-desc {
        color:rgb(${themes[theme].whiteOnDark}) !important;
    }
    .modal{
        background-color: rgba(${themes[theme].navy},.95) !important;
    }
    .AuthBtn{
        color: rgb(${themes[theme].navy});
    }
    .log-out-overlay-text{
        color: rgb(${themes[theme].whiteOnDark});
    }
    `;
    const { messageHeading, messageDesc, children } = props;
    return (
        <div data-testid={`modal-ts`} className="modal">
            <style>{css}</style>
            <div data-testid={`modal-container-ts`} className="modal-container">
                <div
                    data-testid={`modal-message-heading-ts`}
                    className="msg-heading"
                >
                    {messageHeading}
                </div>
                <div
                    data-testid={`modal-message-desc-ts`}
                    className="msg-description"
                >
                    {messageDesc}
                </div>
                <div
                    data-testid={`modal-btns-ts`}
                    className="buttons-box modal-btns"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
