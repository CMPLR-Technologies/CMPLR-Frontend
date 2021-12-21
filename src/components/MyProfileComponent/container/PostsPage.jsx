import React from 'react';
import Sidebar from '../container/SideBar';
import CreatePost from '../../createPost/View';
import useInfiniteScrolling from '../../../hooks/useInfiniteScrolling';
import { apiBaseUrl } from '../../../config.json';
import PostComponent from '../../partials/postComponent/containers/PostComponent';
import { LinearProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function PostsPage() {
    const { blogName } = useParams();
    const {
        error,
        data: posts,
        isPending
    } = useInfiniteScrolling(`${apiBaseUrl}/posts/view/${blogName}`);

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
