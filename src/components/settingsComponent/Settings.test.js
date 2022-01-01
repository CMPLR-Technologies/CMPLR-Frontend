/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import View from './View';
import MockedComponent from '../partials/MockedComponent.jsx';
import { ThemeContextProvider } from '../../contexts/themeContext/ThemeContext';

describe('Settings Page', () => {
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="account" />
                    </ThemeContextProvider>
                }
            />
        );
        const container = screen.queryByTestId('settings-account');
        expect(container).toBeInTheDocument();
    });
    it('should render one input field', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="dashboard" />
                    </ThemeContextProvider>
                }
            />
        );
        const inputField = screen.queryByTestId('settings-dashboard');
        expect(inputField).toBeInTheDocument();
    });
    it('should render one input field', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="apps" />
                    </ThemeContextProvider>
                }
            />
        );
        const inputField = screen.queryByTestId('settings-apps');
        expect(inputField).toBeInTheDocument();
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="account" />
                    </ThemeContextProvider>
                }
            />
        );
        const edit1 = screen.queryByTestId('edit1');
        fireEvent.click(edit1);
        const version2email = screen.queryByTestId('version2-email');
        expect(version2email).toBeInTheDocument();
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="account" />
                    </ThemeContextProvider>
                }
            />
        );
        const edit2 = screen.queryByTestId('edit2');
        fireEvent.click(edit2);
        const version2password = screen.queryByTestId('version2-password');
        expect(version2password).toBeInTheDocument();
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="account" />
                    </ThemeContextProvider>
                }
            />
        );
        const email2 = screen.queryByTestId('email-activity-check');
        fireEvent.click(email2);
        expect(email2.checked).toEqual(false);
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="account" />
                    </ThemeContextProvider>
                }
            />
        );
        const tfa = screen.queryByTestId('tfa-check');
        fireEvent.click(tfa);
        expect(tfa.checked).toEqual(false);
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="dashboard" />
                    </ThemeContextProvider>
                }
            />
        );
        const sbc = screen.queryByTestId('show-badge-check');
        fireEvent.click(sbc);
        expect(sbc.checked).toEqual(false);
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="dashboard" />
                    </ThemeContextProvider>
                }
            />
        );
        const esc = screen.queryByTestId('msg-sound-check');
        fireEvent.click(esc);
        expect(esc.checked).toEqual(false);
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="dashboard" />
                    </ThemeContextProvider>
                }
            />
        );
        const msc = screen.queryByTestId('endless-scrolling-check');
        fireEvent.click(msc);
        expect(msc.checked).toEqual(false);
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="dashboard" />
                    </ThemeContextProvider>
                }
            />
        );
        const bsfc = screen.queryByTestId('best-stuff-first-check');
        fireEvent.click(bsfc);
        expect(bsfc.checked).toEqual(false);
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View page="dashboard" />
                    </ThemeContextProvider>
                }
            />
        );
        const iftc = screen.queryByTestId('include-followed-tags-check');
        fireEvent.click(iftc);
        expect(iftc.checked).toEqual(false);
    });
});
