import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
export const ChatContext = createContext();
import { apiBaseUrl } from '../../config.json';
import { UserContext } from '../userContext/UserContext';
import Axios from 'axios';

export default function ChatContextProvider(props) {
    const { user } = useContext(UserContext);

    const [pageNumber, setPageNumber] = useState(1);

    const [currBlog, setCurrBlog] = useState(null);
    const [blogs, setBlogs] = useState(null);

    // for chats show in navbar
    const [loadingChats, setLoadingChats] = useState(false);
    const [errLoadingChat, setErrLoadingChat] = useState(null);
    const [chats, setChats] = useState(null); //chats in navbar messages dropDown

    //for the signle conversation
    /*const [msgs, setMsgs] = useState([]);
    const [loadingConversation, setLoadingConversation] = useState(false);
    const [errorLoadingConversation, setErrorLoadingConversation] =
        useState(null);
    const [hasMorePages, setHasMorePages] = useState(false);*/

    const [conversationMsg, setConversationMsg] = useState([]);
    const [currPopUpOpenChat, setCurrPopUpOpenChat] = useState(null);
    const [sideIconOpenChat, setSideIconOpenChat] = useState([]); //array contains chats side icons opened

    //this function load chats in navbavr dropdown list
    const loadChats = () => {
        // to DO load real chat by axios request,, Doing it!
        const abortCont = new AbortController();
        const config = { signal: abortCont.signal };
        if (user) {
            config['headers'] = {
                Authorization: `Bearer ${user.token}`,
                Accept: 'application/json'
            };
        }
        let blogId = 10;
        setLoadingChats(true);
        Axios.get(`${apiBaseUrl}/blog/messaging/${blogId}`, config)
            .then(res => {
                if (!res.error) {
                    setChats(res.data);
                    setLoadingChats(false);
                    setErrLoadingChat(null);
                } else {
                    throw Error(res.error);
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setLoadingChats(false);
                    setErrLoadingChat(err.message);
                }
            });
        //setChats(charArr);
        //setLoadingChats(false);
    };

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
        console.log(user);
        // if the current is the one i opened
        if (
            currPopUpOpenChat &&
            senderId === currPopUpOpenChat.senderId &&
            receiverId === currPopUpOpenChat.receiverId
        ) {
            return;
        }

         setSideIconOpenChat(
            sideIconOpenChat.filter(
                chat =>
                    chat.senderId !== senderId || chat.receiverId !== receiverId
            )
        );

        // if other chat opend close it first
        if (currPopUpOpenChat) {
            paritialCloseChatPopup();
        }

        // TO DO make the lastMsg seen
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
    };


    // this function close the chat popup when use click it x button
    const closeChatPopup = () => {
        setCurrPopUpOpenChat(null);
    };

    // this function pairtial close the chat popup when use click it > button, it will be in sideIcon
    const paritialCloseChatPopup = () => {
        // make 6 at most
        if (sideIconOpenChat.length === 6) {
            return;
            //sideIconOpenChat.pop();
        }
        setSideIconOpenChat([...sideIconOpenChat, currPopUpOpenChat]);
        closeChatPopup();
    };

    // send message
    const sendMessage = message => {
        const abortCont = new AbortController();
        const config = { signal: abortCont.signal };
        if (user) {
            config['headers'] = {
                Authorization: `Bearer ${user.token}`,
                Accept: 'application/json'
            };
        }
        Axios.post(
            `${apiBaseUrl}/messaging/conversation/${currPopUpOpenChat.senderId}/${currPopUpOpenChat.receiverId}`,
            {
                Content: message
            },
            config
        )
            .then(res => {
                if (!res.error) {
                    console.log('send message succfully!');
                    let newMsg = {
                        // eslint-disable-next-line camelcase
                        from_blog_id: currPopUpOpenChat.senderId,
                        // eslint-disable-next-line camelcase
                        to_blog_id: currPopUpOpenChat.receiverId,
                        content: message,
                        // eslint-disable-next-line camelcase
                        is_read: false,
                        // eslint-disable-next-line camelcase
                        created_at: new Date()
                    };
                    console.log(newMsg.created_at);
                    setConversationMsg([...conversationMsg, newMsg]);
                } else {
                    throw Error(res.error);
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.log('faild send message!');
                    console.log(err.message);
                }
            });
    };
    const deleteChat = () => {
        let { senderId, receiverId } = currPopUpOpenChat;
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
                    console.log('deleted chat succfully!');
                    setConversationMsg([]);
                    closeChatPopup();
                    // to do delete it form chats
                } else {
                    throw Error(res.error);
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.log('faild delete chat!');
                    console.log(err.message);
                }
            });
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

                deleteChat
            }}
        >
            {props.children}
        </ChatContext.Provider>
    );
}

ChatContextProvider.propTypes = {
    children: PropTypes.any.isRequired
};
