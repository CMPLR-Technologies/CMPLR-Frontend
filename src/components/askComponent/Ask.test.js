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
        const message = screen.queryByTestId('question');
        fireEvent.change(message, { target: { value: 'Hello' } });
        expect(message.value).toEqual('Hello');
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
        const title = screen.queryByTestId('ask-title');
        fireEvent.click(title);
        const askDiv = screen.queryByTestId('ask-div');
        expect(askDiv).toBeInTheDocument();
    });
});
