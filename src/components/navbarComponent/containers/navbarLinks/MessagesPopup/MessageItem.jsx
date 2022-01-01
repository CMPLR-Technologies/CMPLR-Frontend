import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../../../contexts/chatContext/chatContext';
//import { useNavigate } from 'react-router-dom';
/**
 * Navbar MessageItem: includes MessageItem blog to chat with 
 * @function MessageItem
 * @property {string} sender - sender name
 * @property {string} senderId - sender id
 * @property {string} receiver - receiver name
 * @property {string} receiverId - receiver id
 * @property {string} message - last message
 * @property {string} isRead - last message is read?
 * @property {function} clickMessagePopup - close the popup
 * @returns {Component}  MessageItem blog to chat with 
 */
export default function MessageItem(props) {

    let {
        sender,
        senderId,
        receiver,
        receiverId,
        message,
        photo,
        clickMessagePopup,
        shape,
        isRead,
        lastOneSend
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
        if(clickMessagePopup)
        clickMessagePopup();
    };
    return (
        <div
            onClick={openChat}
            className={`popup-messages-message ${
                !isRead && lastOneSend === receiver ? 'notSeen' : ''
            }`}
        >
            <div className={`popup-messages-message-img ${shape}`}>
                <img src={photo}></img>
            </div>
            <div className="popup-messages-message-text">
                <h3 className="receiver">{receiver}</h3>
                <div className="sender-up">
                    <h3 className="sender">{lastOneSend + ': '}</h3>
                    <p className="message">{message}</p>
                </div>
                {!isRead && lastOneSend === receiver && (
                    <div className="notSeenDot">
                        <i className="fas fa-circle"></i>
                    </div>
                )}
            </div>
        </div>
    );
}

MessageItem.propTypes = {
    sender: PropTypes.string,
    receiver: PropTypes.string,
    message: PropTypes.string,
    chat: PropTypes.bool,
    shortParagrah: PropTypes.string,
    photo: PropTypes.string,
    shape: PropTypes.string,
    chatId: PropTypes.string,
    clickMessagePopup: PropTypes.func,
    mobile: PropTypes.bool,
    lastOneSend: PropTypes.string,
    isRead: PropTypes.bool,
    receiverId: PropTypes.string,
    senderId: PropTypes.string
};
