import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ChatContext } from '../../../contexts/chatContext/ChatContext';
import ChatMessages from './ChatMessages';
import ChatOption from './ChatOption';
export default function ChatMessageMobileView() {
    // eslint-disable-next-line react/prop-types
    //let { sender, receiver } = props.match.params;
    useEffect(() => {
        // to do get chat data
    }, []);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    let { currPopUpOpenChat, sendMessage } = useContext(ChatContext);
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

    // send message on submit
    const sendMessageTo = () => {
        if (messageToSend.length !== 0 && messageToSend.trim() !== '') {
            sendMessage(messageToSend);
            setMessageToSend('');
        }
    };

    // send message when enter
    const onEnterPress = e => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessageTo();
        }
    };
    const [showOption, setShowOption] = useState(false);
    const toggleOption = () => {
        console.log('gas');
        if (showOption) setShowOption(false);
        else setShowOption(!showOption);
    };
    const closeOption = () => {
        setShowOption(false);
    };
    return (
        <div className="chat-mobileview">
            <div className="chat-popup">
                <div className="chat-popup-header">
                    {showOption && (
                        <ChatOption close={closeOption} name={receiver} />
                    )}
                    <NavLink to="/messaging">
                        <i className="fas fa-angle-left"></i>
                    </NavLink>
                    <div className="names">
                        <a href={senderLink}>{sender}</a>
                        {' + '}
                        <a href={receiverLink}>{receiver}</a>
                    </div>
                    <div className="btns">
                        <button onClick={toggleOption}>
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                </div>

                <ChatMessages messagesEndRef={messagesEndRef} />
                <div className="chat-popup-footer">
                    <textarea
                        autoFocus
                        type="text"
                        placeholder="Say something"
                        onChange={onChange}
                        value={messageToSend}
                        onKeyDown={onEnterPress}
                    />
                    <div className="send" onClick={sendMessageTo}>
                        <i className="far fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
