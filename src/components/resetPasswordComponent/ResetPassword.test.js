/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../partials/MockedComponent.jsx';
import ForgetPasswordView from './View';

describe('Forget Password Page', () => {
    it('should render without crashes', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const container = screen.queryByTestId('reset-password-container');
        expect(container).toBeInTheDocument();
    });

    it('should render three input field', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const inputField = screen.getAllByTestId('input-labels');
        expect(inputField.length).toBe(3);
    });

    it('should display error message when enter empty password field', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const passwordField = screen.queryByPlaceholderText('New Password');
        const resetPasswordButton = screen.queryByTestId(
            'button-reset-password'
        );
        fireEvent.change(passwordField, { target: { value: '' } });
        fireEvent.click(resetPasswordButton);
        const errorMessage = screen.queryByTestId('message-error');
        expect(errorMessage).toBeInTheDocument();
    });

    it('should display error message when enter empty confirm password field', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const passwordField = screen.queryByPlaceholderText(
            'Confirm new password'
        );
        const resetPasswordButton = screen.queryByTestId(
            'button-reset-password'
        );
        fireEvent.change(passwordField, { target: { value: '' } });
        fireEvent.click(resetPasswordButton);
        const errorMessage = screen.queryByTestId('message-error');
        expect(errorMessage).toBeInTheDocument();
    });

    it('should display error message when enter not matched passwords', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const passwordField = screen.queryByPlaceholderText('New Password');
        const confirmPasswordField = screen.queryByPlaceholderText(
            'Confirm new password'
        );
        const resetPasswordButton = screen.queryByTestId(
            'button-reset-password'
        );
        fireEvent.change(passwordField, { target: { value: '123456789' } });
        fireEvent.change(confirmPasswordField, {
            target: { value: '123456879' }
        });
        fireEvent.click(resetPasswordButton);
        const errorMessage = screen.queryByTestId('message-error');
        expect(errorMessage).toBeInTheDocument();
    });

    it('should not display any error message when enter  matched passwords', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const passwordField = screen.queryByPlaceholderText('New Password');
        const confirmPasswordField = screen.queryByPlaceholderText(
            'Confirm new password'
        );
        const resetPasswordButton = screen.queryByTestId(
            'button-reset-password'
        );
        fireEvent.change(passwordField, { target: { value: '123456789' } });
        fireEvent.change(confirmPasswordField, {
            target: { value: '123456789' }
        });
        fireEvent.click(resetPasswordButton);
        const errorMessage = screen.queryByTestId('message-error');
        expect(errorMessage).not.toBeInTheDocument();
    });
});
