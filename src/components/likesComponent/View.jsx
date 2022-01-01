import React, { useState, useContext } from 'react';
import Sidebar from '../dashboardComponent/containers/Sidebar';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import VerticalPostsView from '../partials/VerticalPostsView';
import { apiBaseUrl } from '../../config.json';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';
import { useMediaQuery } from 'react-responsive';

/**
 * Likes Page Main Component
 * @function LikedBlogs
 * @description The page to show the liked posts by a user
 * @returns {Component} Component that a vertical posts view for liked posts with the main side bar
 */

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
    const isBigScreen = useMediaQuery({
        query: '(min-device-width: 960px )'
    });

    return (
        <div className="dashboard">
            <div className="posts-region">
                {!error && !isPending && (
                    <div
                        className="total-likes"
                        style={{
                            color: `rgb(${themes[theme].whiteOnDark})`,
                            textAlign: isBigScreen ? 'start' : 'center',
                            marginLeft: isBigScreen ? '85px' : '0px'
                        }}
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
                    isRadar={!isBigScreen}
                    isRef={true}
                />
            </div>
            <Sidebar />
        </div>
    );
}
