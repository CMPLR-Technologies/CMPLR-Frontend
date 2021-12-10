import React, { useEffect, useState } from 'react';
import AudioPost from './AudioPost';
import ImageList from './ImageList';
import OptionsButton from './OptionsButton.svg';
import TextPost from './TextPost';
import Tags from './Tags';
import VideoPost from './VideoPost';
import Footer from './Footer';
import Divider from './Divider';
import Axios from 'axios';
import { apiBaseUrl } from '../../../../config.json';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';

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

    const [isOptionListOpen, setIsOptionListOpen] = useState(false);
    const [following, setFollowing] = useState(isFollowed);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const copyLink = () => {
        navigator.clipboard.writeText(postLink);
        document.getElementById(`copy-btn${postId}`).textContent =
            'Link Copied!';
        setTimeout(() => {
            document.getElementById(`copy-btn${postId}`).textContent =
                'Copy link';
        }, 2000);
    };

    const chaneMobileView = () => {
        if (window.innerWidth > 960) {
            setMobileView(false);
        } else {
            setMobileView(true);
        }
    };

    useEffect(() => {
        chaneMobileView();
    }, []);
    window.addEventListener('resize', chaneMobileView);

    //axios requests
    const unfollow = () => {
        Axios({
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            url: `${apiBaseUrl}/user/unfollow`,
            data: {
                url: blogUrl
            }
        }).then(response => {
            if (response.status === 200) {
                setFollowing(false);
                setIsOptionListOpen(false);
            }
        });
    };
    const follow = () => {
        Axios({
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            url: `${apiBaseUrl}/user/follow`,
            data: {
                url: blogUrl,
                email: blogEmail
            }
        }).then(response => {
            if (response.status === 200) setFollowing(true);
        });
    };

    const block = () => {
        Axios({
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            url: `${apiBaseUrl}/blog/${blogIdentifier}/blocks}`
        }).then(response => {
            if (response.data.meta.status === 200) {
                setIsOptionListOpen(false);
                setIsModalOpen(false);
                setIsMsgModalOpen(true);
            }
        });
    };

    return (
        <div className={`post-wrapper ${otherClass}`}>
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
                            block();
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
                                    onClick={() => follow()}
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
                                                    onClick={() => copyLink()}
                                                    className="opt-btn copy-btn"
                                                    id={`copy-btn${postId}`}
                                                >
                                                    Copy Link
                                                </div>
                                                {following && (
                                                    <div
                                                        onClick={() =>
                                                            unfollow()
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
                                                    onClick={() => copyLink()}
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
                {textPost !== undefined && (
                    <TextPost
                        title={textPost.postTitle}
                        text={textPost.postText}
                    />
                )}
                <Divider />
                {imagePost !== undefined && (
                    <ImageList
                        imageUrl={imagePost.imageUrl}
                        caption={imagePost.caption}
                        altText={imagePost.altText}
                        postId={postId}
                    />
                )}
                <Divider />
                {/* {postType === 'chat' && <ChatPost />} */}{' '}
                {audioPost !== undefined && (
                    <AudioPost
                        url={audioPost.url}
                        artist={audioPost.artist}
                        track={audioPost.track}
                        description={audioPost.description}
                    />
                )}
                <Divider />
                {videoPost !== undefined && (
                    <VideoPost
                        id={postId + videoPost.url}
                        url={videoPost.url}
                    />
                )}
                {/* todo:Link Post */}
                <div className="post-footer">
                    <Tags tagsArray={tagsArray} />
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
