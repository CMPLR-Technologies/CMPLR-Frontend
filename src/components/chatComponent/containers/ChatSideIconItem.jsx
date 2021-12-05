import React from 'react';
import PropTypes from 'prop-types';

export const ChatSideIconItem = props => {
    let name = props.name;
    let chatId = props.chatId;
    let photo = props.photo;
    const onClick = () => {
        // to do open the chat with this id
        console.log(chatId);
    };
    return (
        <div className="chat-side-icon-item" onClick={onClick}>
            <img src={photo} title={name} />
        </div>
    );
};
ChatSideIconItem.propTypes = {
    name: PropTypes.string.isRequired,
    chatId: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
};
