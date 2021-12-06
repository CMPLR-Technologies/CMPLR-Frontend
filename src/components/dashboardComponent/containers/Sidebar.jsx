import React from 'react';
import BlogInfo from './BlogInfo';

export default function Sidebar() {
    return (
        <div className="dashboard-sidebar">
            <h3>Check out these blogs</h3>
            <div className="dashboard-recommend-blogs">
                <BlogInfo />
                <BlogInfo />
                <BlogInfo />
                <BlogInfo />
                <a className="explore-link" href="/explore">
                    Explore all of Tumblr
                </a>
            </div>
        </div>
    );
}
