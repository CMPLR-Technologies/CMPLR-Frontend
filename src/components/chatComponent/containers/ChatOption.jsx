import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Link } from 'react-router-dom';
import AuthBtn from '../../partials/AuthBtn';
import { ChatContext } from '../../../contexts/chatContext/ChatContext';

import {
    ThemeContext,
    themes
} from '../../../contexts/themeContext/ThemeContext';
/**
 * ChatOption Component
 * @function ChatOption
 * @description this is the Component ChatOption section which a dropdown list have a few options
 * @property {string} name - name of blog sender
 * @property {fuction} close - function to close the ChatOption dropdown list
 * @returns {Component} list of option
 */
export default function ChatOption(props) {
    let { deleteChat } = useContext(ChatContext);
    const theme = useContext(ThemeContext)[0];
    let name = props.name; //name of the chat reciver
    let close = props.close; //function to close the option
    let myBlog = props.myBlog; //curr blog i open
    let { senderId, receiverId } = props;
    const [isOpenDeleteModel, setisOpenDeleteModel] = useState(false);
    const [isOpenBlockModel, setisOpenBlockModel] = useState(false);
    //open delete model popup
    const openDeleteModel = () => {
        setisOpenDeleteModel(true);
    };
    //close delete model popup
    const closeDeleteModel = () => {
        setisOpenDeleteModel(false);
    };
    //open block model popup
    const openBlockModel = () => {
        setisOpenBlockModel(true);
    };
    //close block model popup
    const closeBlockModel = () => {
        setisOpenBlockModel(false);
    };
    //close option
    const closeOptions = () => {
        if (!isOpenDeleteModel) close();
    };
    const blockUser = () => {};
    const deleteConversation = () => {
        deleteChat(senderId, receiverId);
    };
    return (
        <>
            {' '}
            {isOpenDeleteModel ? (
                <div className="option-model" messageHeading="">
                    <div className="option-model-text">
                        Permanently delete this conversation?
                    </div>
                    <div className="option-model-btns">
                        <AuthBtn
                            key="1"
                            color={`rgba(${themes[theme].whiteOnDark} ,.65)`}
                            text="Nevermind"
                            handleClick={closeDeleteModel}
                        />{' '}
                        <AuthBtn
                            key="2"
                            color={`rgba(${themes[theme].accent} ,.65)`}
                            text="Delete"
                            handleClick={deleteConversation}
                        />{' '}
                    </div>
                </div>
            ) : isOpenBlockModel ? (
                <div className="option-model" messageHeading="">
                    <div className="option-model-text">
                        <div>
                            Are you sure you want to block {name} from
                            {myBlog}?
                        </div>
                        <div>
                            {`They won't be able to follow ${myBlog}, send ${myBlog}
                            messages, see ${myBlog} in search results, or
                            interact with any of ${myBlog}'s posts.`}
                        </div>
                    </div>
                    <div className="option-model-btns">
                        <AuthBtn
                            key="1"
                            color={`rgba(${themes[theme].whiteOnDark} ,.65)`}
                            text="Nevermind"
                            handleClick={closeBlockModel}
                        />{' '}
                        <AuthBtn
                            key="2"
                            color={`rgba(${themes[theme].accent} ,.65)`}
                            text="Block"
                            handleClick={blockUser}
                        />{' '}
                    </div>
                </div>
            ) : (
                ''
            )}
            <ClickAwayListener onClickAway={closeOptions}>
                <ul className="chat-popup-header-option">
                    <Link to="/settings/dashboard">
                        <li>
                            <span>Sound setting</span>
                            <i className="fas fa-angle-right"></i>
                        </li>
                    </Link>
                    <li onClick={openDeleteModel}>Delete conversation</li>
                    <li onClick={openBlockModel}>Block {name}</li>
                </ul>
            </ClickAwayListener>
        </>
    );
}
ChatOption.propTypes = {
    name: PropTypes.string.isRequired,
    myBlog: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
    senderId: PropTypes.string.isRequired,
    receiverId: PropTypes.string.isRequired
};
