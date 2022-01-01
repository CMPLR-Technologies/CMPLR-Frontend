import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../config.json';
import Axios from 'axios';

export const ChatContext = createContext();
export default function ChatContextProvider(props) {
    const userR = JSON.parse(localStorage.getItem('user'));
    const user = userR;
    const [pageNumber, setPageNumber] = useState(1);

    let currBlogObject = null;
    if (user && user?.userData)
        currBlogObject = {
            senderName: user?.userData?.blog_name,
            senderId: user?.userData?.primary_blog_id,
            senderPhoto: user?.userData?.avatar,
            senderShape: user?.userData?.avatar_shape
        };
    const [currBlog, setCurrBlog] = useState(currBlogObject);
    const [blogs, setBlogs] = useState(null);

    // for chats show in navbar
    const [loadingChats, setLoadingChats] = useState(false);
    const [errLoadingChat, setErrLoadingChat] = useState(null);
    const [chats, setChats] = useState(null); //chats in navbar messages dropDown


    const [conversationMsg, setConversationMsg] = useState([]);
    const [currPopUpOpenChat, setCurrPopUpOpenChat] = useState(null);
    const [sideIconOpenChat, setSideIconOpenChat] = useState([]); //array contains chats side icons opened

    const setUserBlog = userData => {
        let currBlogObject = null;
        currBlogObject = {
            senderName: userData?.blog_name,
            senderId: userData?.primary_blog_id,
            senderPhoto: userData?.avatar,
            senderShape: userData?.avatar_shape
        };

        setCurrBlog(currBlogObject);
    };
    const getUnReadMsgsCount = setUnReadMsgs => {
        const abortCont = new AbortController();
        const config = { signal: abortCont.signal };
        if (user) {
            config['headers'] = {
                Authorization: `Bearer ${user?.token}`,
                Accept: 'application/json'
            };
        } else return;
        let count = 0;
        let blogId = currBlog?.senderId; 
        Axios.get(`${apiBaseUrl}/blog/messaging/${blogId}`, config)
            .then(res => {
                //for production use
                if (!res.error) {
                    setChats(res?.data);
                    for (let i = 0; i < res?.data?.length; i++) {
                        if (
                            blogId !== res?.data[i]?.from_blog_id &&
                            res?.data[i]?.is_read === false
                        ) {
                            count++;
                        }
                    }
                    setUnReadMsgs(count);
                } else {
                    throw Error(res?.error);
                }
            })
            .catch(() => {});
    };
    //this function load chats in navbavr dropdown list
    async function loadChats() {
        // to DO load real chat by axios request,, Doing it!
        const abortCont = new AbortController();
        const config = { signal: abortCont.signal };
        if (user) {
            config['headers'] = {
                Authorization: `Bearer ${user?.token}`,
                Accept: 'application/json'
            };
        }
        let blogId = currBlog?.senderId; 
        setLoadingChats(true);
        Axios.get(`${apiBaseUrl}/blog/messaging/${blogId}`, config)
            .then(res => {
                if (!res.error) {
                    setChats(res?.data);
                    setLoadingChats(false);
                    setErrLoadingChat(null);
                } else {
                    throw Error(res?.error);
                }
            })
            .catch(err => {
                if (err?.name !== 'AbortError') {
                    setLoadingChats(false);
                    setErrLoadingChat(err?.message);
                }
            });

    }

    // this function open the chat popup when use click it from the navbar drop down list
    const openChatPopup = (
        senderId,
        receiverId,
        senderPhoto,
        senderShape,
        receiverPhoto,
        receiverShape,
        senderName,
        receiverName
    ) => {
        // if the current is the one i opened

        if (
            currPopUpOpenChat &&
            senderId === currPopUpOpenChat.senderId &&
            receiverId === currPopUpOpenChat.receiverId
        ) {
            return;
        }
        setConversationMsg([]);

        // if other chat opend close it first
        paritialCloseChatPopup();
        setCurrPopUpOpenChat({
            senderId,
            receiverId,
            senderPhoto,
            senderShape,
            receiverPhoto,
            receiverShape,
            senderName,
            receiverName
        });
        let nSide = [];
        for (let i = 0; i < sideIconOpenChat?.length; i++) {
            if (
                !(
                    sideIconOpenChat[i]?.senderId === senderId &&
                    sideIconOpenChat[i]?.receiverId === receiverId
                )
            ) {
                nSide.push(sideIconOpenChat[i]);
            }
        }
        setSideIconOpenChat(nSide);
    };

    // this function close the chat popup when use click it x button
    const closeChatPopup = () => {
        setPageNumber(1);
        setConversationMsg([]);
        setCurrPopUpOpenChat(null);
    };

    // this function pairtial close the chat popup when use click it > button, it will be in sideIcon
    const paritialCloseChatPopup = () => {
        if (!currPopUpOpenChat) return;
        // make 6 at most

        if (sideIconOpenChat?.length === 6) {
            closeChatPopup();
            return;
        }
        let found = false;
        for (let i = 0; i < sideIconOpenChat?.length; i++) {
            if (
                sideIconOpenChat[i]?.senderId === currPopUpOpenChat?.senderId &&
                sideIconOpenChat[i]?.receiverId ===
                    currPopUpOpenChat?.receiverId
            ) {
                found = true;
            }
        }
        if (found === false) {
            if (!sideIconOpenChat || sideIconOpenChat?.length === 0) {
                let nSide = [];
                nSide.push(currPopUpOpenChat);
                setSideIconOpenChat(nSide);
            } else
                setSideIconOpenChat([...sideIconOpenChat, currPopUpOpenChat]);
        }
        closeChatPopup();
    };
    // send message
    const sendMessage = (message, senderId, receiverId) => {
        const abortCont = new AbortController();
        const config = { signal: abortCont.signal };
        if (user) {
            config['headers'] = {
                Authorization: `Bearer ${user.token}`,
                Accept: 'application/json'
            };
        }
        Axios.post(
            `${apiBaseUrl}/messaging/conversation/${senderId}/${receiverId}`,
            {
                Content: message
            },
            config
        )
            .then(res => {
                if (!res.error) {
                    let newMsg = {
                        // eslint-disable-next-line camelcase
                        from_blog_id: senderId,
                        // eslint-disable-next-line camelcase
                        to_blog_id: receiverId,
                        content: message,
                        // eslint-disable-next-line camelcase
                        is_read: false,
                        // eslint-disable-next-line camelcase
                        created_at: new Date()
                    };
                    //console.log(newMsg.created_at);
                    if (!conversationMsg || !conversationMsg?.length) {
                        let nArr=[];
                        nArr.push(newMsg);
                        setConversationMsg(nArr);
                    } else {
                        setConversationMsg([...conversationMsg, newMsg]);
                    }
                   /// console.log('msh', [...conversationMsg, newMsg]);
                } else {
                    throw Error(res.error);
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                   ;
                }
            });
    };
    const deleteChat = (senderId, receiverId) => {
        const abortCont = new AbortController();
        const config = { signal: abortCont.signal };
        if (user) {
            config['headers'] = {
                Authorization: `Bearer ${user.token}`,
                Accept: 'application/json'
            };
        }
        Axios.delete(
            `${apiBaseUrl}/messaging/conversation/${senderId}/${receiverId}`,
            config
        )
            .then(res => {
                if (!res.error) {
                    setConversationMsg([]);
                    closeChatPopup();
                    
                } else {
                    throw Error(res.error);
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    //
                }
            });
    };
    const clearToOpenNewChat = () => {
        if (currPopUpOpenChat) paritialCloseChatPopup();
        setConversationMsg([]);
        setPageNumber(1);
    };
    const clear = () => {
        setCurrBlog(null);
        if (currPopUpOpenChat) closeChatPopup();
        setChats(null);
        setErrLoadingChat(null);
        setConversationMsg([]);
        setCurrPopUpOpenChat(null);
        setSideIconOpenChat([]);
    };
    return (
        <ChatContext.Provider
            value={{
                currBlog,
                setCurrBlog,
                blogs,
                setBlogs,
                loadingChats,
                setLoadingChats,
                chats,
                setChats,
                currPopUpOpenChat,
                setCurrPopUpOpenChat,
                sideIconOpenChat,
                setSideIconOpenChat,
                openChatPopup,
                closeChatPopup,
                loadChats,
                paritialCloseChatPopup,
                sendMessage,
                setErrLoadingChat,
                errLoadingChat,
                pageNumber,
                setPageNumber,
                conversationMsg,
                setConversationMsg,
                deleteChat,
                clear,
                setUserBlog,
                getUnReadMsgsCount,
                clearToOpenNewChat
            }}
        >
            {props.children}
        </ChatContext.Provider>
    );
}

ChatContextProvider.propTypes = {
    children: PropTypes.any.isRequired
};
