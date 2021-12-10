import React from 'react';
import { copyLink } from '../Controller';
import { unfollow } from '../Services';
import PropTypes from 'prop-types';

export default function OptionsList(props) {
    const {
        postTime,
        userBlogName,
        blogName,
        postLink,
        postId,
        following,
        blogUrl,
        setFollowing,
        setIsModalOpen,
        setIsOptionListOpen
    } = props;
    return (
        <div data-testid="options-list-header-ts" className="options">
            <div data-testid="list-header-ts" className="list">
                <a
                    data-testid="post-time-ts"
                    target="_blank"
                    rel="noreferrer"
                    className="post-time"
                >
                    <span
                        data-testid="post-time-text-ts"
                        className="post-time-text"
                    >
                        Posted - {postTime}
                    </span>
                </a>
                {userBlogName !== blogName && (
                    <>
                        <div
                            onClick={() => copyLink(postLink, postId)}
                            className="opt-btn copy-btn"
                            id={`copy-btn${postId}`}
                            data-testid={`copy-btn-header-ts${postId}`}
                        >
                            Copy Link
                        </div>
                        {following && (
                            <div
                                onClick={() =>
                                    unfollow(
                                        blogUrl,
                                        setFollowing,
                                        setIsOptionListOpen
                                    )
                                }
                                className="opt-btn follow-btn"
                                data-testid={`unfollow-btn-header-ts${postId}`}
                            >
                                Unfollow
                            </div>
                        )}
                        <div
                            data-testid={`report-btn-header-ts${postId}`}
                            className="opt-btn report-btn"
                        >
                            Report
                        </div>
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="opt-btn block-btn"
                            data-testid={`block-btn-header-ts${postId}`}
                        >
                            Block
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
                {/**Post's author is logged user */}
                {userBlogName === blogName && (
                    <>
                        {' '}
                        <div
                            data-testid={`pin-btn-header-ts${postId}`}
                            className="opt-btn pin-btn"
                        >
                            Pin
                        </div>
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
    blogUrl: PropTypes.string,
    setFollowing: PropTypes.func,
    setIsModalOpen: PropTypes.func,
    setIsOptionListOpen: PropTypes.func
};
