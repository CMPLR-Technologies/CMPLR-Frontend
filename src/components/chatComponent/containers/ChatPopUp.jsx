import React, { useState, useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../../../contexts/chatContext/ChatContext';
import ChatMessages from './ChatMessages';
import ChatOption from './ChatOption';
import useInfiniteScrolling from '../../../hooks/useInfiniteScrolling';
import { apiBaseUrl } from '../../../config.json';

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
    let {
        currPopUpOpenChat,
        closeChatPopup,
        paritialCloseChatPopup,
        sideIconOpenChat,
        sendMessage,
        pageNumber,
        setConversationMsg,
        conversationMsg
    } = useContext(ChatContext);

    let { senderId, receiverId, senderName, receiverName } =
        currPopUpOpenChat || {};
    //let { fromId, toId } = props;
    const {
        error,
        data: msgs,
        isPending,
        hasMore
    } = useInfiniteScrolling(
        `${apiBaseUrl}/messaging/conversation/${senderId}/${receiverId}?page=${pageNumber}`
    );
    useEffect(() => {
        setConversationMsg(msgs);
    }, [msgs]);

    // the part for scorll down when you send/receive message
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    //message you type it
    const [messageToSend, setMessageToSend] = useState('');
    useEffect(() => {
        setMessageToSend('');
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [conversationMsg]);
    const onChange = e => {
        setMessageToSend(e.target.value);
    };

    // send message when click >
    const sendMessageTo = () => {
        if(isPending)return;
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
                {/*TO DO hide the header untill no more!!!!!!!!!! */}
                {!hasMore && (
                    <div className="chat-popup-header">
                        {showOption && (
                            <ChatOption
                                close={toggleOption}
                                name={receiverName}
                            />
                        )}

                        <div className="names">
                            <a href={senderName}>{senderName}</a>
                            {' + '}
                            <a href={receiverName}>{receiverName}</a>
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
                )}

                <ChatMessages
                    messagesEndRef={messagesEndRef}
                    msgs={conversationMsg}
                    isPending={isPending}
                    error={error}
                    hasMore={hasMore}
                />
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
