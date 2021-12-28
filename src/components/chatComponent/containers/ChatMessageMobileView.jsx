import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ChatContext } from '../../../contexts/chatContext/chatContext';
import ChatMessages from './ChatMessages';
import ChatOption from './ChatOption';
import useInfiniteScrollingChat from '../../../hooks/useInfiniteScrollingChat';
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
    // get sender id ,reciver id form the url
    let { sender, receiver } = useParams();
    let senderId = sender;
    let receiverId = receiver;

    // import this functions from context
    let { sendMessage, pageNumber, setConversationMsg, conversationMsg } =
        useContext(ChatContext);
    // useInfite scroll chat to fetch the msgs
    const {
        error,
        data: msgs,
        isPending,
        hasMore,
        blogData,
        loadingFirstPage
    } = useInfiniteScrollingChat(
        `${apiBaseUrl}/messaging/conversation/${sender}/${receiver}?page=${pageNumber}`
    );
    // when the msgs update then update ConversationMsg
    useEffect(() => {
        setConversationMsg(msgs);
    }, [msgs]);

    // message input the sender must type it
    const [messageToSend, setMessageToSend] = useState('');
    useEffect(() => {
        setMessageToSend('');
    }, []);

    // scroll when any change from the conversationMsg
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [conversationMsg]);

    // on change the message input
    const onChange = e => {
        setMessageToSend(e.target.value);
    };

    // send message on submit
    const sendMessageTo = () => {
        if (messageToSend.length !== 0 && messageToSend.trim() !== '') {
            sendMessage(messageToSend, senderId, receiverId);
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

    // part of view more options
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
        <>
            {loadingFirstPage && (
                <div className="chat-mobileview">
                    <div className="chat-popup">
                        <div className="chat-popup-header">
                            {showOption && (
                                <ChatOption
                                    close={closeOption}
                                    name={blogData ? blogData.blog_name : ''}
                                    senderId={senderId}
                                    receiverId={receiverId}
                                />
                            )}
                            <NavLink to="/messaging">
                                <i className="fas fa-angle-left"></i>
                            </NavLink>
                            <div className="names">
                                <a href={'gaser'}>{'gaser'}</a>
                                {' + '}
                                <a href={blogData ? blogData.blog_name : ''}>
                                    {blogData ? blogData.blog_name : ''}
                                </a>
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
                            senderId={senderId}
                            receiverId={receiverId}
                            senderName={'gaser'}
                            receiverName={blogData ? blogData.blog_name : ''}
                            loadingFirstPage={loadingFirstPage}
                            receiverPhoto={blogData ? blogData.avatar : ''}
                            receiverShape={
                                blogData ? blogData.avatar_shape : ''
                            }
                            senderPhoto={
                                'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png'
                            }
                            senderShape={'circle'}
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
            )}
        </>
    );
}
