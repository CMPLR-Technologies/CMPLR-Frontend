import React, { useContext, useCallback, useRef } from 'react';
import ChatMessageItem from './ChatMessageItem';
import { ChatContext } from '../../../contexts/chatContext/ChatContext';
import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
/**
 * ChatMessages Component
 * @function ChatMessages
 * @description this is the main Component ChatMessages section which have a messages items
 * @property {string} sender - name of blog sender
 * @property {string} senderLink - link of blog sender
 * @property {string} senderPhoto - photo of blog sender
 * @property {string} receiver - name of blog receiver
 * @property {string} receiverLink - link of blog receiver
 * @property {string} receiverPhoto - photo of blog receiver
 * @property {array} chatMessage - array of messages
 * @returns {Component} array of ChatMessageItem
 */
export default function ChatMessages(props) {
    let { currPopUpOpenChat, msgs, error, isPending, hasMore, setPageNumber } =
        useContext(ChatContext);

    // paganation part
    const observer = useRef();
    const lastPostElementRef = useCallback(
        node => {
            if (isPending) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber(prevPageNumber => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isPending, hasMore]
    );

    let { messagesEndRef } = props;
    let {
        sender = 'gaser',
        senderPhoto = 'gaser',
        senderLink = '#',
        receiver = 'omda',
        receiverPhoto = 'gaser',
        receiverLink = '#',
        chatMessage = []
    } = currPopUpOpenChat || {};

    return (
        <div className="chat-popup-chat">
            <div className="chat-popup-chat-header">
                <div className="img">
                    <img src={receiverPhoto} />
                </div>
                <div className="receiver-link">
                    <a href={receiverLink} className="main">
                        {receiver}
                    </a>
                </div>
            </div>
            <div className="chat-popup-chat-messages">
                {error && (
                    <div className="no-data-error">{"Couldn't load"}</div>
                )}
                {isPending && <LinearProgress />}
                {currPopUpOpenChat &&
                    chatMessage.map((message, index) => {
                        if (index === 0) {
                            return (
                                <div ref={lastPostElementRef} key={index}>
                                    <ChatMessageItem
                                        name={
                                            message.type === 's'
                                                ? sender
                                                : receiver
                                        }
                                        link={
                                            message.type === 's'
                                                ? senderLink
                                                : receiverLink
                                        }
                                        photo={
                                            message.type === 's'
                                                ? senderPhoto
                                                : receiverPhoto
                                        }
                                        message={message.message}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <ChatMessageItem
                                    key={index}
                                    name={
                                        message.type === 's' ? sender : receiver
                                    }
                                    link={
                                        message.type === 's'
                                            ? senderLink
                                            : receiverLink
                                    }
                                    photo={
                                        message.type === 's'
                                            ? senderPhoto
                                            : receiverPhoto
                                    }
                                    message={message.message}
                                />
                            );
                        }
                    })}
            </div>
            <div ref={messagesEndRef}></div>
        </div>
    );
}
ChatMessages.propTypes = {
    messagesEndRef: PropTypes.object.isRequired
};
