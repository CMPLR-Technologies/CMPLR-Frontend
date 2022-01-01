import React, { useContext } from 'react';
import RecommendBlogs from '../../dashboardComponent/containers/RecommendBlogs';
import Following from './Following';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import useFetch from '../../../hooks/useFetch';
import { apiBaseUrl } from '../../../config.json';

/**
 * Explore Sidebar Component
 * @function ExploreSidebar
 * @description The container for the Explore sidebar
 * @returns {Component} Component that contains create Following component and Recommended blogs
 */

export default function ExploreSidebar() {
    const {
        error: blogsError,
        data,
        isPending: blogsIsPending
    } = useFetch(`${apiBaseUrl}/recommended/blogs?page=1`);
    const theme = useContext(ThemeContext)[0];
    return (
        <div className="explore-sidebar">
            <Following />
            <div
                style={{
                    background: `rgba(${themes[theme].whiteOnDark}, 0.07)`
                }}
            >
                <RecommendBlogs
                    blogsError={blogsError}
                    blogs={data?.blogs}
                    blogsIsPending={blogsIsPending}
                    showExplore={false}
                    otherClass={'explore-recommendedBlogs'}
                />
            </div>
        </div>
    );
}
