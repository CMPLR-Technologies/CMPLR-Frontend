import React from 'react';
import Sidebar from '../container/SideBar';
import CreatePost from '../../createPost/View';
import PostComponent from '../../partials/postComponent/containers/PostComponent';
import { LinearProgress } from '@mui/material';
import NoXAvailable from './NoXAvailable';

export default function PostsPage(props) {
    const { posts, isPending, error } = props.response;
    const { draft } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <CreatePost />
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
                        />
                    );
                })}
            {isPending && <LinearProgress />}
        </>
    );
}
