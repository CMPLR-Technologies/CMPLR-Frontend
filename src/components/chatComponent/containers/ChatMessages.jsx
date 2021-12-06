import React, { useContext } from 'react';
import ChatMessageItem from './ChatMessageItem';
import { ChatContext } from '../../../contexts/chatContext/ChatContext';
import PropTypes from 'prop-types';

export default function ChatMessages(props) {
    let { currPopUpOpenChat } = useContext(ChatContext);
    let { messagesEndRef } = props;
    let {
        sender = 'gaser',
        senderPhoto = 'gaser',
        senderLink = '#',
        receiver = 'omda',
        receiverPhoto = 'gaser',
        receiverLink = '#',
        chatMessage = 'bla'
    } = currPopUpOpenChat || {};

    return (
        <div className="chat-popup-chat">
            <div className="chat-popup-chat-header">
                <div className="img">
                    <img src={receiverPhoto} />
                </div>
                <div className="receiver-link">
                    <a href={receiverLink} className="main">
                        {receiver}
                    </a>
                </div>
            </div>
            <div className="chat-popup-chat-messages">
                {currPopUpOpenChat &&
                    chatMessage.map(message => (
                        <ChatMessageItem
                            key={message.id}
                            name={message.type === 's' ? sender : receiver}
                            link={
                                message.type === 's' ? senderLink : receiverLink
                            }
                            photo={
                                message.type === 's'
                                    ? senderPhoto
                                    : receiverPhoto
                            }
                            message={message.message}
                        />
                    ))}
            </div>
            <div ref={messagesEndRef}></div>
        </div>
    );
}
ChatMessages.propTypes = {
    messagesEndRef: PropTypes.object.isRequired
};
