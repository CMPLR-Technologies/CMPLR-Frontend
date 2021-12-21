import React, { useEffect, useState } from 'react';
import Sidebar from './container/SideBar';
import { useLocation } from 'react-router-dom';
import FollowersPage from './container/FollowersPage';
import PostsPage from './container/PostsPage';

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

    return (
        <div className="dashboard">
            <div className="posts-region">
                {location.pathname.includes('/followers') ? (
                    <FollowersPage />
                ) : (
                    <PostsPage />
                )}
            </div>
            <Sidebar activeSide={activeSide && activeSide} />
        </div>
    );
}
