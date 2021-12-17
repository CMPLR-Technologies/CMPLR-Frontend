import React, { useState,useContext } from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Link } from 'react-router-dom';
import AuthBtn from '../../partials/AuthBtn';
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
    const theme = useContext(ThemeContext)[0];
    let name = props.name;
    let close = props.close;
    const [isOpenDeleteModel, setisOpenDeleteModel] = useState(false);
    const openDeleteModel = () => {
        setisOpenDeleteModel(true);
    };
    const closeDeleteModel = () => {
        setisOpenDeleteModel(false);
    };
    const closeOptions = () => {
        if (!isOpenDeleteModel) close();
    };
    const deleteConversation = () => {};
    return (
        <>
            {' '}
            {isOpenDeleteModel && (
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
                    <li>Block {name}</li>
                </ul>
            </ClickAwayListener>
        </>
    );
}
ChatOption.propTypes = {
    name: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
};
