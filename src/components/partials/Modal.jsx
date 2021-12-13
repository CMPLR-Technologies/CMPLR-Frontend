import React from 'react';
import PropTypes from 'prop-types';

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
    const { messageHeading, messageDesc, children } = props;
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="msg-heading">{messageHeading}</div>
                <div className="msg-description">{messageDesc}</div>
                <div className="buttons-box modal-btns">{children}</div>
            </div>
        </div>
    );
}
