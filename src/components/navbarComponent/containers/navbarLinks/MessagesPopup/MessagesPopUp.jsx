import React from 'react';
import MessagesContainer from './MessagesContainer';
const MessagesPopUp = () => {
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

export default MessagesPopUp;
