import React from 'react';
import PropTypes from 'prop-types';
/**
 * ChatMessageItem Component
 * @function ChatMessageItem
 * @description this is the main Component ChatMessageItem section which have a message items
 * @property {string} name - name of blog sender
 * @property {string} link - link of blog sender
 * @property {string} photo - photo of blog sender
 * @property {string} message - name of blog sender
 * @returns {Component} message item
 */
export default function ChatMessageItem(props) {
    let name = props.name;
    let photo = props.photo;
    let message = props.message;
    let link = props.link;
    return (
        <div className="message">
            <a className="img" src={link}>
                <img src={photo} title={name} alt={name} />
            </a>
            <div className="text">
                <div className="main">{name}</div>
                <div className="msg">{message}</div>
            </div>
        </div>
    );
}
ChatMessageItem.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
