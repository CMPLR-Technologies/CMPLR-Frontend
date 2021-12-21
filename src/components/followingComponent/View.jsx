import React, { useState, useContext, useEffect } from 'react';

import { LinearProgress } from '@mui/material';

import Sidebar from '../dashboardComponent/containers/Sidebar';
import SearchForm from './containers/SearchForm';
import ItemList from './containers/ItemList';
import PopupBlock from './containers/PopupBlock';
import { UserContext } from '../../contexts/userContext/UserContext';
import { followAccount, unfollowAccount, getFollowingList } from './Service';
/**
 * Following Page Component
 * @function FollowingPage
 * @description this is the component which loop on the following list for a given user and get them all to be viewed
 * @returns {Component} the view directly
 */

export default function FollowingPage() {
    const [responseMsg, setResponseMsg] = useState('');
    const { user } = useContext(UserContext);
    const [openPopup, setOpenPopup] = useState(false);
    const [search, setSearch] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
    const [followingList, setFollowingList] = useState([]);
    const [totalFollowing, setTotalFollowing] = useState(0);

    const handleSearchFollow = () => {
        followAccount(user?.token, search, setResponseMsg);
    };
    const handleUnfollow = unfollowAcc => {
        unfollowAccount(user?.token, unfollowAcc, setResponseMsg);
    };
    const handleBlock = () => {};

    const handleScroll = e => {
        const scrollTop = e.target.documentElement.scrollTop;
        const scrollHeight = e.target.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        if (windowHeight + scrollTop + 10 >= scrollHeight) {
            getFollowingList(
                setFollowingList,
                followingList,
                user?.token,
                setIsPending,
                setResponseMsg,
                setTotalFollowing
            );
        }
    };

    useEffect(() => {
        getFollowingList(
            setFollowingList,
            followingList,
            user?.token,
            setIsPending,
            setError,
            setTotalFollowing
        );
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="dashboard">
                <div className="lSyOz">
                    <div className="rmkqO">
                        <h1 className="IiZ2z">{totalFollowing} Following</h1>
                        <SearchForm
                            search={search}
                            setSearch={setSearch}
                            handleSearchFollow={handleSearchFollow}
                        />
                        {responseMsg !== '' && (
                            <span className="span_error_styles_following">
                                {responseMsg}
                            </span>
                        )}
                        <section className="NedHV">
                            <ItemList
                                setOpenBlock={setOpenPopup}
                                lastUpdated={'Updated 2 minutes ago'}
                                profileName={'profile-name'}
                                handleUnfollow={handleUnfollow}
                            />
                        </section>
                    </div>
                    {followingList &&
                        followingList.map((f, i) => {
                            return (
                                <ItemList
                                    key={i}
                                    setOpenBlock={setOpenPopup}
                                    lastUpdated={'Updated 2 minutes ago'}
                                    profileName={'profile-name'}
                                    handleUnfollow={handleUnfollow}
                                    followingInfo={f}
                                />
                            );
                        })}

                    {error && (
                        <div
                            className="no-data-error"
                            style={{ margin: 'auto' }}
                        >
                            {"Couldn't load"}
                        </div>
                    )}
                    {isPending && <LinearProgress />}
                </div>
                <Sidebar />
            </div>
            <PopupBlock
                open={openPopup}
                setOpen={setOpenPopup}
                handleBlock={handleBlock}
                myBlogName={'my-profile'}
                profileName={'your-profile'}
            />
        </>
    );
}
