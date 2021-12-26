import React from 'react';
import RecommendBlogs from './RecommendBlogs';
import Radar from '../../partials/Radar';
import useFetch from '../../../hooks/useFetch';
import { apiBaseUrl } from '../../../config.json';
export default function Sidebar() {
    const {
        error: blogsError,
        data: blogs,
        isPending: blogsIsPending
    } = useFetch(`${apiBaseUrl}/recommended-blogs`);
    return (
        <div className="dashboard-sidebar">
            <RecommendBlogs
                blogsError={blogsError}
                blogs={blogs}
                blogsIsPending={false}
                showExplore={blogsIsPending}
            />
            <Radar />
        </div>
    );
}
