/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../partials/MockedComponent.jsx';
import HashtagView from './containers/Hashtag.jsx';
import MobileHashtagBar from './containers/MobileTopBar.jsx';

describe('Checking props functionality are correct', () => {
    it('test-case-00 on hashtagView component', () => {
        render(
            <MockedComponent
                component={
                    <HashtagView
                        errorFollow={'errorMsgForTest'}
                        tagName={'hazemTag'}
                        isFollower={true}
                        loading={true}
                        isPendingFollow={true}
                    />
                }
            />
        );
        const errorDisplay = screen.getByText('errorMsgForTest');
        const followBtn = screen.getByText('UnFollow');
        const followPending=screen.getByTestId('circular_mui_hashtag');
        const postsPending=screen.getByTestId('loader_mui_hashtag');
        expect(errorDisplay).toBeInTheDocument();
        expect(followBtn).toBeInTheDocument();
        expect(followPending).toBeInTheDocument();
        expect(postsPending).toBeInTheDocument();
        expect(screen.getByText('#hazemTag')).toBeInTheDocument();
    });
});


describe('Checking props functionality are correct', () => {
    it('test-case-00 on hashtagView component', () => {
        render(
            <MockedComponent
                component={
                    <MobileHashtagBar
                        errorFollow={'errorMsgForTest'}
                        tagName={'hazemTag'}
                        isFollower={true}
                        loading={true}
                        isPendingFollow={true}
                    />
                }
            />
        );
        const errorDisplay = screen.getByText('errorMsgForTest');
        const followBtn = screen.getByText('UnFollow');
        const followPending=screen.getByTestId('circular_mui_hashtag0');

        expect(errorDisplay).toBeInTheDocument();
        expect(followBtn).toBeInTheDocument();
        expect(followPending).toBeInTheDocument();

        expect(screen.getByTestId('mobhash_circularProgress')).toBeInTheDocument();
    });
});