import React, { useEffect, useState } from 'react';
import AudioPost from './postTypesComponents/AudioPost';
import ImageList from './postTypesComponents/ImageList';
import OptionsButton from './SVG/OptionsButton.svg';
import TextPost from './postTypesComponents/TextPost';
import Tags from './Tags';
import VideoPost from './postTypesComponents/VideoPost';
import Footer from './Footer';
import Divider from './Divider';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';
import { extractPostContent, chaneMobileView } from '../Controller';
import { follow, block } from '../Services';
import PropTypes from 'prop-types';
import OptionsList from './OptionsList';

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
    radar: PropTypes.bool,
    left: PropTypes.string,
    reblog: PropTypes.bool,
    padding: PropTypes.string
};

export default function PostComponent(props) {
    const { post, isFollowed, userBlogName, radar, otherClass } = props;
    const {
        blogName,
        blogEmail,
        blogUrl,
        postTime,
        tagsArray,
        content,
        postLink,
        blogIdentifier,
        avatar,
        numberNotes,
        reblogKey,
        postId
    } = post;
    let textPost, imagePost, videoPost, audioPost;
    content &&
        content.map(item => {
            if (item.postType === 'text' || item.postType === 'chat')
                textPost = item;
            else if (item.postType === 'image') imagePost = item;
            else if (item.postType === 'audio') audioPost = item;
            else if (item.postType === 'video') videoPost = item;
        });
    const { post, isFollowed, userBlogName, radar, left, reblog, padding } =
        props;

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
        <div
            data-testid="post-wrapper-ts"
            style={{ left: left }}
            className="post-wrapper"
        >
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

            <article data-testid="post-container-ts" className="post-container">
                {!radar && !mobileView && (
                    <div className="author-avatar">
                        <div className="sticky-avatar">
                            <img src={avatar} className="avatar-img" />
                        </div>
                    </div>
                )}
                <header
                    data-testid="post-header-ts"
                    style={{ padding: padding }}
                    className="post-header"
                >
                    {(mobileView || radar) && (
                        <div className="author-avatar mob">
                            <div className="sticky-avatar mob">
                                <img
                                    data-testid="avatar-img-mob-ts"
                                    src={avatar}
                                    className="avatar-img mob"
                                />
                            </div>
                        </div>
                    )}
                    <div data-testid="header-flex-ts" className="header-flex">
                        <div
                            data-testid="header-title-ts"
                            className="header-title"
                        >
                            <span
                                data-testid="post-heading-ts"
                                className="post-heading"
                            >
                                {blogName}
                            </span>
                            {!following && !reblog && (
                                <button
                                    onClick={() =>
                                        follow(blogUrl, blogEmail, setFollowing)
                                    }
                                    className="follow-btn"
                                    data-testid="follow-btn-header-ts"
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                        <div className="options-btn">
                            {!reblog && (
                                <button
                                    onClick={() => {
                                        setIsOptionListOpen(!isOptionListOpen);
                                    }}
                                    className="btn"
                                    data-testid="opt-btn-header-ts"
                                >
                                    <OptionsButton />
                                </button>
                            )}
                            {isOptionListOpen && (
                                <OptionsList
                                    postTime={postTime}
                                    userBlogName={userBlogName}
                                    blogName={blogName}
                                    postLink={postLink}
                                    postId={postId}
                                    following={following}
                                    blogUrl={blogUrl}
                                    setFollowing={setFollowing}
                                    setIsModalOpen={setIsModalOpen}
                                    setIsOptionListOpen={setIsOptionListOpen}
                                />
                            )}
                        </div>
                    </div>
                </header>
                {returned.textPost !== undefined && (
                    <>
                        <TextPost
                            title={returned.textPost.title}
                            content={returned.textPost.content}
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
                {!reblog && (
                    <div
                        data-testid="post-footer-cont-ts"
                        className="post-footer"
                    >
                        <Tags tagsArray={tags} />
                        <Footer
                            isAuthor={userBlogName === blogName}
                            postLink={postLink}
                            numberNotes={numberNotes}
                            reblogKey={reblogKey}
                            postId={postId}
                            blogName={blogName}
                            postAuthor={userBlogName}
                            authorAvatar={avatar}
                            setIsModalOpenN={setIsModalOpen}
                        />
                    </div>
                )}{' '}
            </article>
        </div>
    );
}
