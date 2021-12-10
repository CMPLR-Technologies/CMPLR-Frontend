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
        <div className="options">
            <div className="list">
                <a target="_blank" rel="noreferrer" className="post-time">
                    <span className="post-time-text">Posted - {postTime}</span>
                </a>
                {userBlogName !== blogName && (
                    <>
                        <div
                            onClick={() => copyLink(postLink, postId)}
                            className="opt-btn copy-btn"
                            id={`copy-btn${postId}`}
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
                            >
                                Unfollow
                            </div>
                        )}
                        <div className="opt-btn report-btn">Report</div>
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="opt-btn block-btn"
                        >
                            Block
                        </div>
                        <div
                            onClick={() => {
                                setIsOptionListOpen(false);
                            }}
                            className="opt-btn close-btn"
                        >
                            Close
                        </div>
                    </>
                )}
                {/**Post's author is logged user */}
                {userBlogName === blogName && (
                    <>
                        {' '}
                        <div className="opt-btn pin-btn">Pin</div>
                        <div
                            onClick={() => copyLink(postLink, postId)}
                            className="opt-btn copy-btn"
                            id={`copy-btn${postId}`}
                        >
                            Copy Link
                        </div>
                        <div
                            onClick={() => {
                                setIsOptionListOpen(false);
                            }}
                            className="opt-btn close-btn"
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
