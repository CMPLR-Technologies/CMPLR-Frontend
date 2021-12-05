import React from 'react';
import PropTypes from 'prop-types';
export default function ChatMessageItem(props) {
    let name = props.name;
    let photo = props.photo;
    let message = props.message;
    let link = props.link;
    return (
        <div className="message">
            <a className="img" src={link}>
                <img src={photo} />
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
