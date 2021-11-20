/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ForgetPasswordView from './View';
import MockedComponent from '../partials/MockedComponent.jsx';
import ForgetPassword from './containers/ForgetPassword';

describe('Forget Password Page', () => {
    it('should render without crashes', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const container = screen.queryByTestId('forget-password-container');
        expect(container).toBeInTheDocument();
    });

    it('should render one input field', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const inputField = screen.queryByTestId('email-forget-password');
        expect(inputField).toBeInTheDocument();
    });

    it('should display input value entered in input field', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const inputField = screen.queryByTestId('email-forget-password');
        fireEvent.change(inputField, {
            target: { value: 'h@h.com' }
        });
        expect(inputField.value).toBe('h@h.com');
    });

    it('should display error message when entered empty email', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const inputField = screen.queryByTestId('email-forget-password');
        const resetBtn = screen.queryByTestId('reset-password-btn');
        fireEvent.change(inputField, {
            target: { value: '' }
        });
        fireEvent.click(resetBtn);
        const errorMessage = screen.queryByTestId('empty-msg-err');
        expect(errorMessage).toBeInTheDocument();
    });

    it('should display error message when entered email without reCaptcha', () => {
        render(<MockedComponent component={<ForgetPasswordView />} />);
        const inputField = screen.queryByTestId('email-forget-password');
        const resetBtn = screen.queryByTestId('reset-password-btn');
        fireEvent.change(inputField, {
            target: { value: 'aaaa' }
        });
        fireEvent.click(resetBtn);
        const errorMessage = screen.queryByTestId('recapatch-error-msg');
        expect(errorMessage).toBeInTheDocument();
    });

    it('should render reCaptcha', () => {
        render(
            <MockedComponent component={<ForgetPasswordView test={true} />} />
        );
        const recapatch = screen.queryByTestId('recaptcha');
        expect(recapatch).toBeInTheDocument();
    });

    it('should display error message when entered invalid email', () => {
        render(<MockedComponent component={<ForgetPassword test={true} />} />);
        const inputField = screen.queryByTestId('email-forget-password');
        const resetBtn = screen.queryByTestId('reset-password-btn');
        const recapatch = screen.queryByTestId('recaptcha');
        fireEvent.change(inputField, {
            target: { value: 'aaaa' }
        });
        fireEvent.click(recapatch);
        fireEvent.click(resetBtn);
        const errorMessage = screen.getByTestId('invalid-email');
        expect(errorMessage).toBeInTheDocument();
    });

    it('render login page when clicking on cancel button', async () => {
        render(<MockedComponent component={<ForgetPassword test={true} />} />);
        const cancelBtn = screen.queryByTestId('cancel-btn');
        fireEvent.click(cancelBtn);
        expect(window.location.pathname).toBe('/login');
    });
});
