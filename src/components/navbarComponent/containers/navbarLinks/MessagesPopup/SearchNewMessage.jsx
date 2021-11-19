import React, { useState } from 'react';
import MessageItem from './MessageItem';

export default function SearchNewMessage() {
    const [search, setSearch] = useState('');
    let searchedUser = [
        { id: 1, receiver: 'twix3', shortParagrah: 'hi', chat: false },
        { id: 2, receiver: 'twix1', shortParagrah: 'hi', chat: false },
        { id: 3, receiver: 'twix2', shortParagrah: 'hi', chat: false }
    ];
    const onChange = e => {
        setSearch(e.target.value);
        //TO DO : send req to backend and get the users
    };
    return (
        <div className="popup-newmessage">
            <div className="popup-newmessage-header">
                <span>To: </span>
                <input
                    type="text"
                    name="search"
                    placeholder=""
                    value={search}
                    onChange={onChange}
                />
            </div>
            {searchedUser.map(message => (
                <MessageItem
                    key={message.id}
                    receiver={message.receiver}
                    shortParagrah={message.shortParagrah}
                    chat={message.chat}
                />
            ))}
        </div>
    );
};
