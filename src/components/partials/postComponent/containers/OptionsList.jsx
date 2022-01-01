import React, { useEffect } from 'react';
import { copyLink } from '../Controller';
import PropTypes from 'prop-types';
import { unfollowAccount } from '../../../followingComponent/Service';

export default function OptionsList(props) {
    const {
        postTime,
        userBlogName,
        blogName,
        postLink,
        postId,
        following,
        setFollowing,
        setIsModalOpen,
        setIsOptionListOpen,
        followersPage,
        radar,
        setBlogName
    } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (setBlogName !== undefined) setBlogName(blogName);
    }, []);
    return (
        <div
            data-testid="options-list-header-ts"
            className={`options ${radar ? 'options-radar' : ''}`}
        >
            <div data-testid="list-header-ts" className="list">
                {!followersPage && (
                    <a
                        data-testid="post-time-ts"
                        target="_blank"
                        rel="noreferrer"
                        className="post-time"
                    >
                        <span
                            data-testid={`post-time-text-ts${postId}`}
                            className="post-time-text"
                        >
                            Posted - {postTime}
                        </span>
                    </a>
                )}
                {userBlogName !== blogName && (
                    <>
                        {!followersPage && (
                            <div
                                onClick={() => copyLink(postLink, postId)}
                                className="opt-btn copy-btn"
                                id={`copy-btn${postId}`}
                                data-testid={`copy-btn-header-ts${postId}`}
                            >
                                Copy Link
                            </div>
                        )}
                        {following && (
                            <div
                                onClick={() =>
                                    unfollowAccount(
                                        user?.token,
                                        blogName,
                                        setFollowing,
                                        true
                                    )
                                }
                                className="opt-btn follow-btn"
                                data-testid={`unfollow-btn-header-ts${postId}`}
                            >
                                Unfollow
                            </div>
                        )}
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="opt-btn block-btn"
                            data-testid={`block-btn-header-ts${postId}`}
                        >
                            Block
                        </div>
                        <div
                            onClick={() => {
                                followersPage
                                    ? setIsOptionListOpen(-1)
                                    : setIsOptionListOpen(false);
                            }}
                            className="opt-btn close-btn"
                            data-testid={`close-btn-header-ts${postId}`}
                        >
                            Close
                        </div>
                    </>
                )}
                {/**Post's author is logged user */}
                {userBlogName === blogName && (
                    <>
                        <div
                            onClick={() => copyLink(postLink, postId)}
                            className="opt-btn copy-btn"
                            id={`copy-btn${postId}`}
                            data-testid={`copy-btn-header-ts${postId}`}
                        >
                            Copy Link
                        </div>
                        <div
                            onClick={() => {
                                setIsOptionListOpen(false);
                            }}
                            className="opt-btn close-btn"
                            data-testid={`close-btn-header-ts${postId}`}
                        >
                            Close
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

OptionsList.propTypes = {
    postTime: PropTypes.string,
    userBlogName: PropTypes.string,
    blogName: PropTypes.string,
    postLink: PropTypes.string,
    postId: PropTypes.number,
    following: PropTypes.bool,
    setFollowing: PropTypes.func,
    setIsModalOpen: PropTypes.func,
    setIsOptionListOpen: PropTypes.func,
    followersPage: PropTypes.bool,
    radar: PropTypes.bool,
    setBlogName: PropTypes.func
};
