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
            url: `${apiBaseUrl}/post`
        }).then(res => {
            setResponse(res.data);
        });
    }, []);
    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                <PostComponent posts={response} />
            </div>
            <Sidebar />
        </div>
    );
}
