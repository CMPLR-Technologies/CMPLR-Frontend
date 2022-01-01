/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeContextProvider } from '../../../../contexts/themeContext/ThemeContext';
import UserContextProvider from '../../../../contexts/userContext/UserContext';
import ChatContextProvider from '../../../../contexts/chatContext/chatContext';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileSide from './ProfileSide';

const body1 = {
    avatar: '',
    header_image: '',
    blog_name: 'de7kuuuuu',
    title: 'untitled',
    desciption: '',
    is_followed: false,
    is_blocked: true
};
const body2 = {
    avatar: '',
    header_image: '',
    blog_name: 'de7kuuuuu',
    title: 'titled',
    desciption: '',
    is_followed: false,
    is_blocked: false
};
const body3 = {
    avatar: '',
    header_image: '',
    blog_name: 'de7kuuuuu',
    title: 'untitled',
    desciption: '',
    is_followed: false,
    is_blocked: false
};

describe('test Profile Side', () => {
    it('Should show error message if user is blocked', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <ProfileSide
                                body={body1}
                                blogID="17"
                                sidePostID="68"
                            />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );

        expect(
            screen.getByTestId('profile-side-header-blocked')
        ).toBeInTheDocument();
    });
});
describe('test Profile Side', () => {
    it('Should show content if not blocked', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <ProfileSide
                                body={body2}
                                blogID="17"
                                sidePostID="68"
                            />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );

        expect(
            screen.getByTestId('profile-side-header-text')
        ).toBeInTheDocument();
    });
});

describe('test Profile Side', () => {
    it('Should show blogName if title is untitled', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <ProfileSide
                                body={body3}
                                blogID="17"
                                sidePostID="68"
                            />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );
        expect(
            screen.getByTestId('profile-side-header-text-title').textContent
        ).toBe(body3.blog_name);
    });
});

it('Should show title if title is not untitled', () => {
    render(
        <UserContextProvider>
            <ThemeContextProvider>
                <ChatContextProvider>
                    <Router>
                        <ProfileSide body={body2} blogID="17" sidePostID="68" />
                    </Router>
                </ChatContextProvider>
            </ThemeContextProvider>
        </UserContextProvider>
    );
    expect(
        screen.getByTestId('profile-side-header-text-title').textContent
    ).toBe(body2.title);
});
