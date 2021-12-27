import React, { useState } from 'react';
import CreatePost from '../createPost/View';
import VerifyEmail from '../VerifyEmail/View';
import VerticalPostsView from '../partials/VerticalPostsView';
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import Sidebar from './containers/Sidebar';

export default function Dashboard() {
    const [pageNumber, setPageNumber] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [response, setResponse] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const user = JSON.parse(localStorage.getItem('user'));
    const blogIdentifier = 'yahia.tumbler.com';
    const {
        error,
        data: posts,
        isPending,
        hasMore
    } = useInfiniteScrolling(`${apiBaseUrl}/user/dashboard?page=${pageNumber}`);

    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                <VerifyEmail />
                <VerticalPostsView
                    posts={posts}
                    error={error}
                    isPending={isPending}
                    hasMore={hasMore}
                    setPageNumber={setPageNumber}
                    isRadar={false}
                    isRef={true}
                />
            </div>
            <Sidebar />
        </div>
    );
}
