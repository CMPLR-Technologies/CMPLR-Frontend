import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChatMessages from './ChatMessages';
import ChatOption from './ChatOption';
export default function ChatPopUp(props) {
    let sender = props.sender;
    let senderLink = props.senderLink;
    let receiver = props.receiver;
    let receiverLink = props.receiverLink;

    const [messageToSend, setMessageToSend] = useState('');
    const onChange = e => {
        setMessageToSend(e.target.value);
    };
    const sendMessage = () => {
        console.log(messageToSend);
    };

    const [showOption, setShowOption] = useState(false);
    const toggleOption = () => {
        setShowOption(!showOption);
    };
    const close = () => {

    };
    const partialClose = () => {
        
    };
    return (
        <div className="chat-popup">
            <div className="chat-popup-header">
                {showOption && <ChatOption name={receiver} />}
                <div className="names">
                    <a href={senderLink}>{sender}</a>
                    {' + '}
                    <a href={receiverLink}>{receiver}</a>
                </div>
                <div className="btns">
                    <button onClick={toggleOption}>
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                    <button onClick={partialClose}>
                        <i className="fas fa-compress-alt"></i>
                    </button>
                    <button onClick={close}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>

            <ChatMessages />

            <div className="chat-popup-footer">
                <div className="input">
                    <textarea
                        type="text"
                        placeholder="Say something"
                        onChange={onChange}
                        value={messageToSend}
                    />
                </div>
                <div className="send" onClick={sendMessage}>
                    <i className="far fa-paper-plane"></i>
                </div>
            </div>
        </div>
    );
}

ChatPopUp.propTypes = {
    sender: PropTypes.string.isRequired,
    receiver: PropTypes.string.isRequired,
    senderLink: PropTypes.string.isRequired,
    receiverLink: PropTypes.string.isRequired
};
