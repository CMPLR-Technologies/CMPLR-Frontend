/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../MockedComponent';
import PostComponent from './containers/PostComponent';
const postResponse = {
    post: {
        post_id: 1,
        type: 'photos',
        state: 'publish',
        title: 'test title',
        content: '<h1>hello i am ahmed4 </h1>',
        date: 'Friday, 17-Dec-21 23:27:28 UTC',
        source_content: 'google.com',
        tags: ['summer', 'winter']
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

describe('Post Component Test', () => {
    it('render post component without crashes', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const postWrapper = screen.queryByTestId('post-wrapper-ts');
        expect(postWrapper).toBeInTheDocument();
    });

    it('render author avatar passed in post response', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const authorAvatar = screen.queryByTestId('avatar-img-ts');
        expect(authorAvatar.src).toBe(postResponse?.blog['avatar']);
    });

    it('render author blog name passed in post response', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const blogName = screen.queryByTestId('post-heading-ts');
        expect(blogName.textContent).toBe(postResponse?.blog['blog_name']);
    });

    it('render follow button if isFollowed is false', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={false}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const followBtn = screen.queryByTestId('follow-btn-header-ts');
        expect(followBtn).toBeInTheDocument();
    });

    it('render follow button if isFollowed is false', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={false}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const followBtn = screen.queryByTestId('follow-btn-header-ts');
        expect(followBtn).toBeInTheDocument();
    });

    it('does not render follow button if isFollowed is true', () => {
        const postResponse2 = {
            post: {
                post_id: 1,
                type: 'photos',
                state: 'publish',
                title: 'test title',
                content: '<h1>hello i am ahmed4 </h1>',
                date: 'Friday, 17-Dec-21 23:27:28 UTC',
                source_content: 'google.com',
                tags: ['summer', 'winter']
            },
            blog: {
                blog_id: 11,
                blog_name: 'ahmed_3',
                avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
                avatar_shape: 'circle',
                replies: 'everyone',
                follower: true
            }
        };
        render(
            <MockedComponent
                component={
                    <PostComponent post={postResponse2} userBlogName="blog1" />
                }
            />
        );
        const followBtn = screen.queryByTestId('follow-btn-header-ts');
        expect(followBtn).not.toBeInTheDocument();
    });

    it('render option button', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const optionBtn = screen.queryByTestId('opt-btn-header-ts');
        expect(optionBtn).toBeInTheDocument();
    });

    it('render option list when clicking option button', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const optionBtn = screen.queryByTestId('opt-btn-header-ts');
        fireEvent.click(optionBtn);
        const optionList = screen.queryByTestId('options-list-header-ts');
        expect(optionList).toBeInTheDocument();
    });

    it('render 4 options in the list when post author is the logged user', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="Yahia"
                    />
                }
            />
        );
        const optionBtn = screen.queryByTestId('opt-btn-header-ts');
        fireEvent.click(optionBtn);
        const optionList = screen.queryByTestId('list-header-ts');
        expect(optionList.children.length).toBe(4);
    });

    it('render 4 options in the list when post author is not the logged user and does not follow him', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={false}
                        userBlogName="Yaia"
                    />
                }
            />
        );
        const optionBtn = screen.queryByTestId('opt-btn-header-ts');
        fireEvent.click(optionBtn);
        const optionList = screen.queryByTestId('list-header-ts');
        expect(optionList.children.length).toBe(4);
    });

    it('render 5 options in the list when post author is not the logged user and follows him', () => {
        const postResponse2 = {
            post: {
                post_id: 1,
                type: 'photos',
                state: 'publish',
                title: 'test title',
                content: '<h1>hello i am ahmed4 </h1>',
                date: 'Friday, 17-Dec-21 23:27:28 UTC',
                source_content: 'google.com',
                tags: ['summer', 'winter']
            },
            blog: {
                blog_id: 11,
                blog_name: 'ahmed_3',
                avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
                avatar_shape: 'circle',
                replies: 'everyone',
                follower: true
            }
        };
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse2}
                        isFollowed={true}
                        userBlogName="Yaia"
                    />
                }
            />
        );
        const optionBtn = screen.queryByTestId('opt-btn-header-ts');
        fireEvent.click(optionBtn);
        const optionList = screen.queryByTestId('list-header-ts');
        expect(optionList.children.length).toBe(5);
    });

    it('render post date as passed in props', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="Yaia"
                    />
                }
            />
        );
        const optionBtn = screen.queryByTestId('opt-btn-header-ts');
        fireEvent.click(optionBtn);
        const postDate = screen.queryByTestId(
            `post-time-text-ts${postResponse?.post['post_id']}`
        );
        expect(postDate.textContent).toBe(
            `Posted - ${postResponse?.post['date']}`
        );
    });

    it('render modal message when click block button', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="Yaia"
                    />
                }
            />
        );
        const optionBtn = screen.queryByTestId('opt-btn-header-ts');
        fireEvent.click(optionBtn);
        const blockBtn = screen.queryByTestId(
            `block-btn-header-ts${postResponse?.post['post_id']}`
        );
        fireEvent.click(blockBtn);
        const modal = screen.queryByTestId('modal-ts');
        expect(modal).toBeInTheDocument();
    });

    it('close options list when click close button', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="Yahia"
                    />
                }
            />
        );
        const optionBtn = screen.queryByTestId('opt-btn-header-ts');
        fireEvent.click(optionBtn);
        const closeBtn = screen.queryByTestId(
            `close-btn-header-ts${postResponse?.post['post_id']}`
        );
        fireEvent.click(closeBtn);
        const optionList = screen.queryByTestId('list-header-ts');
        expect(optionList).not.toBeInTheDocument();
    });

    it('render text title and content as passed in post response content', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const textTitle = screen.queryByTestId(
            `post-text-title-ts-${postResponse?.post?.title}`
        );

        const bodyContent = screen.queryByTestId(
            `body-content-ts-${postResponse?.post?.title}`
        );

        expect(textTitle.textContent).toBe(`${postResponse?.post?.title}`);
        expect(bodyContent).toBeInTheDocument(`${postResponse?.post?.content}`);
    });

    it('render tags as passed in post response', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const tags = screen.queryByTestId(`tags-cont-ts`);

        expect(tags.children.length).toEqual(
            parseInt(`${postResponse?.post?.tags.length}`)
        );
    });

    it('render 4 buttons in the footer when post author is not the logged user', () => {
        const postResponse2 = {
            post: {
                post_id: 1,
                type: 'photos',
                state: 'publish',
                title: 'test title',
                content: '<h1>hello i am ahmed4 </h1>',
                date: 'Friday, 17-Dec-21 23:27:28 UTC',
                source_content: 'google.com',
                tags: ['summer', 'winter']
            },
            blog: {
                blog_id: 11,
                blog_name: 'ahmed_3',
                avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
                avatar_shape: 'circle',
                replies: 'everyone',
                follower: true
            }
        };
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse2}
                        isFollowed={true}
                        userBlogName="blog1"
                    />
                }
            />
        );
        const footerIcons = screen.queryByTestId(`footer-icons-ts`);

        expect(footerIcons.children.length).toBe(4);
    });

    it('render 6 buttons in the footer when post author is the logged user', () => {
        render(
            <MockedComponent
                component={
                    <PostComponent
                        post={postResponse}
                        isFollowed={true}
                        userBlogName="ahmed_3"
                    />
                }
            />
        );
        const footerIcons = screen.queryByTestId(`footer-icons-ts`);

        expect(footerIcons.children.length).toBe(6);
    });
});
