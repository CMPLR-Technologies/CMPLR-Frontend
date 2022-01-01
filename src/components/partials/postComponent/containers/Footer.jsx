import React, { useEffect, useState } from 'react';
import CopyLink from './SVG/CopyLink.svg';
import DeleteBtn from './SVG/DeleteBtn.svg';
import EditBtn from './SVG/EditBtn.svg';
import LoveBtn from './SVG/LoveBtn.svg';
import Note from './SVG/Note.svg';
import ReblogBtn from './SVG/ReblogBtn.svg';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';
import { copyLink } from '../Controller';
import { handleLikePost, handleUnlikePost, deletePost } from '../Services';
import PropTypes from 'prop-types';
import NotesHeader from './Notes/NotesHeader';
import NotesContent from './Notes/NotesContent';
import { getPostNotes } from '../Services';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../../../contexts/userContext/UserContext';
import ClickAwayListener from '@mui/base/ClickAwayListener';

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
    isAuthor: PropTypes.bool.isRequired,
    postLink: PropTypes.string.isRequired,
    reblogKey: PropTypes.string,
    postId: PropTypes.number.isRequired,
    postAuthor: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    setIsModalOpenN: PropTypes.func,
    blogPage: PropTypes.bool,
    radar: PropTypes.bool,
    isLiked: PropTypes.bool,
    setIsLiked: PropTypes.func,
    draft: PropTypes.bool,
    ask: PropTypes.bool,
    senderName: PropTypes.string,
    notesCount: PropTypes.number
};

export default function Footer(props) {
    const {
        isLiked,
        isAuthor,
        postLink,
        reblogKey,
        postId,
        blogName,
        postAuthor,
        authorAvatar,
        setIsModalOpenN,
        blogPage,
        radar,
        draft,
        setIsLiked,
        ask,
        senderName,
        notesCount
    } = props;
    const [liked, setLiked] = useState(isLiked);
    const [isShareListOpen, setIsShareListOpen] = useState(false);
    const [loveFillColor, setLoveFillColor] = useState(
        `${liked ? 'rgb(255,73,47)' : 'gray'}`
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notesView, setNotesView] = useState(false);
    const [noteType, setNoteType] = useState('');
    const [notes, setNotes] = useState([]);
    const [counts, setCounts] = useState({});
    const [numberNotes, setNumberNotes] = useState(notesCount);
    const [firstLoad, setFirstLoad] = useState(true);
    const { user } = useContext(UserContext);
    //TODO BlogIdentifier1
    const blogIdentifier = 'yahia.tumblr.com';

    const navigate = useNavigate();

    const handleNote = () => {
        setNotesView(prev => !prev);
        if (!notesView) {
            setNoteType('comment');
            getPostNotes(blogIdentifier, setNotes, setCounts, postId);
        }
    };

    useEffect(() => {
        if (firstLoad) {
            setFirstLoad(false);
        } else getPostNotes(blogIdentifier, setNotes, setCounts, postId);
    }, [loveFillColor]);

    useEffect(() => {
        const total =
            counts?.totalLikes + counts?.totalReblogs + counts?.totalReplys;
        setNumberNotes(total ? total : notesCount);
    }, [counts]);

    return (
        <>
            <ClickAwayListener onClickAway={() => setNotesView(false)}>
                <footer
                    data-testid="post-footer-icons-ts"
                    className="post-footer-icons"
                >
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
                                    deletePost(
                                        postId,
                                        setIsModalOpen,
                                        user?.token,
                                        navigate
                                    );
                                }}
                            />
                        </Modal>
                    )}
                    <div
                        data-testid={`notes-count-footer-ts`}
                        className="notes-count"
                    >
                        <span
                            onClick={() => {
                                setNotesView(!notesView);
                                if (!notesView) {
                                    setNoteType('comment');
                                    getPostNotes(
                                        blogIdentifier,
                                        setNotes,
                                        setCounts,
                                        postId
                                    );
                                }
                            }}
                            data-testid={`notes-count-text-ts`}
                        >
                            {numberNotes > 1
                                ? `${numberNotes} notes`
                                : numberNotes === undefined ||
                                  numberNotes === 0 ||
                                  isNaN(numberNotes)
                                ? ''
                                : `${numberNotes} note`}
                        </span>

                        {notesView && (
                            <div
                                data-testid={`notes-view-container-ts`}
                                className="notes-view-container"
                            >
                                <div
                                    data-testid={`notes-view-flex-ts`}
                                    className="notes-view-flex"
                                >
                                    <NotesHeader
                                        numberNotes={numberNotes}
                                        totalLikes={counts?.totalLikes}
                                        totalReblogs={counts?.totalReblogs}
                                        totalReplys={counts?.totalReplys}
                                        setNotesView={setNotesView}
                                        notes={notes && notes}
                                    />
                                    <NotesContent
                                        postAuthor={postAuthor}
                                        authorAvatar={authorAvatar}
                                        notes={notes && notes}
                                        setNotes={setNotes}
                                        setCounts={setCounts}
                                        type={noteType}
                                        setIsModalOpen={setIsModalOpenN}
                                        setNotesView={setNotesView}
                                        postId={postId}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {isShareListOpen && (
                        <div
                            data-testid={`share-options-ts`}
                            className="share-options"
                        >
                            <div
                                data-testid={`options-footer-ts`}
                                className="options"
                            >
                                <div
                                    onClick={() => copyLink(postLink, postId)}
                                    className="list"
                                    data-testid={`list-footer-ts`}
                                >
                                    <div
                                        data-testid={`circled-border-ts`}
                                        className="circled-border"
                                    >
                                        <CopyLink />
                                    </div>
                                    <div
                                        className="opt-btn copy-btn btn"
                                        id={`copy-btn${postId}`}
                                        data-testid={`copy-btn-footer-ts${postId}`}
                                    >
                                        Copy Link
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div
                        data-testid={`footer-icons-ts`}
                        className="footer-icons"
                    >
                        {!blogPage && !ask && (
                            <button
                                onClick={() => copyLink(postLink, postId, true)}
                                className="icon copy-link-cont"
                                data-testid={`share-icon-footer-ts`}
                            >
                                <CopyLink />
                                <div
                                    className="opt-btn copy-btn btn link-copied"
                                    id={`copy-btn${postId}`}
                                    data-testid={`copy-btn-footer-ts${postId}`}
                                ></div>
                            </button>
                        )}
                        {!blogPage && !radar && !ask && (
                            <>
                                {!draft && (
                                    <button
                                        onClick={() => {
                                            handleNote();
                                        }}
                                        className="icon"
                                        data-testid={`note-icon-footer-ts${postId}`}
                                    >
                                        <Note />
                                    </button>
                                )}
                            </>
                        )}
                        {!ask && (
                            <>
                                <button
                                    onClick={() => {
                                        setNoteType('reblog');
                                        navigate(
                                            `/reblog/${blogName}/${postId}/${reblogKey}`
                                        );
                                    }}
                                    className="icon"
                                    data-testid={`reblog-icon-footer${postId}`}
                                >
                                    <ReblogBtn />
                                </button>
                                <button
                                    onClick={() => {
                                        !isLiked
                                            ? handleLikePost(
                                                  setLoveFillColor,
                                                  setIsLiked,
                                                  postId,
                                                  user?.token
                                              )
                                            : handleUnlikePost(
                                                  setLoveFillColor,
                                                  setIsLiked,
                                                  postId,
                                                  user?.token
                                              );
                                    }}
                                    className="icon "
                                    data-testid={`love-icon-footer${postId}`}
                                >
                                    <LoveBtn fillColor={loveFillColor} />
                                </button>
                            </>
                        )}
                        {isAuthor && !ask && (
                            <>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="icon"
                                    data-testid={`delete-footer-icon-ts${postId}`}
                                >
                                    <DeleteBtn />
                                </button>
                                <button
                                    data-testid={`edit-footer-icon-ts${postId}`}
                                    className="icon"
                                    onClick={() =>
                                        navigate(`/edit/${blogName}/${postId}`)
                                    }
                                >
                                    <EditBtn />
                                </button>
                            </>
                        )}
                        {ask && (
                            <>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="icon"
                                    data-testid={`delete-footer-icon-ts${postId}`}
                                >
                                    <DeleteBtn />
                                </button>
                                <button
                                    data-testid={`edit-footer-icon-ts${postId}`}
                                    className="icon post-icon"
                                    onClick={() =>
                                        navigate(
                                            `/inbox/${postId}/${senderName}`
                                        )
                                    }
                                >
                                    Answer
                                </button>
                            </>
                        )}
                    </div>
                </footer>
            </ClickAwayListener>
        </>
    );
}
