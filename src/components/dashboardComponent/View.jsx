import React, { useEffect, useState } from 'react';
import CreatePost from '../createPost/View';
import Sidebar from './containers/Sidebar';
import { apiBaseUrl } from '../../config.json';
import PostComponent from '../partials/postComponent/View';
import Axios from 'axios';

export default function Dashboard() {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        Axios({
            method: 'GET',
            url: `${apiBaseUrl}/posts`,
            params: {
                'blog-identifier': 'blog-identifier'
            }
        }).then(res => {
            if (res.data.Meta.Status === 200) {
                setResponse(res.data.response.posts);
            }
        });
    }, []);
    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                <PostComponent posts={response} userBlogName="kholbold" />
            </div>
            <Sidebar />
        </div>
    );
}
