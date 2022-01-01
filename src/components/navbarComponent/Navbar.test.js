/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import MessageItem from './containers/navbarLinks/MessagesPopup/MessageItem';
import SearchBar from './containers/searchBar/SearchBar';
import MessagesContainer from './containers/navbarLinks/MessagesPopup/MessagesContainer';
import MockedComponent from '../partials/MockedComponent.jsx';
import AuthLinks from './containers/navbarLinks/links/AuthLinks';
import Notifications from './containers/Notifications/Notifications';

describe('test searchbar', () => {
    it('test type in the searchbar', () => {
        render(<MockedComponent component={<SearchBar />} />);
        const inputElement = screen.getByPlaceholderText('Search Tumblr');
        fireEvent.change(inputElement, { target: { value: 'gaser' } });
        expect(inputElement.value).toBe('gaser');
    });

    it('test search bar to hide results show when no type', () => {
        render(<MockedComponent component={<SearchBar />} />);
        const inputElement = screen.getByPlaceholderText('Search Tumblr');
        fireEvent.change(inputElement, { target: { value: 'gaser' } });
        fireEvent.change(inputElement, { target: { value: '' } });
        const searchBarResultDev = screen.queryByTestId('search-result');
        expect(searchBarResultDev).toBeNull();
    });
});

describe('test message drop down', () => {
    it('new message button', () => {
        render(<MockedComponent component={<MessagesContainer />} />);
        const newMessageButton = screen.getByText('new message');
        expect(newMessageButton).toBeInTheDocument();
    });
    it('should have text', () => {
        render(
            <MockedComponent
                component={
                    <MessageItem
                        sender={'gaser'}
                        receiver={'twix'}
                        message={'hello'}
                        chat={true}
                    />
                }
            />
        );
        const sender = screen.getByText('twix');
        expect(sender).toBeInTheDocument();
    });
    it('should have text in paragraph', () => {
        render(
            <MockedComponent
                component={
                    <MessageItem
                        receiver={'twix'}
                        shortParagrah={'hello'}
                        chat={false}
                    />
                }
            />
        );
        const sender = screen.getByText('twix');
        expect(sender).toBeInTheDocument();
    });
});

const notfResponse = {
    '25-Dec-21': [
        {
            from_blog_id: 7,
            from_blog_name: 'blog3',
            from_blog_avatar:
                'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
            from_blog_avatar_shape: null,
            to_blog_id: 1,
            to_blog_name: 'yousef',
            type: 'reblog',
            seen: false,
            post_ask_answer_id: 11,
            post_ask_answer_content: '<p>kak</p>',
            created_at: '25-Dec-21 02:05:36'
        },
        {
            from_blog_id: 1,
            from_blog_name: 'yousef',
            from_blog_avatar:
                'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
            from_blog_avatar_shape: 'circle',
            to_blog_id: 1,
            to_blog_name: 'yousef',
            type: 'reply',
            seen: true,
            post_ask_answer_id: null,
            post_ask_answer_content: '<h1>fdsfsd</h1>',
            created_at: '25-Dec-21 02:00:27'
        }
    ],
    '24-Dec-21': [
        {
            from_blog_id: 1,
            from_blog_name: 'yousef',
            from_blog_avatar:
                'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
            from_blog_avatar_shape: 'circle',
            to_blog_id: 6,
            to_blog_name: 'atef',
            type: 'like',
            seen: false,
            post_ask_answer_id: null,
            post_ask_answer_content: '<h1>fdsfsd</h1>',
            created_at: '24-Dec-21 02:07:52'
        },
        {
            from_blog_id: 7,
            from_blog_name: 'blog3',
            from_blog_avatar:
                'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
            from_blog_avatar_shape: null,
            to_blog_id: 1,
            to_blog_name: 'yousef',
            type: 'answer',
            seen: false,
            post_ask_answer_id: 12,
            post_ask_answer_content: '<p>dskoekfe</p>',
            created_at: '24-Dec-21 02:06:41'
        },
        {
            from_blog_id: 1,
            from_blog_name: 'yousef',
            from_blog_avatar:
                'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
            from_blog_avatar_shape: 'circle',
            to_blog_id: 1,
            to_blog_name: 'yousef',
            type: 'follow',
            seen: false,
            post_ask_answer_id: 9,
            post_ask_answer_content: null,
            created_at: '24-Dec-21 02:01:15'
        }
    ]
};

describe('test notifications list', () => {
    it('should display notification dropdown on clicking on its icon in navbar', () => {
        render(<MockedComponent component={<AuthLinks />} />);
        const notificationIcon = screen.getByTestId('notifications-btn-ts');
        fireEvent.click(notificationIcon);
        const notificationDropdown = screen.getByTestId(
            'notifications-dropdown-ts'
        );
        expect(notificationDropdown).toBeInTheDocument();
    });

    it('should display notification dropdown on clicking on its icon in navbar', () => {
        render(<MockedComponent component={<AuthLinks />} />);
        const notificationIcon = screen.getByTestId('notifications-btn-ts');
        fireEvent.click(notificationIcon);
        const notificationDropdown = screen.getByTestId(
            'notifications-dropdown-ts'
        );
        expect(notificationDropdown).toBeInTheDocument();
    });

    it('should display dates as passed in response', () => {
        render(
            <MockedComponent
                component={<Notifications notfArray={notfResponse} />}
            />
        );
        const dates = screen.getAllByTestId('notf-date');
        expect(dates).toHaveLength(2);
    });
    it('should display all notifications passed in props', () => {
        render(
            <MockedComponent
                component={<Notifications notfArray={notfResponse} />}
            />
        );
        const notifications = screen.getAllByTestId('notf-body');
        expect(notifications).toHaveLength(5);
    });

    it('should display only reply notifications on clicking on Replys filter in headers then returning all types on clicking on ALl', () => {
        render(
            <MockedComponent
                component={<Notifications notfArray={notfResponse} />}
            />
        );
        const replyFilter = screen.getByTestId('notf-header-replies');
        fireEvent.click(replyFilter);
        const loveReact = screen.queryAllByTestId('love-react-ts');
        const followReact = screen.queryAllByTestId('follow-react-ts');
        const replyReact = screen.queryAllByTestId('reply-react-ts');
        expect(loveReact).toHaveLength(0);
        expect(followReact).toHaveLength(0);
        expect(replyReact).toHaveLength(1);
        const allFilter = screen.getByTestId('notf-header-all');
        fireEvent.click(allFilter);
        const loveReact0 = screen.queryAllByTestId('love-react-ts');
        const followReact0 = screen.queryAllByTestId('follow-react-ts');
        const replyReact0 = screen.queryAllByTestId('reply-react-ts');
        expect(loveReact0).toHaveLength(1);
        expect(followReact0).toHaveLength(1);
        expect(replyReact0).toHaveLength(1);
    });
});
