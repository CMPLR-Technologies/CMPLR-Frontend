/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeContextProvider } from '../../../contexts/themeContext/ThemeContext';
import UserContextProvider from '../../../contexts/userContext/UserContext';
import ChatContextProvider from '../../../contexts/chatContext/chatContext';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileFull from './containers/ProfileFull';

describe('test Profile Full', () => {
    it('Should show profile full view on right data (blogID, blogName)', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <ProfileFull
                                blogID="17"
                                blogName="de7kuuuuu"
                                content="posts"
                            />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );
        expect(screen.getByTestId('profile-full')).toBeInTheDocument();
    });
});
