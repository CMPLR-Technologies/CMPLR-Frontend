import React, { useState, useContext } from 'react';
import Sidebar from '../dashboardComponent/containers/Sidebar';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import VerticalPostsView from '../partials/VerticalPostsView';
import { apiBaseUrl } from '../../config.json';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';

export default function LikedBlogs() {
    const theme = useContext(ThemeContext)[0];
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: posts,
        isPending,
        hasMore,
        total
    } = useInfiniteScrolling(`${apiBaseUrl}/user/likes?page=${pageNumber}`);

    return (
        <div className="dashboard">
            <div className="posts-region">
                {!error && !isPending && (
                    <div
                        className="total-likes"
                        style={{ color: `rgb(${themes[theme].whiteOnDark})` }}
                    >
                        {total} likes
                    </div>
                )}
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
