import React, { useState } from 'react';
import CreatePost from '../createPost/View';
import RecommendBlogs from './containers/RecommendBlogs';
import Radar from '../partials/Radar';
// import VerifyEmail from '../verifyEmail/View';
import VerticalPostsView from '../partials/VerticalPostsView';
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import useFetch from '../../hooks/useFetch';

export default function Dashboard() {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: posts,
        isPending,
        hasMore
    } = useInfiniteScrolling(`${apiBaseUrl}/user/dashboard?page=${pageNumber}`);

    const {
        error: blogsError,
        data: blogs,
        isPending: blogsIsPending
    } = useFetch(`${apiBaseUrl}/recommended-blogs`);

    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                {/* <VerifyEmail /> */}
                <VerticalPostsView
                    posts={posts}
                    error={error}
                    isPending={isPending}
                    hasMore={hasMore}
                    setPageNumber={setPageNumber}
                />
            </div>
            <div className="dashboard-sidebar">
                <RecommendBlogs
                    blogsError={blogsError}
                    blogs={blogs}
                    blogsIsPending={blogsIsPending}
                />
                <Radar />
            </div>
        </div>
    );
}
