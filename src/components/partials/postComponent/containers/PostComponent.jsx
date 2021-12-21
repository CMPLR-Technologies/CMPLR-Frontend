import React, { useEffect, useState, useContext } from 'react';
import OptionsButton from './SVG/OptionsButton.svg';
import TextPost from './postTypesComponents/TextPost';
import Tags from './Tags';
import Footer from './Footer';
import Divider from './Divider';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';
import { chaneMobileView } from '../Controller';
import { follow, block } from '../Services';
import PropTypes from 'prop-types';
import OptionsList from './OptionsList';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
import { apiBaseUrl } from '../../../../config.json';
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
    userBlogName: PropTypes.string.isRequired,
    isFollowed: PropTypes.bool,
    radar: PropTypes.bool,
    left: PropTypes.string,
    padding: PropTypes.string,
    reblog: PropTypes.bool,
    blogPage: PropTypes.bool,
    themeDeactivate: PropTypes.bool
};

export default function PostComponent(props) {
    const {
        post,
        isFollowed,
        userBlogName,
        radar,
        left,
        reblog,
        padding,
        blogPage,
        themeDeactivate
    } = props;
    const theme = useContext(ThemeContext)[0];
    const [isOptionListOpen, setIsOptionListOpen] = useState(false);
    const [following, setFollowing] = useState(isFollowed);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const { blog: blog, post: postData } = post;

    const {
        date: postTime,
        tags: tags,
        title: title,
        content: content,
        state: state,
        // type: type,
        post_id: postId,
        reblog_key: reblogKey,
        number_notes: numberNotes,
        isLiked: isLiked
    } = postData && postData;
    const {
        blog_name: blogName,
        avatar: avatar,
        blog_identifier: blogIdentifier,
        blog_url: blogUrl,
        blog_email: blogEmail
    } = blog && blog;
    useEffect(() => {
        chaneMobileView(setMobileView);
    }, []);

    window.addEventListener('resize', () => chaneMobileView(setMobileView));
    const css = `
    .post-container, .list{
        background-color:rgb(${themes[theme].white});
        color:rgb(${themes[theme].black})
    }

    .post-header{
        background-color:rgb(${themes[theme].white});
        color:rgb(${themes[theme].black})
    }
    .divider, .post-time {
        border-bottom: 1px solid rgba(${themes[theme].black}, 0.13);
    }
    .options-list-btn-svg{
        fill:rgb(${themes[theme].black});
    }

    .options-btn .options .list{
        box-shadow: 0 0 15px 0 rgba(0,0,0, 0.5);
    }
    .post-time-text,
    .opt-btn,
    .opt-btn .follow-btn,
    .post-heading,
    .body-content,
    .text-title-content,
    .message span,
    .message span strong{   
        color:rgb(${themes[theme].black})
    }

    .follow-btn:hover{
        text-decoration:none;
    }

    .post-time:hover,.options-btn .options .list .opt-btn:hover{
        background-color:rgb(${themes[theme].secondaryAccent});
    }

    .report-btn,
    .block-btn {
        color:rgb(${themes[theme].red})
    }

    .follow-btn{
        color:rgb(${themes[theme].accent});
    }

    .show-image-modal{
        background-color:rgba(0,0,0,.8);
    }
    
    .audio-post{
        background-color:rgb(${themes[theme].purple});
    }

    .seek-bar{
        background-color:rgba(${themes[theme].black},.25);
    }

    .video-post-content{
        background-color:rgb(0,0,0);
    }

    .progreesbar .bar{
        background-color:rgba(${themes[theme].white},.2);
        filter: drop-shadow(0 0 3px rgb(${themes[theme].black}));
    }
    .progreesbar .bar .slider{
        background-color:rgb(${themes[theme].white});
        filter: drop-shadow(0 0 3px rgb(${themes[theme].black}));
    }
    .play-pause-button, .elapsed-time{
        filter: drop-shadow(0 0 3px rgb(${themes[theme].black}));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }
    .circle{
        background-color:rgb(${themes[theme].white});
    }
    .tag, .notes-count{
        color:rgba(${themes[theme].black},.65);
    }
    .share-options .options .list:hover{
        background-color:rgba(${themes[theme].black},.07);
    }
    .circled-border{
        background-color:rgb(255,255,255)
    }
    .modal{
        background-color:rgba(0,0,0,.95);
    }

    .msg-heading, .msg-description{
        color:rgb(${themes[theme].whiteOnDark});
    }
    .notes-view-container {
        background-color:rgb(${themes[theme].white});
        color:rgb(${themes[theme].black})
    }
    .notes-view-header-icons,.notes-summary{
        border-bottom: 1px solid rgba(${themes[theme].black}, 0.13);
    }
    .notes-view-content {
        background-color:rgba(${themes[theme].black},.07);
        scrollbar-color: rgba(${themes[theme].black},.4) rgba(${themes[theme].white},.1);
        scrollbar-width: thin;
    }

    .notes-summary-count{
        color:rgb(${themes[theme].black})

    }
    .notes-view-header-icons .btn svg{
        fill:rgb(${themes[theme].black})
    }
    .notes-list .note-content{
        background-color:rgb(${themes[theme].white});
    }
    .note-author{
        color:rgb(${themes[theme].black})
    }
    .reblog-sign-span{
        fill:rgba(${themes[theme].black},.65);
    }

    .reblogger-name{
        color:rgba(${themes[theme].black},.65);
    }
    
    .input-area{
        background-color:rgb(${themes[theme].white});
        border-top:1px solid rgba(${themes[theme].black}, 0.13);
    }

    .reply-btn{
        color:rgb(${themes[theme].accent})
    }

    .reply-btn:disabled{
        color:rgba(${themes[theme].black},.4)
    }

    .note-option-btn svg{
        fill:rgba(${themes[theme].black}, 0.65)
    }
    `;

    return (
        <div
            data-testid="post-wrapper-ts"
            style={{ left: left }}
            className={`post-wrapper ${radar ? 'radar-post-wrapper' : ''}`}
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
                {!radar && !mobileView && !blogPage && (
                    <div className="author-avatar">
                        <div className="sticky-avatar">
                            <img
                                data-testid="avatar-img-ts"
                                src={avatar}
                                className="avatar-img"
                            />
                        </div>
                    </div>
                )}
                {!blogPage && (
                    <header
                        data-testid="post-header-ts"
                        style={{ padding: padding }}
                        className="post-header"
                    >
                        {(mobileView || radar) && (
                            <div className="author-avatar author-avatar-mob">
                                <div className="sticky-avatar sticky-avatar-mob">
                                    <img
                                        data-testid="avatar-img-mob-ts"
                                        src={avatar}
                                        className="avatar-img avatar-img-mob"
                                    />
                                </div>
                            </div>
                        )}
                        <div
                            data-testid="header-flex-ts"
                            className="header-flex"
                        >
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
                                            follow(
                                                blogUrl,
                                                blogEmail,
                                                setFollowing
                                            )
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
                                            setIsOptionListOpen(
                                                !isOptionListOpen
                                            );
                                        }}
                                        className="btn"
                                        data-testid="opt-btn-header-ts"
                                    >
                                        <OptionsButton />
                                    </button>
                                )}
                                {isOptionListOpen && !blogPage && (
                                    <OptionsList
                                        postTime={postTime}
                                        userBlogName={userBlogName}
                                        blogName={blogName}
                                        postLink={`${apiBaseUrl}/post/${postId}`} //change if needed
                                        postId={postId}
                                        following={following}
                                        blogUrl={blogUrl}
                                        setFollowing={setFollowing}
                                        setIsModalOpen={setIsModalOpen}
                                        setIsOptionListOpen={
                                            setIsOptionListOpen
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </header>
                )}
                {state === 'publish' && (
                    <>
                        <TextPost
                            title={title && title}
                            content={content && content}
                        />
                        <Divider />
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
                            postLink={`${apiBaseUrl}/post/${postId}`}
                            numberNotes={numberNotes}
                            reblogKey={reblogKey}
                            postId={postId}
                            blogName={blogName}
                            postAuthor={userBlogName}
                            authorAvatar={avatar}
                            setIsModalOpenN={setIsModalOpen}
                            blogPage={blogPage}
                            radar={radar}
                            isLiked={isLiked}
                        />
                    </div>
                )}{' '}
            </article>
            {!themeDeactivate && <style>{css}</style>}
        </div>
    );
}
