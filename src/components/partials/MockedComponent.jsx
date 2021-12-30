import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContextProvider from '../../contexts/userContext/UserContext';
import { ThemeContextProvider } from '../../contexts/themeContext/ThemeContext';
import ChatContextProvider from '../../contexts/chatContext/chatContext';

export default function MockedComponent(props) {
    const { component } = props;
    return (
        <BrowserRouter>
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>{component}</ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    );
}

MockedComponent.propTypes = {
    component: PropTypes.element
};
