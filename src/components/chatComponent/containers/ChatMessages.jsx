import React from 'react';
import ChatMessageItem from './ChatMessageItem';
export default function ChatMessages() {
    let senderName = 'gaser';
    let senderPhoto =
        'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png';
    let senderLink = '#';

    let receiverName = 'omda';
    let receiverPhoto =
        'https://assets.tumblr.com/images/default_avatar/pyramid_closed_64.png';
    let receiverLink = '#';

    let messages = [
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
            message: 'how are you how are you how are you how are you how are you '
        }
    ];
    return (
        <div className="chat-popup-chat">
            <div className="chat-popup-chat-header">
                <div className="img">
                    <img src={receiverPhoto} />
                </div>
                <div className="receiver-link">
                    <a href={receiverLink} className="main">
                        receiverName
                    </a>
                </div>
            </div>
            <div className="chat-popup-chat-messages">
                {messages.map(message => (
                    <ChatMessageItem
                        key={message.id}
                        name={message.type === 's' ? senderName : receiverName}
                        link={message.type === 's' ? senderLink : receiverLink}
                        photo={
                            message.type === 's' ? senderPhoto : receiverPhoto
                        }
                        message={message.message}
                    />
                ))}
            </div>
        </div>
    );
}
