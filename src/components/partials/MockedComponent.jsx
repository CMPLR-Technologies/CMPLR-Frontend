import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContextProvider from '../../contexts/userContext/UserContext';
import ChatContextProvider from '../../contexts/chatContext/chatContext';
import { ThemeContextProvider } from '../../contexts/themeContext/ThemeContext';

export default function MockedComponent(props) {
    const { component } = props;
    return (
        <BrowserRouter>
            <UserContextProvider>
                <ChatContextProvider>
                    <ThemeContextProvider> {component}</ThemeContextProvider>
                </ChatContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    );
}

MockedComponent.propTypes = {
    component: PropTypes.element
};
