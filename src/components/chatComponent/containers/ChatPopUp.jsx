import React, { useState, useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../../../contexts/chatContext/ChatContext';
import ChatMessages from './ChatMessages';
import ChatOption from './ChatOption';
/**
 * ChatPopUp Component
 * @function ChatPopUp
 * @description this is the main Component ChatPopUp section which the part you can chat with other blog
 * @property {string} sender - name of blog sender
 * @property {string} senderLink - link of blog sender
 * @property {string} receiver - name of blog receiver
 * @property {string} receiverLink - link of blog receiver
 * @property {string} chatId - chat id
 * @returns {Component} ChatPopUp header & ChatPopUp messages & ChatPopUp footer
 */
export default function ChatPopUp() {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        console.log('scroll');
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    let {
        currPopUpOpenChat,
        closeChatPopup,
        paritialCloseChatPopup,
        sideIconOpenChat,
        sendMessage
    } = useContext(ChatContext);
    let {
        sender = 'gaser',
        senderLink = '#',
        receiver = 'omda',
        receiverLink = '#',
        chatId = 0
    } = currPopUpOpenChat || {};
    const [messageToSend, setMessageToSend] = useState('');
    useEffect(() => {
        setMessageToSend('');
    }, [chatId]);
    useEffect(() => {
        scrollToBottom();
    }, [currPopUpOpenChat]);
    const onChange = e => {
        setMessageToSend(e.target.value);
    };
    const sendMessageTo = () => {
        if (messageToSend.length !== 0 && messageToSend.trim() !== '') {
            sendMessage(messageToSend);
            setMessageToSend('');
        }
    };

    const onEnterPress = e => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessageTo();
        }
    };
    const [showOption, setShowOption] = useState(false);
    const toggleOption = () => {
        setShowOption(!showOption);
    };
    const close = () => {
        closeChatPopup();
    };
    const partialClose = () => {
        paritialCloseChatPopup();
    };
    return (
        <div
            className={`chat-popup-container ${
                sideIconOpenChat && sideIconOpenChat.length ? 'side' : ''
            }`}
        >
            <div className="chat-popup">
                <div className="chat-popup-header">
                    {showOption && (
                        <ChatOption close={toggleOption} name={receiver} />
                    )}

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

                <ChatMessages messagesEndRef={messagesEndRef} />
                <div className="chat-popup-footer">
                    <div className="input">
                        <textarea
                            autoFocus
                            type="text"
                            placeholder="Say your thing"
                            onChange={onChange}
                            value={messageToSend}
                            onKeyDown={onEnterPress}
                        />
                    </div>
                    <div className="send" onClick={sendMessageTo}>
                        <i className="far fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
