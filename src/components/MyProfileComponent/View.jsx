import React, { useEffect, useState } from 'react';
import Sidebar from './container/SideBar';
import { useLocation } from 'react-router-dom';
import FollowersPage from './container/FollowersPage';
import PostsPage from './container/PostsPage';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import { apiBaseUrl } from '../../config.json';
import useFetch from '../../hooks/useFetch';

export default function MyProfile() {
    const location = useLocation();
    const [activeSide, setActiveSide] = useState(null);
    useEffect(() => {
        if (location.pathname.includes('/followers')) {
            setActiveSide(3);
        } else {
            setActiveSide(2);
        }
    }, [location.pathname]);

    const {
        error,
        data: posts,
        isPending
    } = useInfiniteScrolling(`${apiBaseUrl}/posts/view/kholdbold`); //change to blogName

    const blogIdentifier = 'kholdbold';
    const {
        errorFollowers,
        data: followers,
        isPendingFollowers
    } = useFetch(`${apiBaseUrl}/blog/${blogIdentifier}/followers`);
    return (
        <div className="dashboard">
            <div className="posts-region">
                {location.pathname.includes('/followers') ? (
                    <FollowersPage response={{ followers, error, isPending }} />
                ) : (
                    <PostsPage
                        response={{ posts, errorFollowers, isPendingFollowers }}
                    />
                )}
            </div>
            <Sidebar
                postLength={posts?.length}
                followersLength={followers?.length}
                activeSide={activeSide && activeSide}
            />
        </div>
    );
}
