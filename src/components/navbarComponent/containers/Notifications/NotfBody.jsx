import React, { useState } from 'react';
import ReblogReact from '../../../partials/postComponent/containers/Notes/ReblogReact.svg';
import LoveReact from '../../../partials/postComponent/containers/Notes/LoveReact.svg';
import CommentReact from '../../../partials/postComponent/containers/Notes/CommentReact.svg';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import AskReact from './notificationsTypesSVG/AskReact';
import FollowReact from './notificationsTypesSVG/FollowReact';
import HiIcon from './notificationsTypesSVG/HiIcon';
import PostIcon from './notificationsTypesSVG/PostIcon';
import AskIcon from './notificationsTypesSVG/AskIcon';
import { followAccount } from '../../../followingComponent/Service';
NotfBody.propTypes = {
    notf: PropTypes.object
};

export default function NotfBody(props) {
    const { notf } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    const [following, setFollowing] = useState(false);
    return (
        <div className="notf-body">
            <div className="relative">
                <div className="notes-summary-avatars-react">
                    <div className="noter-avatar">
                        <img
                            className="noter-avatar-img"
                            src={notf['from_blog_avatar']}
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
                        {notf['type'] === 'reblog' ? (
                            <ReblogReact />
                        ) : notf['type'] === 'like' ? (
                            <LoveReact />
                        ) : notf['type'] === 'reply' ||
                          notf['type'] === 'answer' ? (
                            <CommentReact />
                        ) : notf['type'] === 'ask' ? (
                            <AskReact />
                        ) : notf['type'] === 'follow' ? (
                            <FollowReact />
                        ) : null}
                    </div>
                </div>
                <div className="notf-content">
                    <strong>
                        {notf['from_blog_name']}{' '}
                        <span style={{ marginRight: '5px' }}> </span>
                    </strong>
                    <span
                        className="post-snap"
                        dangerouslySetInnerHTML={{
                            __html: `${
                                notf['type'] === 'reply'
                                    ? ' replied to your post: '
                                    : notf['type'] === 'like'
                                    ? ' loved your post: '
                                    : notf['type'] === 'reblog'
                                    ? ' rebloged your post: '
                                    : notf['type'] === 'ask'
                                    ? 'asked'
                                    : notf['type'] === 'answer'
                                    ? 'answerd your ask: '
                                    : notf['type'] === 'follow'
                                    ? 'started following your blog'
                                    : null
                            }`
                        }}
                    ></span>
                    {notf['post_ask_answer_content'] ? (
                        <span
                            className="post-ask-answer-content"
                            style={{ marginLeft: '5px' }}
                            dangerouslySetInnerHTML={{
                                __html: `${notf['post_ask_answer_content']}`
                            }}
                        ></span>
                    ) : null}
                </div>
                <div className="type">
                    {notf['type'] === 'like' ? (
                        <Link className="post-link" to="*">
                            <PostIcon />
                        </Link>
                    ) : notf['type'] === 'ask' ? (
                        <Link className="post-link" to="*">
                            <AskIcon />
                        </Link>
                    ) : notf['type'] === 'follow' ? (
                        <button
                            onClick={() => {
                                followAccount(
                                    user?.token,
                                    notf['from_blog_name'],
                                    setFollowing
                                );
                            }}
                            className="follow-btn btn"
                        >
                            {following ? '' : 'Follow'}
                        </button>
                    ) : (
                        <Link className="hi-link" to="*">
                            <HiIcon />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
