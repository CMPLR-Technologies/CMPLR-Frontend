/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../MockedComponent';
import NotesContent from './containers/Notes/NotesContent';
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
describe('Post Notes Component Test', () => {
    it('renders number of notes as passed in response', () => {
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
        const notes = screen.queryByTestId(`notes-count-text-ts`);
        expect(notes.textContent).toBe(
            `${postResponse?.post?.notes_count} notes`
        );
    });
    it('show notes display list when clicking on number of notes', () => {
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
        const notes = screen.queryByTestId(`notes-count-text-ts`);
        fireEvent.click(notes);
        const notesList = screen.queryByTestId(`notes-view-container-ts`);
        expect(notesList).toBeInTheDocument();
    });

    it('hide notes display list when clicking on back button', () => {
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
        const notes = screen.queryByTestId(`notes-count-text-ts`);
        fireEvent.click(notes);
        const notesList = screen.queryByTestId(`notes-view-container-ts`);
        const backBtn = screen.queryByTestId(`close-note-view-btn-ts`);
        fireEvent.click(backBtn);
        expect(notesList).not.toBeInTheDocument();
    });

    it('show number of notes in header as passed in response', () => {
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
        const notes = screen.queryByTestId(`notes-count-text-ts`);
        fireEvent.click(notes);
        const notesCount = screen.queryByTestId(`notes-view-count-ts`);
        expect(notesCount.textContent).toBe(
            `${postResponse?.post?.notes_count} notes`
        );
    });

    it('show post author name in header', () => {
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
        const notes = screen.queryByTestId(`notes-count-text-ts`);
        fireEvent.click(notes);
        const postAuthor = screen.getByTestId(
            `post-author-name-note-content-ts`
        );
        expect(postAuthor.textContent).toBe(`${postResponse?.blog?.blog_name}`);
    });

    it('list all post notes  as passed in props', () => {
        render(
            <MockedComponent
                component={
                    <NotesContent
                        postAuthor="ahmed"
                        type="like"
                        authorAvatar=""
                        notes={notesResponse}
                    />
                }
            />
        );
        const notes = screen.queryAllByTestId(`relative-note-container-ts`);
        expect(notes.length).toBe(notesResponse.length);
    });

    it('display avatar of noters as passed in props', () => {
        render(
            <MockedComponent
                component={
                    <NotesContent
                        postAuthor="ahmed"
                        type="like"
                        authorAvatar="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                        notes={notesResponse}
                    />
                }
            />
        );
        const noteAvatar = screen.queryAllByTestId(`noter-avatar-img-ts`);
        for (let i = 0; i < noteAvatar.length; i++) {
            expect(noteAvatar[i].src).toBe(`${notesResponse[i].avatar}`);
        }
    });

    it('display note content when type is reply', () => {
        render(
            <MockedComponent
                component={
                    <NotesContent
                        postAuthor="ahmed"
                        type="like"
                        authorAvatar="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                        notes={notesResponse}
                    />
                }
            />
        );
        const noteBody = screen.queryAllByTestId(`note-body-ts`);
        for (let i = 0; i < noteBody.length; i++) {
            expect(noteBody[i].textContent).toBe(
                notesResponse[i].content ? `${notesResponse[i].content}` : ''
            );
        }
    });

    it('change value in input field while typing in', () => {
        render(
            <MockedComponent
                component={
                    <NotesContent
                        postAuthor="ahmed"
                        type="like"
                        authorAvatar="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                        notes={notesResponse}
                    />
                }
            />
        );
        const inputField = screen.queryByTestId(`reply-input-field-ts`);
        fireEvent.change(inputField, { target: { value: 'hello' } });
        expect(inputField.value).toBe('hello');
    });

    it('clear input field after submitting note', () => {
        render(
            <MockedComponent
                component={
                    <NotesContent
                        postAuthor="ahmed"
                        type="like"
                        authorAvatar="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                        notes={notesResponse}
                    />
                }
            />
        );
        const inputField = screen.queryByTestId(`reply-input-field-ts`);
        fireEvent.change(inputField, { target: { value: 'hello' } });
        expect(inputField.value).toBe('hello');
        const addNote = screen.queryByTestId(`reply-btn-note-ts`);
        fireEvent.click(addNote);
        const noteAdded = screen.queryByTestId(`reply-input-field-ts`);
        expect(noteAdded.value).toBe('');
    });
});
