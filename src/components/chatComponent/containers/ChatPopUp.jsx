import React, { useState, useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../../../contexts/chatContext/chatContext';
import ChatMessages from './ChatMessages';
import ChatOption from './ChatOption';
import useInfiniteScrollingChat from '../../../hooks/useInfinteScrollingChat';
import { apiBaseUrl } from '../../../config.json';
import Pusher from 'pusher-js';

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
        conversationMsg,
        currBlog
    } = useContext(ChatContext);

    let {
        senderId,
        receiverId,
        senderName,
        receiverName,
        receiverPhoto,
        receiverShape
    } = currPopUpOpenChat || {};
    //let { fromId, toId } = props;
    const {
        error,
        data: msgs,
        isPending,
        hasMore,
        blogData,
        loadingFirstPage
    } = useInfiniteScrollingChat(
        `${apiBaseUrl}/messaging/conversation/${senderId}/${receiverId}?page=${pageNumber}`
    );
    useEffect(() => {
        setConversationMsg(msgs);
        console.log(msgs);
        console.log(blogData);
    }, [msgs]);
    /* useEffect(() => {
        //setConversationMsg(msgs);
        console.log(blogData);
    }, [blogData]);*/

    // the part for scorll down when you send/receive message

    //message you type it
    const [messageToSend, setMessageToSend] = useState('');
    useEffect(() => {
        setMessageToSend('');
    }, []);

    // scroll when any change from the conversationMsg
    const messagesEndRef = useRef(null);
    const messagesEndRef10 = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef?.current?.scrollIntoView({
            behavior: 'auto',
            block: 'end',
            inline: 'nearest'
        });
    };
    const scrollToBottom10 = () => {
        messagesEndRef10?.current?.scrollIntoView({
            behavior: 'auto',
            block: 'end',
            inline: 'nearest'
        });
    };
    // const scrollToBottom = useScrollToBottom();
    useEffect(() => {
        scrollToBottom10();
    }, [conversationMsg[0]]);
    useEffect(() => {
        //  scrollToBottom();
        scrollToBottom();
    }, [conversationMsg[conversationMsg.length - 1]]);

    const onChange = e => {
        setMessageToSend(e.target.value);
    };

    // send message when click >
    const sendMessageTo = () => {
        if (isPending) return;
        if (messageToSend.length !== 0 && messageToSend.trim() !== '') {
            sendMessage(messageToSend, senderId, receiverId);
            setMessageToSend('');
        }
    };

    const onEnterPress = e => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            sendMessageTo();
        }
    };

    // part of view more options
    const [showOption, setShowOption] = useState(false);
    const toggleOption = () => {
        setShowOption(!showOption);
    };
    const openOption = () => {
        if (!showOption) setShowOption(true);
    };
    const close = () => {
        closeChatPopup();
    };
    const partialClose = () => {
        paritialCloseChatPopup();
    };

    //pusher work
    useEffect(() => {
        //const PUSHER_APP_ID = 1315145;
        const PUSHER_APP_KEY = 'fda8bb30758c845460d8';
        //const PUSHER_APP_SECRET = '57f7486c5a4270ce92d8';
        const PUSHER_APP_CLUSTER = 'eu';
        Pusher.logToConsole = true;
        const pusher = new Pusher(PUSHER_APP_KEY, {
            cluster: PUSHER_APP_CLUSTER,
            authEndpoint:
                'http://6ef0-156-223-164-236.ngrok.io/api/broadcasting/auth',
            auth: {
                headers: {
                    'X-CSRF-TOKEN': JSON.parse(localStorage.getItem('user'))
                        ?.token
                }
            }
        });
        //private-chat-10
        let keyC = 'chat-' + currPopUpOpenChat.receiverId;
        const channel = pusher.subscribe(keyC);

        // eslint-disable-next-line no-useless-escape
        channel.bind('App\\Events\\MessageSent', data => {
            console.log(data);
            let newMsg = {
                // eslint-disable-next-line camelcase
                from_blog_id: data?.sender_id,
                // eslint-disable-next-line camelcase
                to_blog_id: data?.rec_id,
                content: data?.message?.content,
                // eslint-disable-next-line camelcase
                is_read: false,
                // eslint-disable-next-line camelcase
                created_at: new Date()
            };
            if (conversationMsg) {
                setConversationMsg(prevData => {
                    return [...prevData, newMsg];
                });
            } else {
                let arr = [];
                arr.push(newMsg);
                setConversationMsg(arr);
            }
            //console.log(newMsg.created_at);
            //setConversationMsg([...conversationMsg, newMsg]);
        });
    }, []);
    /* useEffect(()=>{
        console.log(conversationMsg);
    },[conversationMsg]);*/
    return (
        <div
            className={`chat-popup-container ${
                sideIconOpenChat && sideIconOpenChat.length ? 'side' : ''
            }`}
        >
            <div className="chat-popup">
                {/*TO DO hide the header untill no more!!!!!!!!!! */}

                <div className="chat-popup-header">
                    {showOption && (
                        <ChatOption
                            close={toggleOption}
                            name={receiverName}
                            senderId={senderId}
                            receiverId={receiverId}
                        />
                    )}

                    <div className="names">
                        <a href={senderName}>{senderName}</a>
                        {' + '}
                        <a href={receiverName}>{receiverName}</a>
                    </div>
                    <div className="btns">
                        <button onClick={openOption}>
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                        <button className="parClose" onClick={partialClose}>
                            <i className="fas fa-compress-alt"></i>
                        </button>
                        <button onClick={close}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <ChatMessages
                    messagesEndRef={messagesEndRef}
                    messagesEndRef10={messagesEndRef10}
                    msgs={conversationMsg}
                    isPending={isPending}
                    error={error}
                    hasMore={hasMore}
                    // blogData={blogData}
                    senderId={senderId}
                    receiverId={receiverId}
                    senderName={senderName}
                    receiverName={receiverName}
                    loadingFirstPage={loadingFirstPage}
                    receiverPhoto={receiverPhoto}
                    receiverShape={receiverShape}
                    senderPhoto={currBlog?.senderPhoto}
                    senderShape={'circle'}
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
