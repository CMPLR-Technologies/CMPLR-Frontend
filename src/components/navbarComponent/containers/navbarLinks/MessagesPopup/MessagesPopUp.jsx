import React from 'react';
import MessagesContainer from './MessagesContainer';
export default function MessagesPopUp() {
    const darkTheme = false;
    return (
        <div
            data-testid="dropDownMessage"
            className={`popup ${darkTheme ? 'dark ' : ''}`}
        >
            <MessagesContainer />
        </div>
    );
};
