import React from 'react';
import CreatePost from '../../createPost/View';
import PostComponent from '../../partials/postComponent/containers/PostComponent';
import { LinearProgress } from '@mui/material';
import NoXAvailable from './NoXAvailable';
import propTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

/**
 * @function PostsPage
 * @description This component is responsible for rendering the posts page.
 * @param {object} response - The response from server containg posts array and bool to check if the response is sent or not.
 * @param {array} response.posts - The posts array.
 * @param {bool} response.isPending - The bool to check if the response is sent or not.
 * @param {bool} hasMore - The bool to check if there are more posts to load.
 * @param {function} handleScroll - function to handle the scroll event to load more posts if exists.
 * @param {mobileView} mobileView - The bool to check if the screen is mobile or not.
 * @returns {React.Component} - Returns a component.
 */

PostsPage.propTypes = {
    response: propTypes.object,
    hasMore: propTypes.bool,
    handleScroll: propTypes.func,
    draft: propTypes.bool,
    mobileView: propTypes.bool
};

export default function PostsPage(props) {
    const { posts, isPending } = props.response;
    const { draft, mobileView } = props;
    const isBigScreen = useMediaQuery({
        query: '(min-device-width: 960px )'
    });
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            {!mobileView && <CreatePost />}
            {!posts?.length && !isPending && (
                <NoXAvailable x={draft ? 'drafts' : 'posts'} />
            )}
            {posts?.length !== 0 &&
                posts?.map((post, index) => {
                    return (
                        <PostComponent
                            key={index}
                            post={post}
                            userBlogName={user?.blogName}
                            draft={draft}
                            isFollowed={draft}
                            radar={!isBigScreen}
                            ask={post?.post?.type === null}
                            senderName="kak"
                        />
                    );
                })}
            {isPending && <LinearProgress />}
        </>
    );
}
