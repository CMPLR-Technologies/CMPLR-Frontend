import React from 'react';
import RecommendBlogs from './RecommendBlogs';
import Radar from '../../partials/Radar';

export default function Sidebar() {
    return (
        <div className="dashboard-sidebar">
            <h3>Check out these blogs</h3>
            <RecommendBlogs />
            <Radar />
        </div>
    );
}
