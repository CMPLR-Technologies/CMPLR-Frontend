/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeContextProvider } from '../../../../../contexts/themeContext/ThemeContext';
import UserContextProvider from '../../../../../contexts/userContext/UserContext';
import ChatContextProvider from '../../../../../contexts/chatContext/chatContext';
import AccountPopupHeader from './Seperators/AccountPopupHeader';
import AccountPopupActions from './Actions/AccountPopupActions';
import { BrowserRouter as Router } from 'react-router-dom';

describe('test Shortcut Overlay', () => {
    it('Should show confiramtion message on log out button', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <AccountPopupHeader />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );
        const LogOutButton = screen.getByTestId('LogOutButton');
        fireEvent.click(LogOutButton);
        const LogOutOverlay = screen.getByTestId('LogOutOverlay');
        expect(LogOutOverlay).toBeInTheDocument();
    });
    it('Should Should show shortcuts on click on shortcuts button and cancel only on click outside of shortcut container', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <AccountPopupActions />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );
        const ViewShortcutsButton = screen.getByTestId('ViewShortcuts');
        fireEvent.click(ViewShortcutsButton);
        const OverlayArea = screen.getByTestId('OverlayDiv');
        const OverlayContainer = screen.getByTestId('OverlayContainer');
        fireEvent.click(OverlayArea);
        expect(OverlayContainer).not.toBeInTheDocument();
    });
    it('Should Should show shortcuts on click on shortcuts button and not cancel on click inside of shortcut container', () => {
        render(
            <UserContextProvider>
                <ThemeContextProvider>
                    <ChatContextProvider>
                        <Router>
                            <AccountPopupActions />
                        </Router>
                    </ChatContextProvider>
                </ThemeContextProvider>
            </UserContextProvider>
        );
        const ViewShortcutsButton = screen.getByTestId('ViewShortcuts');
        fireEvent.click(ViewShortcutsButton);
        const ShortcutsContainer = screen.getByTestId('ShortcutsContainer');
        const OverlayContainer = screen.getByTestId('OverlayContainer');
        fireEvent.click(ShortcutsContainer);
        expect(OverlayContainer).toBeInTheDocument();
    });
});