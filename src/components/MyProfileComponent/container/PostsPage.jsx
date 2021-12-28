import React from 'react';
import CreatePost from '../../createPost/View';
import PostComponent from '../../partials/postComponent/containers/PostComponent';
import { LinearProgress } from '@mui/material';
import NoXAvailable from './NoXAvailable';
import propTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
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
            {!posts.length && !isPending && (
                <NoXAvailable x={draft ? 'drafts' : 'posts'} />
            )}

            {posts.length !== 0 &&
                posts.map((post, index) => {
                    return (
                        <PostComponent
                            key={index}
                            post={post}
                            userBlogName={user?.blogName}
                            draft={draft}
                            isFollowed={draft}
                            radar={!isBigScreen}
                        />
                    );
                })}
            {isPending && <LinearProgress />}
        </>
    );
}
