/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../MockedComponent';
import PostComponent from './containers/PostComponent';
const postResponse = {
    post_state: 'published',
    post_id: 13212383,
    blog_id: 123123,
    blog_name: 'Yahia',
    post_type: 'text',
    content: [
        {
            type: 'text',
            title: 'Test Post<br>',
            content: 'Test Content',
            user: {
                name: 'Yahia',
                blogName: 'Yahia'
            }
        }
    ],
    reblog_key: '1253',
    limit: 5,
    parent_blog_id: 12523,
    parent_post_id: 1223,
    post_timestamp: 'December 5th, 7:14 PM',
    post_date: '01:01:11',
    format: 'Rich text',
    blog_avatar:
        'https://64.media.tumblr.com/34dbb7172ea55d286d686911dff23901/66ab0c35f3053a4a-86/s64x64u_c1/91d3bc478c814e17c299e0893f74959aae7c189e.pnj',
    blog_url: 'dddddas',
    blog_email: 'dsadwqda',
    post_link: 'https://theinsaneapp.tumblr.com/post/669080647503101952',
    number_notes: 5,
    layout: [
        {
            type: 'rows',
            display: '[{blocks:[0,1]} , {blocks:[2]}]'
        }
    ],
    tags: ['pain', 'pain-000']
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
        expect(authorAvatar.src).toBe(postResponse['blog_avatar']);
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
        expect(blogName.textContent).toBe(postResponse['blog_name']);
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

    it('render 5 options in the list when post author is not the logged user and does not follow him', () => {
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
        expect(optionList.children.length).toBe(5);
    });

    it('render 6 options in the list when post author is not the logged user and follows him', () => {
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
        const optionList = screen.queryByTestId('list-header-ts');
        expect(optionList.children.length).toBe(6);
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
            `post-time-text-ts${postResponse['post_id']}`
        );
        expect(postDate.textContent).toBe(
            `Posted - ${postResponse['post_timestamp']}`
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
        const blockBtn = screen.queryByTestId(`block-btn-header-ts13212383`);
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
            `close-btn-header-ts${postResponse['post_id']}`
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
            `post-text-title-ts-${postResponse.content[0].title}`
        );

        const bodyContent = screen.queryByTestId(
            `body-content-ts-${postResponse.content[0].title}`
        );

        expect(textTitle.textContent).toBe(`${postResponse.content[0].title}`);
        expect(bodyContent).toBeInTheDocument(
            `${postResponse.content[0].content}`
        );
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
            parseInt(`${postResponse.tags.length}`)
        );
    });

    it('render number notes as passed in post response', () => {
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
        const notesCount = screen.queryByTestId(`notes-count-text-ts`);

        expect(notesCount.textContent).toBe(
            `${postResponse['number_notes']} notes`
        );
    });

    it('render 4 buttons in the footer when post author is not the logged user', () => {
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
                        userBlogName="Yahia"
                    />
                }
            />
        );
        const footerIcons = screen.queryByTestId(`footer-icons-ts`);

        expect(footerIcons.children.length).toBe(6);
    });
    it('shows share options list when clicking on share button', () => {
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
        const shareBtn = screen.queryByTestId('share-icon-footer-ts');
        fireEvent.click(shareBtn);
        const shareOptions = screen.queryByTestId('share-options-ts');
        expect(shareOptions).toBeInTheDocument();
    });
});
