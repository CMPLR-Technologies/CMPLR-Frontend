import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../contexts/chatContext/chatContext';
/**
 * ChatSideIconItem Component
 * @function ChatSideIconItem
 * @description this is the main Component ChatSideIconItem section a message sideicon
 * @property {string} name - name of blog sender
 * @property {string} photo - photo of blog sender
 * @property {string} message - name of blog sender
 * @returns {Component} message item
 */
export default function ChatSideIconItem(props) {
    let { openChatPopup } = useContext(ChatContext);
    let {
        senderId,
        receiverId,
        senderPhoto,
        senderShape,
        receiverPhoto,
        receiverShape,
        senderName,
        receiverName
    } = props;
    const onClick = () => {
        // to do open the chat with this id
        openChatPopup(
            senderId,
            receiverId,
            senderPhoto,
            senderShape,
            receiverPhoto,
            receiverShape,
            senderName,
            receiverName
        );
    };
    return (
        <div className="chat-side-icon-item" onClick={onClick}>
            <img src={receiverPhoto} title={receiverName} alt={receiverName} />
        </div>
    );
}
ChatSideIconItem.propTypes = {
    senderId: PropTypes.string.isRequired,
    receiverId: PropTypes.string.isRequired,
    senderPhoto: PropTypes.string.isRequired,
    senderShape: PropTypes.string.isRequired,
    receiverPhoto: PropTypes.string.isRequired,
    receiverShape: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    receiverName: PropTypes.string.isRequired
};
