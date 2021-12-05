import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const ChatContext = createContext();

export default function ChatContextProvider(props) {
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
            chatMessage: chatMessagesArr
        },
        {
            chatId: 1,
            sender: 'gaser',
            senderLink: '#',
            senderPhoto:
                'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png',
            receiver: 'omda',
            receiverLink: '#',
            receiverPhoto:
                'https://assets.tumblr.com/images/default_avatar/pyramid_closed_64.png',
            chatMessage: chatMessagesArr
        }
    ];
    const [currBlog, setCurrBlog] = useState(null);
    const [blogs, setBlogs] = useState(null);
    const [chats, setChats] = useState(null); //chats in navbar messages dropDown

    const [currPopUpOpenChat, setCurrPopUpOpenChat] = useState(null);
    const [sideIconOpenChat, setSideIconOpenChat] = useState([]); //array contains chats side icons opened

    const openChatPopup = chatId => {
        setCurrPopUpOpenChat(charArr.find(chat => chat.chatId === chatId));
    };
    const closeChatPopup = () => {
        setCurrPopUpOpenChat(null);
    };
    return (
        <ChatContext.Provider
            value={{
                currBlog,
                setCurrBlog,
                blogs,
                setBlogs,
                chats,
                setChats,
                currPopUpOpenChat,
                setCurrPopUpOpenChat,
                sideIconOpenChat,
                setSideIconOpenChat,
                openChatPopup,
                closeChatPopup
            }}
        >
            {props.children}
        </ChatContext.Provider>
    );
}

ChatContextProvider.propTypes = {
    children: PropTypes.any.isRequired
};
