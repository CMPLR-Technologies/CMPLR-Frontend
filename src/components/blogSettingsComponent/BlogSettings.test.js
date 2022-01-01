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
                        <View />
                    </ThemeContextProvider>
                }
            />
        );
        const container = screen.queryByTestId('blog-settings');
        expect(container).toBeInTheDocument();
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View />
                    </ThemeContextProvider>
                }
            />
        );
        const edit = screen.queryByTestId('edit');
        fireEvent.click(edit);
        const version2email = screen.queryByTestId('emailts');
        expect(version2email).toBeInTheDocument();
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View />
                    </ThemeContextProvider>
                }
            />
        );
        const email2 = screen.queryByTestId('switch-input-ts');
        fireEvent.click(email2);
        expect(email2.checked).toEqual(false);
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View />
                    </ThemeContextProvider>
                }
            />
        );
        const email3 = screen.queryByTestId('switch-input-msg-ts');
        fireEvent.click(email3);
        expect(email3.checked).toEqual(false);
    });
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={
                    <ThemeContextProvider>
                        <View />
                    </ThemeContextProvider>
                }
            />
        );
        const email3 = screen.queryByTestId('switch-input-vs-ts');
        fireEvent.click(email3);
        expect(email3.checked).toEqual(false);
    });
});
