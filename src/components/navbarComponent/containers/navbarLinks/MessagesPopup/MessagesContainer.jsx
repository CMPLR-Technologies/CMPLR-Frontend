import React, { useState, useEffect, useContext } from 'react';
import Messages from './Messages';
import SearchNewMessage from './SearchNewMessage';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ChatContext } from '../../../../../contexts/chatContext/ChatContext';

export default function MessagesContainer(props) {
    const [openNewMessageButton, setOpenNewMessageButton] = useState(false);
    // eslint-disable-next-line react/prop-types
    let { clickMessagePopup, mobile } = props;
    const clickNewMessageButton = () => {
        setOpenNewMessageButton(!openNewMessageButton);
    };
    let { loadChats, currBlog,currPopUpOpenChat } = useContext(ChatContext);
    useEffect(() => {
        loadChats();
    }, []);
    return (
        <>
            {/*header of message popup contains name and new message button */}
            {!(mobile && currPopUpOpenChat) && (
                <div className="popup-header">
                    {/*TODO MAKE IT BY USEr name */}
                    {/*TODO MAKE loading icon */}

                    {/*TODO implement icon back function */}
                    <span>
                        <NavLink to="/dashboard">
                            <i className="fas fa-angle-left"></i>
                        </NavLink>
                    </span>
                    <h3>{currBlog?.senderName}</h3>
                    {!openNewMessageButton ? (
                        <button onClick={clickNewMessageButton}>
                            new message
                        </button>
                    ) : (
                        <button
                            onClick={clickNewMessageButton}
                            className="never"
                        >
                            nevermind
                        </button>
                    )}
                    {/*TODO implement new message function */}
                    <span>
                        {!openNewMessageButton ? (
                            <span onClick={clickNewMessageButton}>
                                {' '}
                                <i className="fas fa-comment-dots"></i>
                            </span>
                        ) : (
                            <span
                                onClick={clickNewMessageButton}
                                //className="never"
                            >
                                <i className="fas fa-times"></i>
                            </span>
                        )}
                    </span>
                </div>
            )}

            {/*if not click on new message button then show the messages else show the search users*/}
            {!openNewMessageButton ? (
                <Messages
                    clickMessagePopup={clickMessagePopup}
                    mobile={mobile}
                />
            ) : (
                <SearchNewMessage clickMessagePopup={clickMessagePopup} />
            )}
        </>
    );
}
PropTypes.propTypes = {
    clickMessagePopup: PropTypes.func.isRequired,
    mobile: PropTypes.bool
};
