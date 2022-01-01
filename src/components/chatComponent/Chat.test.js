/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../partials/MockedComponent';
import ChatMessageItem from './containers/ChatMessageItem';
import ChatOption from './containers/ChatOption';

describe('test chatMessageItem', () => {
    it('test chat message name', () => {
        render(
            <MockedComponent
                component={
                    <ChatMessageItem
                        name={'gaser'}
                        photo={'tst.jpg'}
                        message={'hi'}
                        link={'#'}
                    />
                }
            />
        );
        const divElement = screen.getByText('gaser');
        expect(divElement).toBeInTheDocument();
    });
    it('test chat message message', () => {
        render(
            <MockedComponent
                component={
                    <ChatMessageItem
                        name={'gaser'}
                        photo={'tst.jpg'}
                        message={'hi'}
                        link={'#'}
                    />
                }
            />
        );
        const divElement = screen.getByText('hi');
        expect(divElement).toBeInTheDocument();
    });
    it('test chat message img', () => {
        render(
            <MockedComponent
                component={
                    <ChatMessageItem
                        name={'gaser'}
                        photo={'tst.jpg'}
                        message={'hi'}
                        link={'#'}
                    />
                }
            />
        );
        const imgElement = screen.getByAltText('gaser');
        expect(imgElement.src).toContain('tst.jpg');
    });
});

describe(' test chat option', () => {
    it('test chat option name', () => {
        render(
            <MockedComponent
                component={<ChatOption name={'gaser'} close={() => {}} />}
            />
        );
        const divElement = screen.getByText('Sound setting');
        expect(divElement).toBeInTheDocument();
    });
    it('test chat option name', () => {
        render(
            <MockedComponent
                component={<ChatOption name={'gaser'} close={() => {}} />}
            />
        );
        const divElement = screen.getByText('Delete conversation');
        expect(divElement).toBeInTheDocument();
    });
});
