import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const NotesContext = createContext();

export default function NotesContextProvider(props) {
    const [notes, setNotes] = useState({});
    const [counts, setCounts] = useState({});
    return (
        <NotesContext.Provider value={{ notes, setNotes, counts, setCounts }}>
            {props.children}
        </NotesContext.Provider>
    );
}

NotesContextProvider.propTypes = {
    children: PropTypes.any.isRequired
};
