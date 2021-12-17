import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext/UserContext';
import { getFollowingList } from './Service';
import { CircularProgress, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../dashboardComponent/containers/Sidebar';
import PostComponent from '../partials/postComponent/View';
import { apiBaseUrl } from '../../config.json';
import useFetch from '../../hooks/useFetch';
/**
 * Following Page Component
 * @function FollowingPage
 * @description this is the component which loop on the following list for a given user and get them all to be viewed
 * @returns {Component} the view directly
 */

export default function FollowingPage() {
    const [followingList, setFollowingList] = useState([]);
    const { user } = useContext(UserContext);
    const [isPending, setIsPending] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [openError, setOpenError] = useState(false);
    const navigate = useNavigate();

    const {
        error,
        data: radarPost,
        isPending0
    } = useFetch(`${apiBaseUrl}/radar-post`);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else if (user && user?.token) {
            getFollowingList(
                setFollowingList,
                user?.token,
                setIsPending,
                setErrorMessage,
                setOpenError
            );
        }
    }, []);

    return (
        <>
            {isPending && (
                <div className="load-circle">
                    <CircularProgress />
                </div>
            )}
            {openError && <div style={{ color: 'red' }}>{errorMessage}</div>}

            <div className="dashboard">
                <div className="posts-region">
                    {error && (
                        <div className="no-data-error">{"Couldn't load"}</div>
                    )}
                    {isPending0 && <LinearProgress />}
                    {radarPost && (
                        <div className="radar-warper">
                            <PostComponent post={radarPost} />
                        </div>
                    )}
                </div>
                <Sidebar />
            </div>
        </>
    );
}
