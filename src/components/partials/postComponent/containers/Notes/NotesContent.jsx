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
                        />
                    </span>
                    <div className="author-name">
                        <strong>{postAuthor}</strong> posted this
                    </div>
                </div>
                <div className="notes-list">
                    {notes.map((note, key) => (
                        <NotePost
                            key={key}
                            note={note}
                            setIsModalOpen={setIsModalOpen}
                            setNotesView={setNotesView}
                        />
                    ))}
                </div>
            </div>
            <div className="input-area">
                <input
                    className="note-reply"
                    placeholder="type your replay here"
                    value={reply}
                    onChange={e => setReply(e.target.value)}
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
                >
                    Reply
                </button>
            </div>
        </>
    );
}
