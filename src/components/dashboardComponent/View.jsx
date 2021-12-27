import React, { useState } from 'react';
import CreatePost from '../createPost/View';
import VerifyEmail from '../verifyEmail/View';
import VerticalPostsView from '../partials/VerticalPostsView';
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import Sidebar from './containers/Sidebar';
import { useMediaQuery } from 'react-responsive';

export default function Dashboard() {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: posts,
        isPending,
        hasMore
    } = useInfiniteScrolling(`${apiBaseUrl}/user/dashboard?page=${pageNumber}`);
    const isBigScreen = useMediaQuery({
        query: '(min-device-width: 960px )'
    });

    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                <VerifyEmail />
                <div className="dashboard-container-grid">
                    <VerticalPostsView
                        posts={posts}
                        error={error}
                        isPending={isPending}
                        hasMore={hasMore}
                        setPageNumber={setPageNumber}
                        isRadar={!isBigScreen}
                        isRef={true}
                    />
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
