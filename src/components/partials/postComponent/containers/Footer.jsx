import React, { useEffect, useState } from 'react';
import CopyLink from './CopyLink.svg';
import DeleteBtn from './DeleteBtn.svg';
import EditBtn from './EditBtn.svg';
import LoveBtn from './LoveBtn.svg';
import Note from './Note.svg';
import ReblogBtn from './ReblogBtn.svg';
import ShareBtn from './ShareBtn.svg';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';
import { toggleShareList, copyLink } from '../Controller';
import { handleLikePost, deletePost } from '../Services';
import PropTypes from 'prop-types';
import NotesHeader from './Notes/NotesHeader';
import NotesContent from './Notes/NotesContent';

/**
 * @function Footer
 * @description Post Component containg icons like love,share,reblog,edit,delete,...etc and notes count
 * @param {number} numberNotes - number of notes relate to post
 * @param {boolean} isAuth - boolean value to check if the user logged in is the author of viewed post
 * @param {string} postLink - link of the post
 * @param {string} reblogKey -the key used to reblog this post
 * @param {string} postId - id of the post
 * @param {string} postAuthor -the author of the post viewed
 * @param {string} authorAvatar - avatar image of post author
 * @returns {Component} Footer Component
 */

Footer.propTypes = {
    numberNotes: PropTypes.number.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    postLink: PropTypes.string.isRequired,
    reblogKey: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    postAuthor: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired
};

export default function Footer(props) {
    const {
        numberNotes,
        isAuthor,
        postLink,
        reblogKey,
        postId,
        postAuthor,
        authorAvatar
    } = props;
    const [isShareListOpen, setIsShareListOpen] = useState(false);
    const [loveFillColor, setLoveFillColor] = useState('gray');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notesView, setNotesView] = useState(true);
    const [notes, setNotes] = useState([]);
    const [counts, setCounts] = useState({});

    useEffect(() => {
        setCounts({ totalLikes: 1, totalReblogs: 2 });
        setNotes([
            {
                type: 'reblog',
                blog_name: 'hazom',
                blog_url: 'https://hazom.com',
                followed: true,
                post_id: 2541652,
                reblog_parent_blog_name: 'kholdbold',
                reblog_parent_blog_url: 'https://kholdbold.com',
                avatar: 'https://64.media.tumblr.com/5d65e6564325029026372d750047aca2/da25d5299e6bc43a-9a/s64x64u_c1/d33411435f6a25c6182f6d780030d659f917766b.jpg',
                content: 'kak'
            },
            {
                type: 'reblog',
                blog_name: 'saeedElgaymed',
                blog_url: 'https://saeedElgaymed.com',
                followed: true,
                post_id: 12720,
                reblog_parent_blog_name: 'kholdbold',
                reblog_parent_blog_url: 'https://kholdbold.com',
                avatar: 'https://64.media.tumblr.com/cfd224af0124f026a7e115699a0bd0cd/9ce36ef73413611c-ea/s64x64u_c1/c328738a921143c812b946326d40590c4039d742.jpg',
                content: 'kak'
            },
            {
                type: 'love',
                blog_name: 'Gaser ElGaser',
                blog_url: 'https://Gaser.com',
                followed: false,
                post_id: 74108,
                reblog_parent_blog_name: 'kholdbold',
                reblog_parent_blog_url: 'https://kholdbold.com',
                avatar: 'https://64.media.tumblr.com/d7f27872651508653e4300eca228b755/82608b9adeef872d-c1/s64x64u_c1/407233e812ff6522dd4b7b2f49135bc8f81b34b0.jpg',
                content: 'kak'
            }
        ]);
    }, []);
    return (
        <footer className="post-footer-icons">
            {isModalOpen && (
                <Modal
                    messageHeading={` Are you sure you want to delete this post?`}
                >
                    <AuthBtn
                        id="nevermind-btn"
                        text="Cancel"
                        color="rgba(255,255,255,.65)"
                        handleClick={() => {
                            setIsModalOpen(false);
                        }}
                    />
                    <AuthBtn
                        id="block-btn"
                        text="Ok"
                        color="rgb(0, 184, 255)"
                        handleClick={() => {
                            deletePost(postId, setIsModalOpen);
                        }}
                    />
                </Modal>
            )}
            <div className="notes-count">
                <span onClick={() => setNotesView(!notesView)}>
                    {numberNotes > 1
                        ? `${numberNotes} notes`
                        : numberNotes === undefined || numberNotes === 0
                        ? ''
                        : `${numberNotes} note`}
                </span>

                {notesView && (
                    <div className="notes-view-container">
                        <div className="notes-view-flex">
                            <NotesHeader
                                numberNotes={numberNotes}
                                totalLikes={counts.totalLikes}
                                totalReblogs={counts.totalReblogs}
                                setNotesView={setNotesView}
                                notes={notes}
                            />
                            <NotesContent
                                postAuthor={postAuthor}
                                authorAvatar={authorAvatar}
                                notes={notes}
                            />
                        </div>
                    </div>
                )}
            </div>
            {isShareListOpen && (
                <div className="share-options">
                    <div className="options">
                        <div
                            onClick={() => copyLink(postLink, postId)}
                            className="list "
                        >
                            <div className="circled-border">
                                <CopyLink />
                            </div>
                            <div
                                className="opt-btn copy-btn btn"
                                id={`copy-btn${postId}`}
                            >
                                Copy Link
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="footer-icons">
                <button
                    onClick={() =>
                        toggleShareList(isShareListOpen, setIsShareListOpen)
                    }
                    className="icon"
                >
                    <ShareBtn />
                </button>
                <button className="icon">
                    <Note />
                </button>
                <button className="icon">
                    <ReblogBtn />
                </button>
                <button
                    onClick={() =>
                        handleLikePost(
                            loveFillColor,
                            setLoveFillColor,
                            postId,
                            reblogKey
                        )
                    }
                    className="icon "
                >
                    <LoveBtn fillColor={loveFillColor} />
                </button>
                {isAuthor && (
                    <>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="icon"
                        >
                            <DeleteBtn />
                        </button>
                        <button className="icon">
                            <EditBtn />
                        </button>
                    </>
                )}
            </div>
        </footer>
    );
}
