import React, { useState, useContext, useEffect } from 'react';
import MessageItemSearchRes from './MessageItemSearchRes';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../../../contexts/chatContext/chatContext';
import Axios from 'axios';
import { apiBaseUrl } from '../../../../../config.json';

/**
 * Navbar SearchNewMessage: includes the input field for search for blog to chat with
 * @function SearchNewMessage
 * @property {string} search - Input value state
 * @property {function} setSearch - Input value Setter state
 * @property {boolean} searchResLoading -loading 
 * @returns {Component} input field
 */
export default function SearchNewMessage(props) {
    const [search, setSearch] = useState('');
    /* let searchedUser = [
        { id: 1, receiver: 'twix3', shortParagrah: 'hi', chat: false },
        { id: 2, receiver: 'twix1', shortParagrah: 'hi', chat: false },
        { id: 3, receiver: 'twix2', shortParagrah: 'hi', chat: false }
    ];*/
    let { clickMessagePopup } = props;
    let [searchRes, setSearchRes] = useState([]);
    let [searchResLoading, setSearchResLoading] = useState(false);
    const onChange = e => {
        setSearch(e.target.value);
        //TO DO : send req to backend and get the users
    };
    useEffect(async () => {
        //TO DO : send req to backend and get the users
        if (search.length > 0 && search.trim() !== '') {
            try {
                setSearchResLoading(true);
                const res = await Axios.get(`${apiBaseUrl}/search/${search}`);
                setSearchRes(res.data.response);

                setSearchResLoading(false);
            } catch (error) {
                return null;
            }
        } else {
            setSearchRes([]);
        }
    }, [search]);
    let { currBlog } = useContext(ChatContext);
    let BlogName = currBlog?.senderName;
    let BlogId = currBlog?.senderId;
    return (
        <div className="popup-newmessage">
            <div className="popup-newmessage-header">
                <span>To: </span>
                <input
                    name="search"
                    placeholder=""
                    focus=""
                    type="search"
                    autoComplete="off"
                    value={search}
                    onChange={onChange}
                />
                {searchResLoading && (
                    <div className="loading">
                        <CircularProgress size={'25px'} />
                    </div>
                )}
            </div>
            {searchRes &&
                searchRes?.blogs?.map((message, index) => {
                    {
                        if (message.settings.blog_id !== BlogId)
                            return (
                                <MessageItemSearchRes
                                    key={index}
                                    receiver={message.blog_name}
                                    receiverId={message.settings.blog_id}
                                    shortParagrah={message.title}
                                    chat={message.chat}
                                    photo={message.settings.avatar}
                                    shape={message.settings.avatar_shape}
                                    clickMessagePopup={clickMessagePopup}
                                    sender={BlogName}
                                    senderId={BlogId}
                                />
                            );
                    }
                })}
        </div>
    );
}

SearchNewMessage.propTypes = {
    clickMessagePopup: PropTypes.func
};
