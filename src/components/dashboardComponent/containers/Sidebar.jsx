import React from 'react';
import RecommendBlogs from './RecommendBlogs';
import Radar from '../../partials/Radar';
export default function Sidebar() {
    return (
        <div className="dashboard-sidebar">
            <RecommendBlogs />
            <Radar />
        </div>
    );
}
