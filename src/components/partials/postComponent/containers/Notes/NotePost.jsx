import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReblogReact from './ReblogReact.svg';
import LoveReact from './LoveReact.svg';
import CommentReact from './CommentReact.svg';
import { UserContext } from '../../../../../contexts/userContext/UserContext';

NotePost.propTypes = {
    note: PropTypes.object.isRequired,
    setIsModalOpen: PropTypes.func,
    setNotesView: PropTypes.func
};
export default function NotePost(props) {
    const {
        type: type,
        blog_name: blogName,
        blog_url: blogUrl,
        reblog_parent_blog_name: reblogParentBlogName,
        reblog_parent_blog_url: reblogParentBlogUrl,
        avatar: avatar,
        content: content
        // followed: followed,
        // post_id: postId,
    } = props.note;

    const { setIsModalOpen, setNotesView } = props;

    const [isOptionListOpen, setIsOptionListOpen] = useState(false);
    const { user } = useContext(UserContext);

    return (
        <>
            <div className="relative">
                <div className="notes-summary-avatars-react">
                    <div className="noter-avatar">
                        <img
                            className="noter-avatar-img"
                            src={avatar}
                            sizes="24px"
                            alt="Avatar"
                            loading="eager"
                        />
                    </div>
                    <div className="avatar-react">
                        {type === 'reblog' ? (
                            <ReblogReact />
                        ) : type === 'love' ? (
                            <LoveReact />
                        ) : (
                            <CommentReact />
                        )}
                    </div>
                </div>
                <div className="note-content">
                    <div className="note-heading">
                        <div className="note-heading-flex">
                            <strong>
                                <Link
                                    to={blogUrl}
                                    target="_blank"
                                    role="link"
                                    className="note-author"
                                >
                                    {blogName}
                                </Link>
                                <div className="reblog-sign">
                                    <span>
                                        <svg
                                            role="img"
                                            viewBox="0 0 12.3 13.7"
                                            width="14"
                                            height="14"
                                            className="reblog-sign-span"
                                        >
                                            <path d="M9.2.2C8.7-.2 8 .2 8 .8v1.1H3.1c-2 0-3.1 1-3.1 2.6v1.9c0 .5.4.9.9.9.1 0 .2 0 .3-.1.3-.1.6-.5.6-.8V5.2c0-1.4.3-1.5 1.3-1.5H8v1.1c0 .6.7 1 1.2.6l3.1-2.6L9.2.2zM12 7.4c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.2c0 1.4-.3 1.5-1.3 1.5H4.3V9c0-.6-.7-.9-1.2-.5L0 11l3.1 2.6c.5.4 1.2.1 1.2-.5v-1.2h4.6c2 0 3.1-1 3.1-2.6V7.4z"></path>
                                        </svg>
                                    </span>
                                    <Link
                                        to={reblogParentBlogUrl}
                                        target="_blank"
                                        role="link"
                                        className="reblogger-name"
                                    >
                                        {reblogParentBlogName}
                                    </Link>
                                </div>
                            </strong>

                            <div className="option-list-cont">
                                <button
                                    onClick={() =>
                                        setIsOptionListOpen(!isOptionListOpen)
                                    }
                                    className="btn note-option-btn"
                                >
                                    <svg
                                        viewBox="0 0 17.5 3.9"
                                        width="18"
                                        height="10"
                                    >
                                        <path d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9"></path>
                                    </svg>
                                </button>
                                {isOptionListOpen && (
                                    <div className="option-list">
                                        {user.blogName !== blogName && (
                                            <>
                                                <div className="opt-btn report-btn">
                                                    Report
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        setNotesView(false);
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="opt-btn block-btn"
                                                >
                                                    Block
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        setIsOptionListOpen(
                                                            false
                                                        );
                                                    }}
                                                    className="opt-btn close-btn"
                                                >
                                                    Close
                                                </div>
                                            </>
                                        )}
                                        {/**Post's author is logged user */}
                                        {user.blogName === blogName && (
                                            <>
                                                {' '}
                                                <div className="opt-btn pin-btn block-btn">
                                                    Delete Reply
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        setIsOptionListOpen(
                                                            false
                                                        );
                                                    }}
                                                    className="opt-btn close-btn"
                                                >
                                                    Close
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="note-body">{content}</div>
                </div>
            </div>
        </>
    );
}
