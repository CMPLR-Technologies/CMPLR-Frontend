import React, { useContext } from 'react';
import MessageItem from './MessageItem';
import { ChatContext } from '../../../../../contexts/chatContext/ChatContext';
import PropTypes from 'prop-types';
import { LinearProgress } from '@mui/material';

export default function Messages(props) {
    let { chats, loadingChats, errLoadingChat, currBlog } =
        useContext(ChatContext);
    let BlogName = currBlog?.senderName;
    let BlogId = currBlog?.senderId;
    //  let BlogAvatar =
    //    'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png';
    // eslint-disable-next-line react/prop-types
    let { clickMessagePopup, mobile } = props;
    return (
        <div className="popup-messages">
            {errLoadingChat}
            {loadingChats ? (
                <LinearProgress />
            ) : chats && chats.length ? (
                chats.map((message, index) => (
                    <MessageItem
                        key={index}
                        lastOneSend={
                            message.from_blog_id === BlogId
                                ? BlogName
                                : message.blog_data.blog_name
                        }
                        sender={BlogName}
                        senderId={BlogId}
                        receiver={message.blog_data.blog_name}
                        receiverId={message.blog_data.blog_id}
                        message={message.content}
                        chat={true}
                        photo={message.blog_data.avatar}
                        shape={message.blog_data.avatar_shape}
                        chatId={index}
                        clickMessagePopup={clickMessagePopup}
                        mobile={mobile}
                        isRead={message.is_read}
                    />
                ))
            ) : (
                <div className="no-chat">
                    <div className="icon">
                        <i className="far fa-comment-dots"></i>
                    </div>
                    <div className="text">Talk to a Tumblr</div>
                </div>
            )}
        </div>
    );
}
PropTypes.propTypes = {
    clickMessagePopup: PropTypes.func.isRequired,
    mobile: PropTypes.bool
};
