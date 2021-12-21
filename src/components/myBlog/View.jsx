import React from 'react';
import CreatePost from '../createPost/View';
import { useParams } from 'react-router-dom';
import Sidebar from '../dashboardComponent/containers/Sidebar';

export default function MyBlog() {
    const { blogName } = useParams();

    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                {blogName}
            </div>
            <Sidebar />
        </div>
    );
}
