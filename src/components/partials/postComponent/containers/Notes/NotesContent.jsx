import React, { useState } from 'react';
import NotePost from './NotePost';
import PropTypes from 'prop-types';
import { submitNote } from '../../Services';

NotesContent.propTypes = {
    postAuthor: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired,
    notes: PropTypes.array,
    setNotes: PropTypes.func,
    setCounts: PropTypes.func,
    type: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func,
    setNotesView: PropTypes.func
};

export default function NotesContent(props) {
    const {
        postAuthor,
        authorAvatar,
        notes,
        setNotes,
        setCounts,
        type,
        setIsModalOpen,
        setNotesView
    } = props;
    const [reply, setReply] = useState('');
    const blogIdentifier = 'yahia.tumblr.com';
    console.log(notes);

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
                            type,
                            reply,
                            blogIdentifier,
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
