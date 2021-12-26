import React, { useState, useEffect, useContext } from 'react';
import { LinearProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import Sidebar from '../dashboardComponent/containers/Sidebar';
import SearchForm from './containers/SearchForm';
import ItemList from './containers/ItemList';
import {
    followAccount,
    unfollowAccount,
    getFollowingList,
    blockAccount
} from './Service';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
/**
 * Following Page Component
 * @function FollowingPage
 * @description this is the component which loop on the following list for a given user and get them all to be viewed
 * @returns {Component} the view directly
 */

export default function FollowingPage() {
    const [hasMore, setHasMore] = useState(true);
    const [responseMsg, setResponseMsg] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const [openPopup, setOpenPopup] = useState(false);
    const [search, setSearch] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    const [followingList, setFollowingList] = useState([]);
    const [totalFollowing, setTotalFollowing] = useState(0);
    const [page, setPage] = useState(1);

    const theme = useContext(ThemeContext)[0];
    const css = `
        .IiZ2z {
            color: rgb(${themes[theme]?.white});
        }
    `;

    const handleSearchFollow = () => {
        followAccount(user?.token, search, setResponseMsg);
    };

    const handleUnfollow = unfollowAcc => {
        unfollowAccount(user?.token, unfollowAcc, setResponseMsg);
    };

    const handleBlock = blockAcc => {
        blockAccount(user?.token, blockAcc, setResponseMsg, user?.blogName);
    };

    const handleScroll = () => {
        if (hasMore) {
            getFollowingList(
                setFollowingList,
                followingList,
                user?.token,
                setIsPending,
                setError,
                setTotalFollowing,
                page,
                setPage,
                setHasMore
            );
        }
    };

    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <>
            <style>{css}</style>
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
                        <InfiniteScroll
                            dataLength={followingList?.length} //This is important field to render the next data
                            next={handleScroll}
                            hasMore={hasMore}
                            loader={<LinearProgress />}
                            endMessage={<></>}
                        >
                            <section className="NedHV">
                                {followingList &&
                                    followingList.map((f, i) => {
                                        return (
                                            <ItemList
                                                key={
                                                    f?.blog_id ? f?.blog_id : i
                                                }
                                                setOpenBlock={setOpenPopup}
                                                lastUpdated={
                                                    'Updated 2 minutes ago'
                                                }
                                                profileName={
                                                    f?.blog_name
                                                        ? f?.blog_name
                                                        : 'unknown'
                                                }
                                                handleUnfollow={handleUnfollow}
                                                avatar={f?.avatar}
                                                openPopup={openPopup}
                                                handleBlock={handleBlock}
                                                myBlogName={user?.blogName}
                                            />
                                        );
                                    })}
                                {isPending && <LinearProgress />}
                            </section>
                        </InfiniteScroll>
                    </div>

                    {error && (
                        <div
                            className="no-data-error"
                            style={{ margin: 'auto' }}
                        >
                            {"Couldn't load"}
                        </div>
                    )}
                </div>
                <Sidebar />
            </div>
        </>
    );
}
