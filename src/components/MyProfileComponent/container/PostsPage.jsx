import React from 'react';
import Sidebar from '../container/SideBar';
import CreatePost from '../../createPost/View';
import PostComponent from '../../partials/postComponent/containers/PostComponent';
import { LinearProgress } from '@mui/material';

export default function PostsPage(props) {
    const { posts, isPending, error } = props.response;
    return (
        <>
            <CreatePost />
            {posts &&
                posts.map((post, index) => {
                    return (
                        <PostComponent
                            key={index}
                            post={post}
                            userBlogName={post?.blog['blog_name']}
                        />
                    );
                })}
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
        </>
    );
}
