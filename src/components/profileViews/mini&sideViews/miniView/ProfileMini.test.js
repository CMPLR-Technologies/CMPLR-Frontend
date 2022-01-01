/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeContextProvider } from '../../../../contexts/themeContext/ThemeContext';
import UserContextProvider from '../../../../contexts/userContext/UserContext';
import ChatContextProvider from '../../../../contexts/chatContext/chatContext';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileMiniBody from './ProfileMiniBody';
import ProfileMiniImages from './ProfileMiniImages';

const body1 = {
    avatar: '',
    header_image: '',
    blog_name: 'de7kuuuuu',
    title: 'untitled',
    desciption: ''
};
const body2 = {
    avatar: '',
    header_image: '',
    blog_name: 'de7kuuuuu',
    title: 'titled',
    desciption: ''
};

const images1 = [{ link: '', post_id: '' }];

describe('test Profile mini', () => {
    it('Should show blogName if title is untitled', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <ProfileMiniBody body={body1} />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );
        expect(
            screen.getByTestId('profile-mini-body-text-title').textContent
        ).toBe(body1.blog_name);
    });
});

it('Should show title if title is not untitled', () => {
    render(
        <UserContextProvider>
            <ThemeContextProvider>
                <ChatContextProvider>
                    <Router>
                        <ProfileMiniBody body={body2} />
                    </Router>
                </ChatContextProvider>
            </ThemeContextProvider>
        </UserContextProvider>
    );
    expect(screen.getByTestId('profile-mini-body-text-title').textContent).toBe(
        body2.title
    );
});

describe('test Profile mini Images', () => {
    it('Should show not show images if length is less than 3', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <ProfileMiniImages imgs={images1} />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );
        expect(screen.getByTestId('profile-mini-images').textContent).toBe('');
    });
});
