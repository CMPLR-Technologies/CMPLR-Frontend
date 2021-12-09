import React from 'react';
import NotePost from './NotePost';
import PropTypes from 'prop-types';
import ReblogReact from './ReblogReact.svg';

NotesContent.propTypes = {
    postAuthor: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string.isRequired,
    notes: PropTypes.array
};

export default function NotesContent(props) {
    const { postAuthor, authorAvatar, notes } = props;
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
                        <NotePost key={key} note={note} />
                    ))}
                </div>
            </div>
            <div className="input-area">
                <input
                    className="note-reply"
                    placeholder="type your replay here"
                />
                <button className="reply-btn btn">Reply</button>
            </div>
        </>
    );
}
