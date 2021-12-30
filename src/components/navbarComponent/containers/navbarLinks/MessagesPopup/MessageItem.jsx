import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../../../contexts/chatContext/chatContext';
//import { useNavigate } from 'react-router-dom';

export default function MessageItem(props) {
    {
        /*to do load the real data(photo sender,rec,message*/
    }

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
    // const navigate = useNavigate();

    const openChat = () => {
        /*if (mobile) {
           // console.log(senderId);
            let route = `/messaging/conversation/${senderId}/${receiverId}`;
            //openChatPopup(senderId, receiverId);
            navigate(route);
            return;
        }*/
        let receiverPhoto = photo;
        let receiverShape = shape;
        let senderPhoto = currBlog?.senderPhoto;
        let senderShape = currBlog?.senderShape;
        let senderName = sender;
        let receiverName = receiver;

        // console.log('helo:,', senderId, receiverId);

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
