import React, { useState, useRef, useCallback, useContext } from 'react';

import { LinearProgress } from '@mui/material';

import Sidebar from '../dashboardComponent/containers/Sidebar';
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import SearchForm from './containers/SearchForm';
import ItemList from './containers/ItemList';
import PopupBlock from './containers/PopupBlock';
import { UserContext } from '../../contexts/userContext/UserContext';
import { followAccount, unfollowAccount } from './Service';
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
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState('');

    const handleSearchFollow = () => {
        followAccount(user?.token, search, setResponseMsg);
    };
    const handleUnfollow = unfollowAcc => {
        unfollowAccount(user?.token, unfollowAcc, setResponseMsg);
    };
    const handleBlock = () => {};

    const {
        error,
        data: followingList,
        isPending,
        hasMore
    } = useInfiniteScrolling(
        `${apiBaseUrl}/following?_page=${pageNumber}&_limit=15`
    );

    const observer = useRef();
    const lastPostElementRef = useCallback(
        node => {
            if (isPending) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber(prevPageNumber => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isPending, hasMore]
    );

    return (
        <>
            <div className="dashboard">
                <div className="lSyOz">
                    <div className="rmkqO">
                        <h1 className="IiZ2z">31 Following</h1>
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
                        followingList.map((post, index) => {
                            if (followingList.length === index + 1) {
                                return <div ref={lastPostElementRef}></div>;
                            } else {
                                return <></>;
                            }
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
