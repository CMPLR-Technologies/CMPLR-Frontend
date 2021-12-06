import React, { useContext } from 'react';
import { ChatContext } from '../../contexts/chatContext/ChatContext';

import ChatPopUp from './containers/ChatPopUp';
import ChatSideIcons from './containers/ChatSideIcons';
export default function View() {
    let { currPopUpOpenChat } = useContext(ChatContext);

    return (
        <div className='chat-container'>
            {currPopUpOpenChat && (
                <ChatPopUp
                    sender="gaser"
                    senderLink="#"
                    receiver="omda"
                    receiverLink="#"
                />
            )}
            <ChatSideIcons />
        </div>
    );
}
