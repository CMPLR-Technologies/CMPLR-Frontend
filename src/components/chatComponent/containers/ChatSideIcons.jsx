import React, { useContext } from 'react';
import { ChatContext } from '../../../contexts/chatContext/ChatContext';
import ChatSideIconItem from './ChatSideIconItem';
/**
 * chatSideIcons Component
 * @function chatSideIcons
 * @description this is the main Component ChatSideIconItem section a messages sideicon
 * @property {array} sideIconOpenChat - array of sideIconOpenChat
 * @returns {Component} array of message item
 */
export default function chatSideIcons() {
    let { sideIconOpenChat } = useContext(ChatContext);

    return (
        <div className="chat-side-icons">
            {sideIconOpenChat !== undefined &&
                sideIconOpenChat?.map((chatIcon, index) => (
                    <ChatSideIconItem
                        key={index}
                        senderId={chatIcon.senderId}
                        receiverId={chatIcon.receiverId}
                        senderPhoto={chatIcon.senderPhoto}
                        senderShape={chatIcon.senderShape}
                        receiverPhoto={chatIcon.receiverPhoto}
                        receiverShape={chatIcon.receiverShape}
                        senderName={chatIcon.senderName}
                        receiverName={chatIcon.receiverName}
                    />
                ))}
        </div>
    );
}
