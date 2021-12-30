/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import RegisterStepOne from './containers/RegisterStepOne';
import RegisterStepTwo from './containers/RegisterStepTwo';
import MockedComponent from '../partials/MockedComponent.jsx';

const mockedFunction = jest.fn();

describe('testcases for Register StepOne Page', () => {
    render(
        <MockedComponent
            component={
                <RegisterStepOne
                    email=""
                    blogName=""
                    password=""
                    setPassword={mockedFunction}
                    setBlogName={mockedFunction}
                    setEmail={mockedFunction}
                    handleStepOne={mockedFunction}
                />
            }
        />
    );

    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const inputBlogName = screen.getByPlaceholderText(/blog name/i);
    const buttonSignup = screen.getByTitle(/sign up/i);
    const anchorExplore = screen.getByText(/Here's what's trending/i);

    test('checking all inputs/buttons are rendered correctly', () => {
        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(inputBlogName).toBeInTheDocument();
        expect(buttonSignup).toBeInTheDocument();
        expect(anchorExplore).toBeInTheDocument();
    });

    test('checking state managment is working onChange', () => {
        fireEvent.change(inputEmail, { target: { value: 'email' } });
        expect(inputEmail).toHaveValue('email');

        fireEvent.change(inputBlogName, { target: { value: 'blog' } });
        expect(inputBlogName).toHaveValue('blog');

        fireEvent.change(inputPassword, { target: { value: 'pass' } });
        expect(inputPassword).toHaveValue('pass');
    });

    test('checking the email/blog_name/password inputs value is passed right', () => {
        render(
            <MockedComponent
                component={
                    <RegisterStepOne
                        email="hazem@gmail.com"
                        password="pass"
                        blogName="blog0"
                    />
                }
            />
        );
        const inputPassword = screen.getByPlaceholderText(/password/i);
        const inputBlogName = screen.getByPlaceholderText(/blog name/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);
        expect(inputEmail).toHaveValue('hazem@gmail.com');
        expect(inputPassword).toHaveValue('pass');
        expect(inputBlogName).toHaveValue('blog0');
    });

    test('checking the number of text inputs in register step one page', () => {
        render(<MockedComponent component={<RegisterStepOne />} />);
        const inputs = screen.getAllByRole('textbox');
        expect(inputs.length).toBe(2);
    });
});

describe('testcases for Register Page Two ', () => {
    test('renders all inputs/buttons in register step two page', () => {
        render(<MockedComponent component={<RegisterStepTwo />} />);
        const inputAge = screen.getByPlaceholderText(/how old are you?/i);
        expect(inputAge).toBeInTheDocument();
        const buttonNext = screen.getByTitle(/next/i);
        expect(buttonNext).toBeInTheDocument();
        const anchorExplore = screen.getByText(/Here's what's trending/i);
        expect(anchorExplore).toBeInTheDocument();
    });

    test('checking the age inputs value is passed right', () => {
        render(<MockedComponent component={<RegisterStepTwo age={18} />} />);
        const inputAge = screen.getByPlaceholderText(/how old are you?/i);
        expect(inputAge).toHaveValue(18);
    });
});
