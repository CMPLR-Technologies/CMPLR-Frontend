import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../../../contexts/chatContext/chatContext';
export default function MessageItemSearchRes(props) {
    {
        /*to do load the real data(photo sender,rec,message*/
    }

    let {
        sender,
        senderId,
        receiver,
        receiverId,
        shortParagrah,
        photo,
        clickMessagePopup,
        //mobile,
        shape
    } = props;
    let { openChatPopup, currBlog } = useContext(ChatContext);
    // const navigate = useNavigate();

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
