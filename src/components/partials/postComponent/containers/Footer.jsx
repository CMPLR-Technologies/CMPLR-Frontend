import React, { useEffect, useState } from 'react';
import CopyLink from './SVG/CopyLink.svg';
import DeleteBtn from './SVG/DeleteBtn.svg';
import EditBtn from './SVG/EditBtn.svg';
import LoveBtn from './SVG/LoveBtn.svg';
import Note from './SVG/Note.svg';
import ReblogBtn from './SVG/ReblogBtn.svg';
import ShareBtn from './SVG/ShareBtn.svg';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';
import { toggleShareList, copyLink } from '../Controller';
import { handleLikePost, deletePost, submitNote } from '../Services';
import PropTypes from 'prop-types';
import NotesHeader from './Notes/NotesHeader';
import NotesContent from './Notes/NotesContent';
import { getPostNotes } from '../Services';
import { useNavigate } from 'react-router';

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
    authorAvatar: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    setIsModalOpenN: PropTypes.func
};

export default function Footer(props) {
    const {
        numberNotes,
        isAuthor,
        postLink,
        reblogKey,
        postId,
        blogName,
        postAuthor,
        authorAvatar,
        setIsModalOpenN
    } = props;
    const [isShareListOpen, setIsShareListOpen] = useState(false);
    const [loveFillColor, setLoveFillColor] = useState('gray');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notesView, setNotesView] = useState(false);
    const [noteType, setNoteType] = useState('');
    const [notes, setNotes] = useState([]);
    const [counts, setCounts] = useState({});
    const blogIdentifier = 'yahia.tumblr.com';

    const navigate = useNavigate();

    useEffect(() => {
        getPostNotes(blogIdentifier, setNotes, setCounts);
    }, []);

    return (
        <>
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
                    <span
                        onClick={() => {
                            setNotesView(!notesView);
                            setNoteType('comment');
                        }}
                    >
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
                                    setNotes={setNotes}
                                    setCounts={setCounts}
                                    type={noteType}
                                    setIsModalOpen={setIsModalOpenN}
                                    setNotesView={setNotesView}
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
                    <button
                        onClick={() => {
                            setNotesView(true);
                            setNoteType('comment');
                        }}
                        className="icon"
                    >
                        <Note />
                    </button>
                    <button
                        onClick={() => {
                            setNoteType('reblog');
                            navigate(
                                `/reblog/${blogName}/${postId}/${reblogKey}`
                            );
                        }}
                        className="icon"
                    >
                        <ReblogBtn />
                    </button>
                    <button
                        onClick={e => {
                            submitNote(
                                e,
                                'love',
                                '',
                                blogIdentifier,
                                setNotes,
                                setCounts
                            );
                            handleLikePost(
                                loveFillColor,
                                setLoveFillColor,
                                postId,
                                reblogKey
                            );
                        }}
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
        </>
    );
}
