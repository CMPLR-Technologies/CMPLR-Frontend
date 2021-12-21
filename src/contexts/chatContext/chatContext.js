import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const ChatContext = createContext();
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';

export default function ChatContextProvider(props) {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: msgs,
        isPending,
        hasMore
    } = useInfiniteScrolling(`${apiBaseUrl}/user/dashboard?page=${pageNumber}`);

    //dumey data
    let chatMessagesArr = [
        {
            id: 0,
            type: 's',
            message: 'hi'
        },
        {
            id: 1,
            type: 'r',
            message: 'hi hello man'
        },
        {
            id: 2,
            type: 'r',
            message: 'how are you'
        },
        {
            id: 3,
            type: 's',
            message:
                'how are you how are you how are you how are you how are you '
        }
    ];
    let charArr = [
        {
            chatId: 0,
            sender: 'gaser',
            senderLink: '#',
            senderPhoto:
                'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png',
            receiver: 'omda',
            receiverLink: '#',
            receiverPhoto:
                'https://assets.tumblr.com/images/default_avatar/pyramid_closed_64.png',
            chatMessage: chatMessagesArr,
            lastMsg:
                'how are you how are you how are you how are you how are you'
        },
        {
            chatId: 1,
            sender: 'ashraf',
            senderLink: '#',
            senderPhoto:
                'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png',
            receiver: 'joe',
            receiverLink: '#',
            receiverPhoto:
                'https://assets.tumblr.com/images/default_avatar/cone_closed_64.png',
            chatMessage: chatMessagesArr,
            lastMsg:
                'how are you how are you how are you how are you how are you'
        },
        {
            chatId: 2,
            sender: 'gaser12',
            senderLink: '#',
            senderPhoto:
                'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png',
            receiver: 'mahdy',
            receiverLink: '#',
            receiverPhoto:
                'https://64.media.tumblr.com/dbc619ed53b0b1f9da04189686cb10e7/e72ec0c8ebd4ace0-49/s64x64u_c1/07e3ab69e3d9c49b56066640b7f48284317eca4b.pnj',
            chatMessage: chatMessagesArr,
            lastMsg:
                'how are you how are you how are you how are you how are you'
        },
        {
            chatId: 3,
            sender: 'gaser13',
            senderLink: '#',
            senderPhoto:
                'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png',
            receiver: 'bedo',
            receiverLink: '#',
            receiverPhoto:
                'https://assets.tumblr.com/images/default_avatar/pyramid_closed_64.png',
            chatMessage: chatMessagesArr,
            lastMsg:
                'how are you how are you how are you how are you how are you'
        }
    ];

    const [currBlog, setCurrBlog] = useState(null);
    const [blogs, setBlogs] = useState(null);

    const [loadingChats, setLoadingChats] = useState(false);
    const [chats, setChats] = useState(null); //chats in navbar messages dropDown

    const [currPopUpOpenChat, setCurrPopUpOpenChat] = useState(null);
    const [sideIconOpenChat, setSideIconOpenChat] = useState([]); //array contains chats side icons opened

    //this function load chats in navbavr dropdown list
    const loadChats = () => {
        setLoadingChats(true);
        // to DO load real chat by axios request
        setChats(charArr);
        setLoadingChats(false);
    };

    // this function open the chat popup when use click it from the navbar drop down list
    const openChatPopup = chatId => {
        // if other chat opend close it first
        if (currPopUpOpenChat) {
            paritialCloseChatPopup();
        }
        setCurrPopUpOpenChat(charArr.find(chat => chat.chatId === chatId));
        setSideIconOpenChat(
            sideIconOpenChat.filter(chat => chat.chatId !== chatId)
        );
    };

    // this function close the chat popup when use click it x button
    const closeChatPopup = () => {
        setCurrPopUpOpenChat(null);
    };

    // this function pairtial close the chat popup when use click it > button, it will be in sideIcon
    const paritialCloseChatPopup = () => {
        // make 6 at most
        if (sideIconOpenChat.length === 6) {
            sideIconOpenChat.pop();
        }
        sideIconOpenChat.push(currPopUpOpenChat);
        closeChatPopup();
    };

    // send message
    const sendMessage = message => {
        let chatId = currPopUpOpenChat.chatId;
        let chatMessage = currPopUpOpenChat.chatMessage;
        let NewMessageId = 5;
        chatMessage.push({ id: NewMessageId, type: 's', message: message });
        let oldArrChat = chats;
        oldArrChat.filter(chat => chat.chatId !== chatId);
        let newCurrPopUpChat = {
            chatId: currPopUpOpenChat.chatId,
            sender: currPopUpOpenChat.sender,
            senderLink: currPopUpOpenChat.senderLink,
            senderPhoto: currPopUpOpenChat.senderPhoto,
            receiver: currPopUpOpenChat.receiver,
            receiverLink: currPopUpOpenChat.receiverLink,
            receiverPhoto: currPopUpOpenChat.receiverPhoto,
            chatMessage: chatMessage,
            lastMsg: message
        };
        oldArrChat.push(newCurrPopUpChat);
        setCurrPopUpOpenChat(newCurrPopUpChat);
        setChats(oldArrChat);
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

                pageNumber,
                setPageNumber,
                error,
                msgs,
                isPending,
                hasMore
            }}
        >
            {props.children}
        </ChatContext.Provider>
    );
}

ChatContextProvider.propTypes = {
    children: PropTypes.any.isRequired
};
