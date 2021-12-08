import React, { useEffect, useState } from 'react';
import AudioPost from './AudioPost';
import ImageList from './ImageList';
import OptionsButton from './OptionsButton.svg';
import TextPost from './TextPost';
import Tags from './Tags';
import VideoPost from './VideoPost';
import Footer from './Footer';
import Divider from './Divider';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';
import { extractPostContent, copyLink, chaneMobileView } from '../Controller';
import { follow, unfollow, block } from '../Services';
import PropTypes from 'prop-types';

/**
 * @function PostComponent
 * @description Base Unit Component for all post compoennt types
 * @param {object} post - object containg post data response received from server
 * @param {boolean} isFollowed - boolean used to determine if user is following the post author
 * @param {string} userBlogName - blog name of the user who is logged in
 * @param {boolean} radar - boolean used to determine if the post viewed in radar section or not
 * @returns {Component} PostComponent
 */

PostComponent.propTypes = {
    post: PropTypes.object.isRequired,
    isFollowed: PropTypes.bool.isRequired,
    userBlogName: PropTypes.string.isRequired,
    radar: PropTypes.bool
};

export default function PostComponent(props) {
    const { post, isFollowed, userBlogName, radar } = props;

    const [isOptionListOpen, setIsOptionListOpen] = useState(false);
    const [following, setFollowing] = useState(isFollowed);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const {
        blog_name: blogName,
        blog_email: blogEmail,
        blog_url: blogUrl,
        post_timestamp: postTime,
        tags: tags,
        content: content,
        post_link: postLink,
        blog_identifier: blogIdentifier,
        blog_avatar: avatar,
        number_notes: numberNotes,
        reblog_key: reblogKey,
        post_id: postId
    } = post;
    useEffect(() => {
        chaneMobileView(setMobileView);
    }, []);
    let returned = extractPostContent(content);

    window.addEventListener('resize', () => chaneMobileView(setMobileView));

    return (
        <div className="post-wrapper">
            {isMsgModalOpen && (
                <Modal messageHeading={`${blogName} has been blocked`}>
                    <AuthBtn
                        id="nevermind-btn"
                        text="close"
                        color="rgb(0,184,255)"
                        handleClick={() => {
                            setIsMsgModalOpen(false);
                            setIsOptionListOpen(false);
                        }}
                    />
                </Modal>
            )}
            {isModalOpen && (
                <Modal
                    messageHeading={` Are you sure you want to block ${blogName} from 
                ${userBlogName}?`}
                    messageDesc={`They won't be able to follow ${blogName}, send
                        ${blogName} messages, see ${blogName} in search
                        results, or interact with any of ${blogName}'s
                        posts.`}
                >
                    <AuthBtn
                        id="nevermind-btn"
                        text="Nevermind"
                        color="rgba(255,255,255,.65)"
                        handleClick={() => {
                            setIsModalOpen(false);
                            setIsOptionListOpen(false);
                        }}
                    />
                    <AuthBtn
                        id="block-btn"
                        text="Block"
                        color="rgb(255, 73, 47)"
                        handleClick={() => {
                            block(
                                blogIdentifier,
                                setIsOptionListOpen,
                                setIsModalOpen,
                                setIsMsgModalOpen
                            );
                        }}
                    />
                </Modal>
            )}

            <article className="post-container">
                {!radar && !mobileView && (
                    <div className="author-avatar">
                        <div className="sticky-avatar">
                            <img src={avatar} className="avatar-img" />
                        </div>
                    </div>
                )}
                <header className="post-header">
                    {(mobileView || radar) && (
                        <div className="author-avatar mob">
                            <div className="sticky-avatar mob">
                                <img src={avatar} className="avatar-img mob" />
                            </div>
                        </div>
                    )}
                    <div className="header-flex">
                        <div className="header-title">
                            <span className="post-heading">{blogName}</span>
                            {!following && (
                                <button
                                    onClick={() =>
                                        follow(blogUrl, blogEmail, setFollowing)
                                    }
                                    className="follow-btn"
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                        <div className="options-btn">
                            <button
                                onClick={() => {
                                    setIsOptionListOpen(!isOptionListOpen);
                                }}
                                className="btn"
                            >
                                <OptionsButton />
                            </button>
                            {isOptionListOpen && (
                                <div className="options">
                                    <div className="list">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            className="post-time"
                                        >
                                            <span className="post-time-text">
                                                Posted - {postTime}
                                            </span>
                                        </a>
                                        {userBlogName !== blogName && (
                                            <>
                                                <div
                                                    onClick={() =>
                                                        copyLink(
                                                            postLink,
                                                            postId
                                                        )
                                                    }
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
                                                <div className="opt-btn report-btn">
                                                    Report
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        setIsModalOpen(true)
                                                    }
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
                                        {userBlogName === blogName && (
                                            <>
                                                {' '}
                                                <div className="opt-btn pin-btn">
                                                    Pin
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        copyLink(
                                                            postLink,
                                                            postId
                                                        )
                                                    }
                                                    className="opt-btn copy-btn"
                                                    id={`copy-btn${postId}`}
                                                >
                                                    Copy Link
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
                                </div>
                            )}
                        </div>
                    </div>
                </header>
                {returned.textPost !== undefined && (
                    <>
                        <TextPost
                            title={returned.textPost.postTitle}
                            text={returned.textPost.postText}
                        />
                        <Divider />
                    </>
                )}
                {returned.imagePost !== undefined && (
                    <>
                        <ImageList
                            imageTag={returned.imagePost.imageTag}
                            caption={returned.imagePost.caption}
                            altText={returned.imagePost.altText}
                            postId={postId}
                        />
                        <Divider />
                    </>
                )}
                {returned.audioPost !== undefined && (
                    <>
                        <AudioPost
                            url={returned.audioPost.url}
                            artist={returned.audioPost.artist}
                            track={returned.audioPost.track}
                            description={returned.audioPost.description}
                        />
                        <Divider />
                    </>
                )}
                {returned.videoPost !== undefined && (
                    <>
                        <VideoPost
                            id={postId + returned.videoPost.videoTag}
                            videoTag={returned.videoPost.videoTag}
                        />
                    </>
                )}
                {/* todo:Link Post */}
                <div className="post-footer">
                    <Tags tagsArray={tags} />
                    <Footer
                        isAuthor={userBlogName === blogName}
                        postLink={postLink}
                        numberNotes={numberNotes}
                        reblogKey={reblogKey}
                        postId={postId}
                    />
                </div>
            </article>
        </div>
    );
}
