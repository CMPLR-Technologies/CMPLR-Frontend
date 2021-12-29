import React, { useState, useContext } from 'react';
import NotePost from './NotePost';
import PropTypes from 'prop-types';
import { submitNote } from '../../Services';
import {
    ThemeContext,
    themes
} from '../../../../../contexts/themeContext/ThemeContext';

NotesContent.propTypes = {
    postAuthor: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    notes: PropTypes.array,
    setNotes: PropTypes.func,
    setCounts: PropTypes.func,
    setIsModalOpen: PropTypes.func,
    setNotesView: PropTypes.func,
    postId: PropTypes.number
};

export default function NotesContent(props) {
    const theme = useContext(ThemeContext)[0];
    const user = JSON.parse(localStorage.getItem('user'));
    const {
        postAuthor,
        authorAvatar,
        notes,
        setNotes,
        setCounts,
        postId,
        setIsModalOpen,
        setNotesView
    } = props;
    const [reply, setReply] = useState('');
    //TODO BlogIdentifier2
    const blogIdentifier = 'yahia.tumblr.com';

    return (
        <>
            <div className="notes-view-content">
                <div className="post-author">
                    <span className="avatar">
                        <img
                            className="summary-avatar"
                            src={authorAvatar}
                            sizes="24px"
                            alt="Avatar"
                            loading="eager"
                            data-testid={`post-author-note-content-ts`}
                        />
                    </span>
                    <div className="author-name">
                        <strong data-testid={`post-author-note-content-ts`}>
                            {postAuthor}
                        </strong>{' '}
                        posted this
                    </div>
                </div>
                <div className="notes-list">
                    {notes &&
                        notes.map((note, key) => (
                            <NotePost
                                key={key}
                                note={note}
                                setIsModalOpen={setIsModalOpen}
                                setNotesView={setNotesView}
                            />
                        ))}
                </div>
            </div>
            <div data-testid={`input-form-note-ts`} className="input-area">
                <input
                    className="note-reply"
                    style={{ color: 'rgb(' + themes[theme]?.black + ')' }}
                    placeholder="type your replay here"
                    value={reply}
                    onChange={e => setReply(e.target.value)}
                    data-testid={`reply-input-field-ts`}
                />
                <button
                    disabled={reply === ''}
                    onClick={e => {
                        submitNote(
                            e,
                            reply,
                            postId,
                            blogIdentifier,
                            user?.token,
                            setNotes,
                            setCounts
                        );
                        setReply('');
                    }}
                    className="reply-btn btn"
                    data-testid={`reply-btn-note-ts`}
                >
                    Reply
                </button>
            </div>
        </>
    );
}
