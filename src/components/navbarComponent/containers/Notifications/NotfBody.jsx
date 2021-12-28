import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { apiBaseUrl } from '../../../../config.json';
NotfBody.propTypes = {
    notf: PropTypes.object
};

export default function NotfBody(props) {
    const { notf, setUnseenNotf } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    const [following, setFollowing] = useState(
        notf ? notf['do_you_follow'] : false
    );
    const handleClickNotificationBody = id => {
        axios({
            method: 'PUT',
            url: `${apiBaseUrl}/notifications/${id}/see`,
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                Authorization: `Bearer ${user?.token}`
            }
        })
            .then(() => {
                axios({
                    method: 'get',
                    url: `${apiBaseUrl}/notifications/unseens`,
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                        Authorization: `Bearer ${user?.token}`
                    }
                })
                    .then(res => {
                        setUnseenNotf(res?.data?.response);
                    })
                    .catch(() => {});
            })
            .catch(() => {});
    };
    useEffect(() => {
        setFollowing(notf ? notf['do_you_follow'] : false);
    }, [notf]);
    return (
        <div
            onClick={() => handleClickNotificationBody(notf['notification_id'])}
            className="notf-body"
        >
            <div className="relative">
                <div className="notes-summary-avatars-react">
                    <div className="noter-avatar">
                        <img
                            className="noter-avatar-img"
                            src={notf && notf['from_blog_avatar']}
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
                        {notf && notf['type'] === 'reblog' ? (
                            <ReblogReact />
                        ) : notf && notf['type'] === 'like' ? (
                            <LoveReact />
                        ) : (notf && notf['type'] === 'reply') ||
                          (notf && notf['type'] === 'answer') ? (
                            <CommentReact />
                        ) : notf && notf['type'] === 'ask' ? (
                            <AskReact />
                        ) : notf && notf['type'] === 'follow' ? (
                            <FollowReact />
                        ) : null}
                    </div>
                </div>
                <div className="notf-content">
                    <strong>
                        {notf && notf['from_blog_name']}{' '}
                        <span style={{ marginRight: '5px' }}> </span>
                    </strong>
                    <span
                        className="post-snap"
                        dangerouslySetInnerHTML={{
                            __html: `${
                                notf && notf['type'] === 'reply'
                                    ? ' replied to your post: '
                                    : notf && notf['type'] === 'like'
                                    ? ' loved your post: '
                                    : notf && notf['type'] === 'reblog'
                                    ? ' rebloged your post: '
                                    : notf && notf['type'] === 'ask'
                                    ? 'asked'
                                    : notf && notf['type'] === 'answer'
                                    ? 'answerd your ask: '
                                    : notf && notf['type'] === 'follow'
                                    ? 'started following your blog'
                                    : null
                            }`
                        }}
                    ></span>
                    {notf && notf['post_ask_answer_content'] ? (
                        <span
                            className="post-ask-answer-content"
                            style={{ marginLeft: '5px' }}
                            dangerouslySetInnerHTML={{
                                __html: `${
                                    notf && notf['post_ask_answer_content']
                                }`
                            }}
                        ></span>
                    ) : null}
                </div>
                <div className="type">
                    {notf && notf['type'] === 'like' ? (
                        <Link className="post-link" to="*">
                            <PostIcon />
                        </Link>
                    ) : notf && notf['type'] === 'ask' ? (
                        <Link className="post-link" to="*">
                            <AskIcon />
                        </Link>
                    ) : notf && notf['type'] === 'follow' ? (
                        <button
                            onClick={() => {
                                followAccount(
                                    user?.token,
                                    notf && notf['from_blog_name'],
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
