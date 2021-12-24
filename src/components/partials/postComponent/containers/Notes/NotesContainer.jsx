import React, { useEffect, useState } from 'react';
import { getPostNotes } from '../../Services';
import NotesContent from './NotesContent';
import NotesHeader from './NotesHeader';

export default function NotesContainer(props) {
    const {
        postId,
        loveFillColor,
        postAuthor,
        setNotesView,
        authorAvatar,
        noteType,
        setIsModalOpenN
    } = props;
    const blogIdentifier = 'yahia.tumblr.com';
    const [numberNotes, setNumberNotes] = useState(0);

    useEffect(() => {
        getPostNotes(blogIdentifier, setNotes, setCounts, postId);
    }, [loveFillColor]);

    useEffect(() => {
        setNumberNotes(
            counts?.totalLikes + counts?.totalReblogs + counts?.totalReplys
        );
    }, [counts]);
    return (
        <>
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
        </>
    );
}
