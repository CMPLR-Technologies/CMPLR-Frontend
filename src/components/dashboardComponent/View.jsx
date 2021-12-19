import React, { useState, useRef, useCallback } from 'react';
import CreatePost from '../createPost/View';
import Sidebar from './containers/Sidebar';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import useAuth from '../../hooks/useAuth';
import { LinearProgress } from '@mui/material';
import { apiBaseUrl } from '../../config.json';
import PostComponent from '../partials/postComponent/containers/PostComponent';
import VerifyEmail from '../VerifyEmail/View';

export default function Dashboard() {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: posts,
        isPending,
        hasMore
    } = useInfiniteScrolling(`${apiBaseUrl}/user/dashboard?page=${pageNumber}`);

    useAuth();
    const observer = useRef();
    const lastPostElementRef = useCallback(
        node => {
            if (isPending) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber(prevPageNumber => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isPending, hasMore]
    );
    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                <VerifyEmail />
                {posts &&
                    posts.map((post, index) => {
                        if (posts.length === index + 1) {
                            return (
                                <div ref={lastPostElementRef}>
                                    <PostComponent
                                        key={index}
                                        post={post}
                                        userBlogName={post?.blog['blog_name']}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <PostComponent
                                    key={index}
                                    post={post}
                                    userBlogName={post?.blog['blog_name']}
                                />
                            );
                        }
                    })}

                {error && (
                    <div className="no-data-error">{"Couldn't load"}</div>
                )}
                {isPending && <LinearProgress />}
            </div>
            <Sidebar />
        </div>
    );
}
