import React, { useEffect, useState, useContext } from 'react';
import OptionsButton from './SVG/OptionsButton.svg';
import TextPost from './postTypesComponents/TextPost';
import Tags from './Tags';
import Footer from './Footer';
import Divider from './Divider';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';
import { chaneMobileView } from '../Controller';
import { block } from '../Services';
import { followAccount } from '../../../followingComponent/Service';
import PropTypes from 'prop-types';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import OptionsList from './OptionsList';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
import { handlePosting } from '../../../createPost/Service';
import { useNavigate } from 'react-router-dom';
import ProfileMiniHoverWrapper from '../../../profileViews/mini&sideViews/View';
import AskPost from './postTypesComponents/AskPost';
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
    themeDeactivate: PropTypes.bool,
    draft: PropTypes.bool
};

export default function PostComponent(props) {
    const {
        post,
        userBlogName,
        radar,
        left,
        reblog,
        padding,
        blogPage,
        themeDeactivate,
        draft,
        ask,
        askFetch,
        senderName
    } = props;
    let theme = useContext(ThemeContext)[0];
    if (themeDeactivate) theme = 'trueBlue';
    const [isOptionListOpen, setIsOptionListOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
    const [blockResponse, setBlockResponse] = useState('');
    const [mobileView, setMobileView] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const { blog: blog, post: postData } = post;

    const {
        date: postTime,
        tags: tags,
        title: title,
        content: content,
        state: state,
        post_id: postId,
        reblog_key: reblogKey,
        number_notes: numberNotes,
        is_liked: isLiked
    } = postData && postData;
    const {
        blog_name: blogName,
        avatar: avatar,
        blog_id: blogIdentifier,
        blog_url: blogUrl,
        follower: follower
    } = blog && blog;

    const navigate = useNavigate();

    const postSubmit = () => {
        const dataBody = {
            title: title,
            content: content,
            state: 'publish',
            type: 'text',
            // eslint-disable-next-line camelcase
            blog_name: user?.blogName,
            tags: tags
        };

        handlePosting(dataBody, navigate, user?.token);
    };

    const [liked, setIsLiked] = useState(isLiked && isLiked);
    const [following, setFollowing] = useState(follower && follower);
    const blogId = user?.userData?.primary_blog_id;
    const handleBlock = () => {
        block(
            blogName,
            userBlogName,
            setIsOptionListOpen,
            setIsModalOpen,
            setIsMsgModalOpen,
            setBlockResponse,
            user?.token
        ).catch(err => {
            setIsOptionListOpen(false);
            setIsModalOpen(false);
            setIsMsgModalOpen(true);
            if (err.response.status === 409)
                setBlockResponse(`${blogName} is already blocked.`);
            else if (err.response.status === 404) {
                setBlockResponse(`${blogName} is not found.`);
            } else if (err.response.status === 403) {
                setBlockResponse(`you can't block ${blogName}`);
            } else {
                setBlockResponse(
                    `Something went wrong while blocking ${blogName}`
                );
            }
        });
    };
    useEffect(() => {
        chaneMobileView(setMobileView);
    }, []);

    window.addEventListener('resize', () => chaneMobileView(setMobileView));
    const css = `
    .post-container, .post-container.list{
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
        background-color:rgb(${themes[theme].white});
        
    }

    .share-options .options .list{
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
        background-color:rgba(${themes[theme].white},.65);
    }
    .circled-border{
        background-color:rgb(255,255,255)
    }
    .modal{
        background-color:rgba(0,0,0,.95);
    }

    .msg-heading, .msg-description{
        color:rgb(${themes[theme].whiteOnDark},.65);
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
    .post-heading svg{
        fill:rgba(${themes[theme].black}, 0.65)
    }

    .note-reply{
        color:rgb(${themes[theme].black})
    }

    `;

    return (
        <div
            data-testid="post-wrapper-ts"
            style={{ left: left }}
            className={`post-wrapper ${radar ? 'radar-post-wrapper' : ''}`}
        >
            {isMsgModalOpen && (
                <Modal messageHeading={blockResponse}>
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
                            handleBlock();
                        }}
                    />
                </Modal>
            )}

            <article data-testid="post-container-ts" className="post-container">
                {!radar && !mobileView && !blogPage && (
                    <ProfileMiniHoverWrapper
                        blogName={userBlogName}
                        blogID={blogIdentifier}
                    >
                        <div className="author-avatar">
                            <div className="sticky-avatar">
                                <img
                                    data-testid="avatar-img-ts"
                                    src={avatar}
                                    className="avatar-img"
                                />
                            </div>
                        </div>
                    </ProfileMiniHoverWrapper>
                )}
                {!blogPage && (
                    <header
                        data-testid="post-header-ts"
                        style={{ padding: padding }}
                        className="post-header"
                    >
                        {(mobileView || radar) && !askFetch && (
                            <ProfileMiniHoverWrapper
                                blogName={userBlogName}
                                blogID={blogIdentifier}
                            >
                                <div className="author-avatar author-avatar-mob">
                                    <div className="sticky-avatar sticky-avatar-mob">
                                        <img
                                            data-testid="avatar-img-mob-ts"
                                            src={avatar}
                                            className="avatar-img avatar-img-mob"
                                        />
                                    </div>
                                </div>
                            </ProfileMiniHoverWrapper>
                        )}
                        <div
                            data-testid="header-flex-ts"
                            className="header-flex"
                        >
                            <div
                                data-testid="header-title-ts"
                                className="header-title"
                            >
                                <ProfileMiniHoverWrapper
                                    blogID={blogIdentifier}
                                    blogName={userBlogName}
                                    style={{ textDecoration: 'none' }}
                                >
                                    {state === 'publish' ? (
                                        <span
                                            data-testid="post-heading-ts"
                                            className="post-heading"
                                        >
                                            {blogName}
                                        </span>
                                    ) : !ask ? (
                                        <span
                                            data-testid="post-heading-ts"
                                            className="post-heading"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="16"
                                                height="14"
                                                fill="rgba(var(--black), 0.65)"
                                            >
                                                <path d="M19 11.018V7.88c0-1.914-.601-4.15-1.791-5.434-1.187-1.283-2.744-1.443-4.607-1.442-2.148-.001-3.604-.147-5.075 1.442C5.84 3.725 6 7.066 6 7.88v3.138l-2 .067c-.579.159-1 .523-1 1.003v9.904C3 22.471 3.527 23 4 23h17c.476 0 1-1.04 1-1.04v-9.872c0-1.008-.525-1.07-1-1.07h-2zM9.834 4.736c.65-.794 1.83-1.085 2.768-1.085.936 0 2.062.291 2.712 1.085.647.794.686 2.112.686 3.375v2.885H9V8.11c0-1.263.189-2.578.834-3.375z"></path>
                                            </svg>
                                            private
                                        </span>
                                    ) : null}
                                </ProfileMiniHoverWrapper>

                                {!following &&
                                    !ask &&
                                    userBlogName !== blogName && (
                                        <button
                                            onClick={() =>
                                                followAccount(
                                                    user?.token,
                                                    blogName,
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
                            <ClickAwayListener
                                onClickAway={() => setIsOptionListOpen(false)}
                            >
                                <div className="options-btn">
                                    {!ask && (
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
                                            postLink={`${window.location.host}/blog/view/${blogName}/${blogId}/posts/${postId}`}
                                            postId={postId}
                                            following={following}
                                            blogUrl={blogUrl}
                                            setFollowing={setFollowing}
                                            setIsModalOpen={setIsModalOpen}
                                            setIsOptionListOpen={
                                                setIsOptionListOpen
                                            }
                                            radar={radar}
                                        />
                                    )}
                                </div>
                            </ClickAwayListener>
                        </div>
                    </header>
                )}
                {!ask ? (
                    <>
                        <TextPost
                            title={title && title}
                            content={content && content}
                        />
                        <Divider />
                    </>
                ) : (
                    <AskPost
                        senderName={senderName}
                        content={content && content}
                    />
                )}
                {!askFetch && (
                    <div
                        data-testid="post-footer-cont-ts"
                        className="post-footer"
                    >
                        <Tags tagsArray={tags} />
                        <Footer
                            isAuthor={userBlogName === blogName}
                            postLink={`${window.location.host}/blog/view/${blogName}/${blogId}/posts/${postId}`}
                            numberNotes={numberNotes}
                            reblogKey={reblogKey}
                            postId={postId}
                            blogName={blogName}
                            postAuthor={blogName}
                            authorAvatar={avatar}
                            setIsModalOpenN={setIsModalOpen}
                            blogPage={blogPage}
                            radar={radar}
                            isLiked={liked}
                            draft={draft}
                            postSubmit={postSubmit}
                            setIsLiked={setIsLiked}
                            ask={ask}
                            senderName={senderName}
                            notesCount={postData.notes_count}
                        />
                    </div>
                )}
            </article>
            {<style>{css}</style>}
        </div>
    );
}
