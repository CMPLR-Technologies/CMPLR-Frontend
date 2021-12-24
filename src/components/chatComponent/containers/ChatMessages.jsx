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
    let { currPopUpOpenChat, setPageNumber } = useContext(ChatContext);
    let { msgs, isPending, error, hasMore, messagesEndRef } = props;
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
    let {
        senderId,
        receiverId,
        senderPhoto,
        senderShape,
        receiverPhoto,
        receiverShape,
        senderName,
        receiverName
    } = currPopUpOpenChat || {};
    return (
        <div className="chat-popup-chat">
            <div className="chat-popup-chat-header">
                <div className="img">
                    <img src={receiverPhoto} />
                </div>
                <div className="receiver-link">
                    <a href={receiverId} className="main">
                        {receiverName}
                    </a>
                </div>
            </div>
            <div className="chat-popup-chat-messages">
                {error && (
                    <div className="no-data-error">{"Couldn't load"}</div>
                )}
                {isPending && <LinearProgress />}
                {msgs &&
                    msgs.map((message, index) => {
                        if (index === 0) {
                            return (
                                <div ref={lastPostElementRef} key={index}>
                                    <ChatMessageItem
                                        name={
                                            message.from_blog_id === senderId
                                                ? senderName
                                                : receiverName
                                        }
                                        link={
                                            message.from_blog_id === senderId
                                                ? senderName
                                                : receiverName
                                        }
                                        photo={
                                            message.from_blog_id === senderId
                                                ? senderPhoto
                                                : receiverPhoto
                                        }
                                        shape={
                                            message.from_blog_id === senderId
                                                ? senderShape
                                                : receiverShape
                                        }
                                        time={message.created_at}
                                        message={message.content}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <ChatMessageItem
                                    name={
                                        message.from_blog_id === senderId
                                            ? senderName
                                            : receiverName
                                    }
                                    link={
                                        message.from_blog_id === senderId
                                            ? senderName
                                            : receiverName
                                    }
                                    photo={
                                        message.from_blog_id === senderId
                                            ? senderPhoto
                                            : receiverPhoto
                                    }
                                    shape={
                                        message.from_blog_id === senderId
                                            ? senderShape
                                            : receiverShape
                                    }
                                    time={message.created_at}
                                    message={message.content}
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
    messagesEndRef: PropTypes.object.isRequired,
    hasMore: PropTypes.object.isRequired,
    msgs: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
    isPending: PropTypes.bool.isRequired
};
