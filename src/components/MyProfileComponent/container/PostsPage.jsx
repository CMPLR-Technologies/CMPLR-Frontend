import React from 'react';
import Sidebar from '../container/SideBar';
import CreatePost from '../../createPost/View';
import PostComponent from '../../partials/postComponent/containers/PostComponent';
import { LinearProgress } from '@mui/material';
import NoXAvailable from './NoXAvailable';

export default function PostsPage(props) {
    const { posts, isPending, error } = props.response;
    const { draft } = props;
    return (
        <>
            <CreatePost />
            {!posts.length && <NoXAvailable x={draft ? 'drafts' : 'posts'} />}
            {posts.length &&
                posts.map((post, index) => {
                    return (
                        <PostComponent
                            key={index}
                            post={post}
                            userBlogName={post?.blog['blog_name']}
                            draft={draft}
                            isFollowed={draft}
                        />
                    );
                })}
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
        </>
    );
}
