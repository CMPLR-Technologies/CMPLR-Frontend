import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ChatContext } from '../../../contexts/chatContext/ChatContext';
import ChatMessages from './ChatMessages';
import ChatOption from './ChatOption';
import useInfiniteScrolling from '../../../hooks/useInfiniteScrolling';
import { apiBaseUrl } from '../../../config.json';
/**
 * ChatMessageMobileView Component
 * @function ChatMessageMobileView
 * @description this is the main Component ChatMessage in mobile view
 * @property {string} sender - name of blog sender
 * @property {string} senderLink - link of blog sender
 * @property {string} receiver - name of blog receiver
 * @property {string} receiverLink - link of blog receiver
 * @property {string} chatId - chat id
 * @returns {Component} chat container in mobile view
 */
export default function ChatMessageMobileView() {
    // eslint-disable-next-line react/prop-types
    //let { sender, receiver } = props.match.params;
    let { sender, receiver } = useParams();
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    let {
        currPopUpOpenChat,
        sendMessage,
        pageNumber,
        setConversationMsg,
        conversationMsg
    } = useContext(ChatContext);
    let { senderName, receiverName } = currPopUpOpenChat || {};
    const {
        error,
        data: msgs,
        isPending,
        hasMore
    } = useInfiniteScrolling(
        `${apiBaseUrl}/messaging/conversation/${sender}/${receiver}?page=${pageNumber}`
    );
    useEffect(() => {}, []);
    useEffect(() => {
        setConversationMsg(msgs);
    }, [msgs]);

    const [messageToSend, setMessageToSend] = useState('');
    useEffect(() => {
        setMessageToSend('');
    }, []);
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
        //console.log('gas');
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
                        <ChatOption close={closeOption} name={receiverName} />
                    )}
                    <NavLink to="/messaging">
                        <i className="fas fa-angle-left"></i>
                    </NavLink>
                    <div className="names">
                        <a href={senderName}>{senderName}</a>
                        {' + '}
                        <a href={receiverName}>{receiverName}</a>
                    </div>
                    <div className="btns">
                        <button onClick={toggleOption}>
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                </div>

                <ChatMessages
                    messagesEndRef={messagesEndRef}
                    msgs={conversationMsg}
                    isPending={isPending}
                    error={error}
                    hasMore={hasMore}
                />
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
