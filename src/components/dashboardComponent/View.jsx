import React from 'react';
import CreatePost from '../createPost/View';
import Sidebar from './containers/Sidebar';
import useFetch from '../../hooks/useFetch';
import useAuth from '../../hooks/useAuth';
import { LinearProgress } from '@mui/material';
import { apiBaseUrl } from '../../config.json';
import PostComponent from '../partials/postComponent/containers/PostComponent';
export default function Dashboard() {
    const {
        error,
        data: radarPost,
        isPending
    } = useFetch(`${apiBaseUrl}/radar-post`);
    useAuth();

    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                {error && <div>{"Couldn't load"}</div>}
                {isPending && <LinearProgress />}
                {radarPost && (
                    <div className="radar-warper">
                        <PostComponent post={radarPost} />
                    </div>
                )}
            </div>
            <Sidebar />
        </div>
    );
}
