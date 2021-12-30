import React from 'react';
import RecommendBlogs from './RecommendBlogs';
import Radar from '../../partials/Radar';
import useFetch from '../../../hooks/useFetch';
import { apiBaseUrl } from '../../../config.json';
export default function Sidebar() {
    const {
        error: blogsError,
        data,
        isPending: blogsIsPending
    } = useFetch(`${apiBaseUrl}/recommended/blogs?page=1`);
    return (
        <div className="dashboard-sidebar">
            <RecommendBlogs
                blogsError={blogsError}
                blogs={data?.blogs}
                blogsIsPending={false}
                showExplore={blogsIsPending}
            />
            <Radar />
        </div>
    );
}
