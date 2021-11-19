import React from 'react';
import MessageItem from './MessageItem';
export default function Messages() {
    const messages = [
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
    ];
    return (
        <div className="popup-messages">
            {messages.map(message => (
                <MessageItem
                    key={message.id}
                    sender={message.sender}
                    receiver={message.receiver}
                    message={message.message}
                    chat={message.chat}
                />
            ))}
        </div>
    );
}
