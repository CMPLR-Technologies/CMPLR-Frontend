import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../../../contexts/chatContext/chatContext';

/**
 * Navbar MessageItemSearchRes: includes MessageItem blog to chat with 
 * @function MessageItemSearchRes
 * @property {string} sender - sender name
 * @property {string} senderId - sender id
 * @property {string} receiver - receiver name
 * @property {string} receiverId - receiver id
 * @property {string} message - last message
 * @property {string} isRead - last message is read?
 * @property {function} clickMessagePopup - close the popup
 * @returns {Component}  MessageItemSearchRes blog to chat with 
 */
export default function MessageItemSearchRes(props) {
    let {
        sender,
        senderId,
        receiver,
        receiverId,
        shortParagrah,
        photo,
        clickMessagePopup,
        shape
    } = props;
    let { openChatPopup, currBlog } = useContext(ChatContext);

    const openChat = () => {
        let receiverPhoto = photo;
        let receiverShape = shape;
        let senderPhoto = currBlog?.senderPhoto;
        let senderShape = currBlog?.senderShape;
        let senderName = sender;
        let receiverName = receiver;
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
        // close the dropdown list
        if (clickMessagePopup) clickMessagePopup();
    };
    return (
        <div onClick={openChat} className="popup-messages-message">
            <div className={`popup-messages-message-img ${shape}`}>
                <img src={photo}></img>
            </div>
            <div className="popup-messages-message-text">
                <h3 className="receiver">{receiver}</h3>
                <div className="short">
                    <p className="message">{shortParagrah}</p>
                </div>
            </div>
        </div>
    );
}

MessageItemSearchRes.propTypes = {
    sender: PropTypes.string,
    receiver: PropTypes.string,
    shortParagrah: PropTypes.string,
    photo: PropTypes.string,
    shape: PropTypes.string,
    chatId: PropTypes.string,
    clickMessagePopup: PropTypes.func,
    receiverId: PropTypes.string,
    senderId: PropTypes.string
};
