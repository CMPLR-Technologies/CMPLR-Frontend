import React, { useContext } from 'react';
import MessageItem from './MessageItem';
import { ChatContext } from '../../../../../contexts/chatContext/ChatContext';
import PropTypes from 'prop-types';

export default function Messages(props) {
    let { chats } = useContext(ChatContext);
    // eslint-disable-next-line react/prop-types
    let { clickMessagePopup, mobile } = props;
    /* const messages = [
        {
            id: 1,
            sender: 'gaser',
            receiver: 'twix123',
            message: 'hi',
            chat: true
        },
        {
            id: 2,
            sender: 'gaser1',
            receiver: 'twix123',
            message: 'hi',
            chat: true
        },
        {
            id: 3,
            sender: 'gaser2',
            receiver: 'twix123',
            message: 'hi',
            chat: true
        },
        {
            id: 4,
            sender: 'gaser3',
            receiver: 'twix123',
            message: 'hi',
            chat: true
        },
        {
            id: 5,
            sender: 'gaser3',
            receiver: 'twix123',
            message: 'hi',
            chat: true
        },
        {
            id: 6,
            sender: 'gaser3',
            receiver: 'twix123',
            message: 'hi',
            chat: true
        },
        {
            id: 7,
            sender: 'gaser3',
            receiver: 'twix123',
            message: 'hi',
            chat: true
        },
        {
            id: 8,
            sender: 'gaser3',
            receiver: 'twix123',
            message: 'hi',
            chat: true
        }
    ];*/
    return (
        <div className="popup-messages">
            {chats && chats.length ? (
                chats.map(message => (
                    <MessageItem
                        key={message.chatId}
                        sender={message.sender}
                        receiver={message.receiver}
                        message={message.lastMsg}
                        chat={true}
                        photo={message.receiverPhoto}
                        chatId={message.chatId}
                        clickMessagePopup={clickMessagePopup}
                        mobile={mobile}
                    />
                ))
            ) : (
                <div className="no-chat">
                    <div className="icon">
                        <i className="far fa-comment-dots"></i>
                    </div>
                    <div className="text">Talk to a Tumblr</div>
                </div>
            )}
        </div>
    );
}
PropTypes.propTypes = {
    clickMessagePopup: PropTypes.func.isRequired,
    mobile:PropTypes.bool
};
