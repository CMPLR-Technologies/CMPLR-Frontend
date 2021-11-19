import React, { useState } from 'react';
import Messages from './Messages';
import SearchNewMessage from './SearchNewMessage';
const MessagesContainer = () => {
    const [openNewMessageButton, setOpenNewMessageButton] = useState(false);
    const clickNewMessageButton = () => {
        setOpenNewMessageButton(!openNewMessageButton);
    };
    return (
        <>
            {/*header of message popup contains name and new message button */}
            <div className="popup-header">
                {/*TODO MAKE IT BY USEr name */}
                {/*TODO MAKE loading icon */}

                {/*TODO implement icon back function */}
                <span>
                    <i className="fas fa-angle-left"></i>
                </span>
                <h3>gaser ashraf</h3>
                {!openNewMessageButton ? (
                    <button onClick={clickNewMessageButton}>new message</button>
                ) : (
                    <button onClick={clickNewMessageButton} className="never">
                        nevermind
                    </button>
                )}
                {/*TODO implement new message function */}
                <span>
                    <i className="fas fa-comment-dots"></i>
                </span>
            </div>

            {/*if not click on new message button then show the messages else show the search users*/}
            {!openNewMessageButton ? <Messages /> : <SearchNewMessage />}
        </>
    );
};

export default MessagesContainer;
