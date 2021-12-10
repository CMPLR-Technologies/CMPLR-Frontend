import React, { useContext, useEffect, useState } from 'react';
import CreatePost from '../createPost/View';
import Sidebar from './containers/Sidebar';
import { apiBaseUrl } from '../../config.json';
import PostComponent from '../partials/postComponent/View';
import { UserContext } from '../../contexts/userContext/UserContext';
import Axios from 'axios';

export default function Dashboard() {
    const [response, setResponse] = useState([]);
    const { user } = useContext(UserContext);
    const blogIdentifier = 'yahia.tumbler.com';
    useEffect(() => {
        Axios({
            method: 'GET',
            url: `${apiBaseUrl}/posts`,
            params: {
                'blog-identifier': blogIdentifier
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
                <PostComponent posts={response} userBlogName={user.blogName} />
            </div>
            <Sidebar />
        </div>
    );
}
