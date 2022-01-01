/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import RecommendBlogs from './containers/RecommendBlogs';
import MockedComponent from '../partials/MockedComponent';

// mock test data
const blogs = [
    {
        blogName: 'test 1',
        blogDesc: 'test title 1',
        blogIcon: 'test icon 1',
        blogId: '1'
    },
    {
        blogName: 'test 2',
        blogDesc: 'test title 2',
        blogIcon: 'test icon 2',
        blogId: '2'
    }
];

// Recommended blogs tests
describe('Recommended blogs tests', () => {
    it('the recommended blogs in the document', () => {
        render(
            <MockedComponent
                component={
                    <RecommendBlogs
                        blogs={blogs}
                        blogsError={false}
                        blogsIsPending={false}
                        showExplore={true}
                    />
                }
            />
        );
        const element = screen.getByText('Check out these blogs');
        expect(element).toBeVisible();

        const explore = screen.getByText('Explore all of CMPlr');
        expect(explore).toBeVisible();

        const blog = screen.getAllByText('Follow');
        expect(blog[0]).toBeVisible();
    });

    it('render an error message if there is no data', () => {
        render(
            <MockedComponent component={<RecommendBlogs blogsError={true} />} />
        );
        const element = screen.getByText("Couldn't load");
        expect(element).toBeVisible();
    });

    it('the explore button can be hidden', () => {
        render(
            <MockedComponent
                component={<RecommendBlogs showExplore={false} />}
            />
        );
        const element = screen.queryByText('Explore all of CMPlr');
        expect(element).not.toBeInTheDocument();
    });
});
