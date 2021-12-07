import React from 'react';
import RecommendBlogs from './RecommendBlogs';

export default function Sidebar() {
    return (
        <div className="dashboard-sidebar">
            <h3>Check out these blogs</h3>
            <RecommendBlogs />
            <h3>Radar</h3>
        </div>
    );
}
