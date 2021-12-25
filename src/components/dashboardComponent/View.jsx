import React, { useContext, useEffect, useState } from 'react';
import CreatePost from '../createPost/View';
import Sidebar from './containers/Sidebar';
import useFetch from '../../hooks/useFetch';
import useAuth from '../../hooks/useAuth';
import { LinearProgress } from '@mui/material';
import { apiBaseUrl } from '../../config.json';
import VerifyEmail from '../VerifyEmail/View';
import { UserContext } from '../../contexts/userContext/UserContext';
import Axios from 'axios';
import ProfileMiniHoverWrapper from '../profileViews/mini&sideViews/View';

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
                <ProfileMiniHoverWrapper blogID={'16'}>
                    <span>lol</span>
                </ProfileMiniHoverWrapper>
            </div>
            <Sidebar />
        </div>
    );
}
