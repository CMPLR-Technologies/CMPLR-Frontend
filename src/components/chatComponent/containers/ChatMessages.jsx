import React, { useContext, useCallback, useRef } from 'react';
import ChatMessageItem from './ChatMessageItem';
import { ChatContext } from '../../../contexts/chatContext/chatContext';
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
    let { setPageNumber } = useContext(ChatContext);
    let {
        senderId,
        senderPhoto,
        senderShape,
        senderName,
        receiverId,
        receiverPhoto,
        receiverShape,
        receiverName,
        loadingFirstPage,
        msgs,
        isPending,
        error,
        hasMore,
        //  blogData,
        messagesEndRef10,
        messagesEndRef
    } = props;
    //console.log(props);
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
    /*
    let { senderId, senderPhoto, senderShape, senderName } =
        currPopUpOpenChat || {};

    let receiverName = null;
    let receiverPhoto = null;
    let receiverShape = null;
    if (currPopUpOpenChat.receiverName) {
        receiverName = currPopUpOpenChat.receiverName;
        receiverPhoto = currPopUpOpenChat.receiverPhoto;
        receiverShape = currPopUpOpenChat.receiverShape;
    } else {
        receiverName = blogData.blog_name;
        receiverPhoto = blogData.avatar;
        receiverShape = blogData.avatar_shape;
    }
    let receiverId = null;
    // eslint-disable-next-line react/prop-types
    if (props.receiverId) receiverId = props.receiverId;
    else receiverId = currPopUpOpenChat.receiverId;*/

    return (
        <div className="chat-popup-chat">
            {!hasMore && loadingFirstPage && (
                <div className="chat-popup-chat-header">
                    <div className="img">
                        <img src={receiverPhoto} />
                    </div>
                    <div className="receiver-link">
                        <a href={`blog/view/${receiverName}/${receiverId}/posts`} className="main">
                            {receiverName}
                        </a>
                    </div>
                </div>
            )}

            <div className="chat-popup-chat-messages">
                {error && (
                    <div className="no-data-error">{"Couldn't load"}</div>
                )}
                {isPending && <LinearProgress />}

                {msgs?.map((message, index) => {
                    if (index === 0) {
                        return (
                            <div ref={lastPostElementRef} key={index}>
                                <ChatMessageItem
                                    name={
                                        message?.from_blog_id === senderId
                                            ? senderName
                                            : receiverName
                                    }
                                    link={
                                        message?.from_blog_id === senderId
                                            ? senderName
                                            : receiverName
                                    }
                                    photo={
                                        message?.from_blog_id === senderId
                                            ? senderPhoto
                                            : receiverPhoto
                                    }
                                    shape={
                                        message?.from_blog_id === senderId
                                            ? senderShape
                                            : receiverShape
                                    }
                                    time={message?.created_at}
                                    message={message?.content}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <>
                                {index === 9 && (
                                    <div ref={messagesEndRef10}></div>
                                )}
                                <ChatMessageItem
                                    name={
                                        message?.from_blog_id === senderId
                                            ? senderName
                                            : receiverName
                                    }
                                    link={
                                        message?.from_blog_id === senderId
                                            ? senderName
                                            : receiverName
                                    }
                                    photo={
                                        message?.from_blog_id === senderId
                                            ? senderPhoto
                                            : receiverPhoto
                                    }
                                    shape={
                                        message?.from_blog_id === senderId
                                            ? senderShape
                                            : receiverShape
                                    }
                                    time={message?.created_at}
                                    message={message?.content}
                                />
                            </>
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
    messagesEndRef10: PropTypes.object.isRequired,
    hasMore: PropTypes.object.isRequired,
    msgs: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
    isPending: PropTypes.bool.isRequired,
    blogData: PropTypes.object.isRequired,
    senderId: PropTypes.string.isRequired,
    receiverId: PropTypes.string.isRequired,
    receiverName: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    receiverPhoto: PropTypes.string.isRequired,
    receiverShape: PropTypes.string.isRequired,
    senderPhoto: PropTypes.string.isRequired,
    senderShape: PropTypes.string.isRequired,
    loadingFirstPage: PropTypes.bool.isRequired
};
