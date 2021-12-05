import React from 'react';
import PropTypes from 'prop-types';
export default function ChatOption(props) {
    let name = props.name;

    return (
        <ul className="chat-popup-header-option">
            <li>
                <span>Sound setting</span>
                <i className="fas fa-angle-right"></i>
            </li>
            <li>Delete conversation</li>
            <li>Block {name}</li>
        </ul>
    );
}
ChatOption.propTypes = {
    name: PropTypes.string.isRequired
};
