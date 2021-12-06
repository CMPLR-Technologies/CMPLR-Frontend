import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../../../contexts/chatContext/ChatContext';
import { useNavigate } from 'react-router-dom';

export default function MessageItem(props) {
    {
        /*to do load the real data(photo sender,rec,message*/
    }

    let {
        sender,
        receiver,
        message,
        chat,
        shortParagrah,
        photo,
        chatId,
        clickMessagePopup,
        mobile
    } = props;
    let { openChatPopup } = useContext(ChatContext);
    const navigate = useNavigate();

    const openChat = () => {
        if (mobile) {
            let route = `/messaging/conversation/${sender}/${receiver}`;
            navigate(route);
            openChatPopup(chatId);
            return;
        }
        openChatPopup(chatId);
        // close the dropdown list
        clickMessagePopup();
    };
    return (
        <div onClick={openChat} className="popup-messages-message">
            <div className="popup-messages-message-img">
                <img src={photo}></img>
            </div>
            <div className="popup-messages-message-text">
                <h3 className="receiver">{receiver}</h3>
                {/*if chat==true then i call compenent from messages popup else i call it from new message search*/}
                {chat ? (
                    <div className="sender-up">
                        <h3 className="sender">{sender + ': '}</h3>
                        <p className="message">{message}</p>
                    </div>
                ) : (
                    <span className="message">{shortParagrah}</span>
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
    chatId: PropTypes.string,
    clickMessagePopup: PropTypes.func,
    mobile: PropTypes.bool
};
