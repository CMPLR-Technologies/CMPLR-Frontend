import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReblogReact from './ReblogReact.svg';
import LoveReact from './LoveReact.svg';
import ReblogSign from './ReblogSign.svg';
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
        content: content,
        blog_id: blogId
    } = props.note;
    const { setIsModalOpen, setNotesView } = props;

    const [isOptionListOpen, setIsOptionListOpen] = useState(false);
    const { user } = useContext(UserContext);
    return (
        <>
            <div
                data-testid={`relative-note-container-ts`}
                className="relative"
            >
                <div className="notes-summary-avatars-react">
                    <div className="noter-avatar">
                        <img
                            className="noter-avatar-img"
                            src={avatar}
                            sizes="24px"
                            alt="Avatar"
                            loading="eager"
                            data-testid={`noter-avatar-img-ts`}
                        />
                    </div>
                    <div
                        data-testid={`avatar-react-ts`}
                        className="avatar-react"
                    >
                        {type === 'reblog' ? (
                            <ReblogReact />
                        ) : type === 'like' ? (
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
                                    to={`/blog/view/${blogName}/${blogId}/posts`}
                                    target="_blank"
                                    role="link"
                                    className="note-author"
                                    data-testid={`blog-name-note-content-ts`}
                                >
                                    {blogName}
                                </Link>
                                <div className="reblog-sign">
                                    <span>
                                        <ReblogSign />
                                    </span>
                                    <Link
                                        to={'/reblogParentBlogUrl'}
                                        target="_blank"
                                        role="link"
                                        className="reblogger-name"
                                        data-testid={`reblog-parent-name-note-content-ts`}
                                    >
                                        {reblogParentBlogName}
                                    </Link>
                                </div>
                            </strong>

                            <div className="option-list-cont">
                                {/* <button
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
                                </button> */}
                                {isOptionListOpen && (
                                    <div className="option-list">
                                        {user.blogName !== blogName && (
                                            <>
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
                                                {/*TODO delete note*/}
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
                    <div className="note-body" data-testid="note-body-ts" >{content}</div>
                </div>
            </div>
        </>
    );
}
