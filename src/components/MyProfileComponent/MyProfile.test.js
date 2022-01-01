/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../partials/MockedComponent';
import Sidebar from './container/SideBar';
const postResponse = {
    post: {
        post_id: 1,
        type: 'photos',
        state: 'publish',
        title: 'test title',
        content: '<h1>hello i am ahmed4 </h1>',
        date: 'Friday, 17-Dec-21 23:27:28 UTC',
        source_content: 'google.com',
        tags: ['summer', 'winter'],
        notes_count: 5
    },
    blog: {
        blog_id: 11,
        blog_name: 'ahmed_3',
        avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
        avatar_shape: 'circle',
        replies: 'everyone',
        follower: false
    }
};

const notesResponse = [
    {
        post_id: 3,
        type: 'like',
        content: null,
        timestamp: '2021-12-16T22:36:31.000000Z',
        blog_name: 'yousif',
        blog_url: 'http://localhost\\/blogs\\/yousif',
        avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
        avatar_shape: 'circle'
    },
    {
        post_id: 4,
        type: 'reply',
        content: 'hello',
        timestamp: '2021-12-16T22:36:31.000000Z',
        blog_name: 'yousif',
        blog_url: 'http://localhost\\/blogs\\/yousif',
        avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
        avatar_shape: 'circle'
    }
];

describe('MyProfile Component Test', () => {
    it('render page without any crashes', () => {
        render(
            <MockedComponent
                component={
                    <Sidebar
                        activeSide={0}
                        postLength={3}
                        followersLength={2}
                    />
                }
            />
        );
        const sideBar = screen.queryByTestId('settings-sidebar');
        expect(sideBar).toBeInTheDocument();
    });
    it('render 4 items in sideBar', () => {
        render(
            <MockedComponent
                component={
                    <Sidebar
                        activeSide={0}
                        postLength={3}
                        followersLength={2}
                    />
                }
            />
        );
        const sideBar = screen.queryAllByTestId('list-item-myprofile');
        expect(sideBar).toHaveLength(4);
    });
});
