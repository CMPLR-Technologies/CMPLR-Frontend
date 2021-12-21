import React, { useState, useEffect } from 'react';
import SearchBar from '../../navbarComponent/containers/searchBar/SearchBar';
import { apiBaseUrl } from '../../../config.json';
import useFetch from '../../../hooks/useFetch';
import { LinearProgress } from '@mui/material';

export default function FollowersPage() {
    const blogIdentifier = 'yaia';
    const {
        error,
        data: followers,
        isPending
    } = useFetch(`${apiBaseUrl}/blog/${blogIdentifier}/followers`);
    return (
        <>
            {isPending && <LinearProgress />}
            <div className="search-area">
                <span className="followers-num">
                    {`${followers?.length} `}Followers
                </span>
                <SearchBar placeHolder="Search your followers" />
            </div>
            <div className="followers-list">
                {followers?.map((follower, index) => (
                    <div key={index} className="follower">
                        <div className="avatar">
                            <img
                                className="avatar-img"
                                src={follower?.avatar}
                                alt="Avatar"
                                loading="eager"
                            />
                        </div>
                        <div className="name">
                            <span className="primary">
                                {follower?.followerName}
                            </span>
                            <span className="secondary">
                                {follower?.blogName}
                            </span>
                        </div>
                        {!follower?.isFollowed && (
                            <button className="follow-btn btn">Follow</button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
