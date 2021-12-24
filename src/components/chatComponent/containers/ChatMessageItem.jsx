import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
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
    let { name, photo, message, link, shape, time } = props;
    //console.log(time);
    return (
        <div className="message">
            <a className={`img ${shape}`} src={link}>
                <img src={photo} title={name} alt={name} />
            </a>
            <div className="text">
                <div className="main">{name}</div>
                <div className="msg">{message}</div>
                <div className="date">
                    <TimeAgo datetime={new Date(time)} />
                </div>
            </div>
        </div>
    );
}
ChatMessageItem.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    shape: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};
