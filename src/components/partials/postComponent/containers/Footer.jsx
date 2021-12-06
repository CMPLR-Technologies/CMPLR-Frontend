import React from 'react';
import DeleteBtn from './DeleteBtn.svg';
import EditBtn from './EditBtn.svg';
import LoveBtn from './LoveBtn.svg';
import Note from './Note.svg';
import ReblogBtn from './ReblogBtn.svg';
import ShareBtn from './ShareBtn.svg';

export default function Footer(props) {
    const { numberNotes } = props;
    return (
        <footer className="post-footer-icons">
            <div className="notes-count">
                {numberNotes > 1
                    ? 'notes'
                    : numberNotes === undefined || numberNotes === 0
                    ? ''
                    : 'note'}
            </div>
            <div className="footer-icons">
                <button className="icon">
                    <ShareBtn />
                </button>
                <button className="icon">
                    <Note />
                </button>
                <button className="icon">
                    <ReblogBtn />
                </button>
                <button className="icon">
                    <LoveBtn />
                </button>
                <button className="icon">
                    <DeleteBtn />
                </button>
                <button className="icon">
                    <EditBtn />
                </button>
            </div>
        </footer>
    );
}
