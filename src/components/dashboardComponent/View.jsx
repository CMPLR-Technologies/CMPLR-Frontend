import React, { useContext, useEffect, useState } from 'react';
import CreatePost from '../createPost/View';
import Sidebar from './containers/Sidebar';
import useFetch from '../../hooks/useFetch';
import useAuth from '../../hooks/useAuth';
import { LinearProgress } from '@mui/material';
import { apiBaseUrl } from '../../config.json';
import PostComponent from '../partials/postComponent/View';
import VerifyEmail from '../VerifyEmail/View';
import { UserContext } from '../../contexts/userContext/UserContext';
import Axios from 'axios';

export default function Dashboard() {
    const [response, setResponse] = useState([]);
    const { user } = useContext(UserContext);
    const blogIdentifier = 'yahia.tumbler.com';
    const {
        error,
        data: radarPost,
        isPending
    } = useFetch(`${apiBaseUrl}/radar-post`);
    useAuth();
    useEffect(() => {
        Axios({
            method: 'GET',
            url: `${apiBaseUrl}/posts`,
            params: {
                'blog-identifier': blogIdentifier
            }
        })
            .then(res => {
                if (res.data.Meta.Status === 200) {
                    setResponse(res.data.response.posts);
                }
            })
            .catch(() => {});
    }, []);
    return (
        <div className="dashboard">
            <div className="posts-region">
                <CreatePost />
                <VerifyEmail />
                {error && (
                    <div className="no-data-error">{"Couldn't load"}</div>
                )}
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
