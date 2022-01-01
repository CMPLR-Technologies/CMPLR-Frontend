/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../partials/MockedComponent';
import Nav from './containers/Nav';
import Hashtag from './containers/Hashtag';
import Following from './containers/Following';

describe('Testing explore nav', () => {
    it('nav should be visible', () => {
        render(<MockedComponent component={<Nav />} />);
        let element = screen.getByText('For You');
        expect(element).toBeVisible();

        element = screen.getByText('Trending');
        expect(element).toBeVisible();

        element = screen.getByText('Staff Picks');
        expect(element).toBeVisible();
    });
});

describe('Testing Recommended Hashtags List', () => {
    it('hashtag should be visible', () => {
        render(<MockedComponent component={<Hashtag name="test" />} />);
        const element = screen.getByText('test');
        expect(element).toBeVisible();
    });
});

describe('Test Following tags', () => {
    it('show more button', () => {
        render(<MockedComponent component={<Following />} />);
        const element = screen.getByText('Show more tags');
        expect(element).toBeVisible();
    });
});
