import React from 'react';
import CreatePost from '../createPost/View';
import Sidebar from './containers/Sidebar';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
            </div>
            <Sidebar />
        </div>
    );
}
