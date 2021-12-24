import React, { useEffect, useState } from 'react';
import Sidebar from './container/SideBar';
import { useLocation } from 'react-router-dom';
import FollowersPage from './container/FollowersPage';
import PostsPage from './container/PostsPage';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import { apiBaseUrl } from '../../config.json';
import useFetch from '../../hooks/useFetch';
import { getFollowingList } from '../followingComponent/Service';

export default function MyProfile() {
    const location = useLocation();
    const [activeSide, setActiveSide] = useState(null);
    useEffect(() => {
        if (location.pathname.includes('/followers')) {
            setActiveSide(3);
        } else if (location.pathname.includes('/drafts')) {
            setActiveSide(4);
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
    const [isPendingFollowers, setIsPendingFollowers] = useState(true);
    const [errorFollowers, setErrorFollowers] = useState(false);
    const [followers, setFollowers] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [totalFollowing, setTotalFollowing] = useState(0);
    useEffect(() => {
        if (hasMore) {
            getFollowingList(
                setFollowers,
                followers,
                user?.token,
                setIsPendingFollowers,
                setErrorFollowers,
                setTotalFollowing,
                page,
                setPage,
                setHasMore
            );
        }
    }, []);

    const {
        error: errorDrafts,
        data: drafts,
        isPending: isPendingDrafts
    } = useInfiniteScrolling(`${apiBaseUrl}/posts/view/kholdbold`); //change to blogName
    const user = JSON.parse(localStorage.getItem('user'));
    const handleScroll = () => {
        if (hasMore) {
            getFollowingList(
                setFollowers,
                followers,
                user?.token,
                setIsPendingFollowers,
                setErrorFollowers,
                setTotalFollowing,
                page,
                setPage,
                setHasMore
            );
        }
    };
    return (
        <div className="dashboard">
            <div className="posts-region">
                {location.pathname.includes('/followers') ? (
                    <FollowersPage
                        response={{
                            followers,
                            errorFollowers,
                            isPendingFollowers
                        }}
                        hasMore={hasMore}
                        handleScrole={handleScroll}
                    />
                ) : location.pathname.includes('/drafts') ? (
                    <PostsPage
                        response={{
                            posts: drafts,
                            errorDrafts,
                            isPendingDrafts
                        }}
                        draft={true}
                    />
                ) : (
                    <PostsPage response={{ posts, error, isPending }} />
                )}
            </div>
            <Sidebar
                postLength={posts?.length}
                followersLength={totalFollowing}
                draftsLength={drafts?.length}
                activeSide={activeSide && activeSide}
            />
        </div>
    );
}
