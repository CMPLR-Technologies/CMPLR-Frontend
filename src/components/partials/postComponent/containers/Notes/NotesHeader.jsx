import React from 'react';
import { Link } from 'react-router-dom';
import Close from './Close.svg';
import ConversationSubscribe from './ConversationSubscribe.svg';
import ViewTagsBtn from './ViewTagsBtn.svg';
import PropsTypes from 'prop-types';
import ReblogReact from './ReblogReact.svg';
import LoveReact from './LoveReact.svg';
import CommentReact from './CommentReact.svg';

NotesHeader.propTypes = {
    numberNotes: PropsTypes.number,
    totalLikes: PropsTypes.number,
    totalReblogs: PropsTypes.number,
    totalReplys: PropsTypes.number,
    setNotesView: PropsTypes.func,
    notes: PropsTypes.array
};

export default function NotesHeader(props) {
    const {
        numberNotes,
        totalLikes,
        totalReblogs,
        totalReplys,
        setNotesView,
        notes
    } = props;
    return (
        <header className="notes-view-header">
            <div className="notes-view-header-icons">
                <button
                    onClick={() => setNotesView(false)}
                    className="close-note-view btn"
                >
                    <Close />
                </button>
                <span className="notes-view-count">
                    {numberNotes > 1
                        ? `${numberNotes} notes`
                        : numberNotes === undefined ||
                          numberNotes === 0 ||
                          isNaN(numberNotes)
                        ? ''
                        : `${numberNotes} note`}
                </span>
                {/* TODO check this with back end  */}
            </div>

            <button className="notes-summary btn">
                <span className="notes-summary-flex">
                    <div className="notes-summary-avatars">
                        {notes &&
                            notes.map((note, key) => (
                                <div
                                    key={key}
                                    className="notes-summary-avatars-react"
                                >
                                    <Link
                                        to={`/blog/view`}
                                        className="summary-avatar-link"
                                    >
                                        <img
                                            className="summary-avatar"
                                            src={note.avatar}
                                            sizes="24px"
                                            alt="Avatar"
                                            loading="eager"
                                        />
                                    </Link>
                                    <div className="avatar-react">
                                        {note.type === 'reblog' ? (
                                            <ReblogReact />
                                        ) : note.type === 'like' ? (
                                            <LoveReact />
                                        ) : (
                                            <CommentReact />
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="notes-summary-count">
                        {totalLikes ? `${totalLikes} likes , ` : ''}
                        {totalReblogs ? `${totalReblogs} reblogs and ` : ''}
                        {totalReplys ? `${totalReplys} replys` : ''}{' '}
                    </div>
                </span>
            </button>
        </header>
    );
}
