import React, { useEffect, useState } from 'react';
import Sidebar from './container/SideBar';
import { useLocation } from 'react-router-dom';
import FollowersPage from './container/FollowersPage';
import PostsPage from './container/PostsPage';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import { apiBaseUrl } from '../../config.json';
import useFetch from '../../hooks/useFetch';
import { getFollowersList } from './Service';

export default function MyProfile() {
    const location = useLocation();
    const [activeSide, setActiveSide] = useState(null);
    const blogName = JSON.parse(localStorage.getItem('user'))?.blogName;
    useEffect(() => {
        if (location.pathname.includes('/followers')) {
            setActiveSide(4);
        } else if (location.pathname.includes('/drafts')) {
            setActiveSide(5);
        } else if (location.pathname.includes('/activity')) {
            setActiveSide(3);
        } else {
            setActiveSide(2);
        }
    }, [location.pathname]);

    const {
        error,
        data: posts,
        isPending
    } = useInfiniteScrolling(`${apiBaseUrl}/posts/view/${blogName}`);

    const [isPendingFollowers, setIsPendingFollowers] = useState(true);
    const [errorFollowers, setErrorFollowers] = useState(false);
    const [followers, setFollowers] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [totalFollowing, setTotalFollowing] = useState(0);
    useEffect(() => {
        if (hasMore) {
            getFollowersList(
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
    const drafts = posts.slice();
    const published = posts.slice();
    const {
        error: errorDrafts,
        data: draftss,
        isPending: isPendingDrafts
    } = useInfiniteScrolling(`${apiBaseUrl}/posts/view/${blogName}`); //change to blogName
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
                            posts: drafts.filter(
                                post => post?.post?.state === 'draft'
                            ),
                            errorDrafts,
                            isPendingDrafts
                        }}
                        draft={true}
                    />
                ) : (
                    <PostsPage
                        response={{
                            posts: published.filter(
                                post => post?.post?.state === 'publish'
                            ),
                            error,
                            isPending
                        }}
                        draft={false}
                    />
                )}
            </div>
            <Sidebar
                postLength={
                    published.filter(post => post?.post?.state === 'publish')
                        ?.length
                }
                followersLength={totalFollowing}
                draftsLength={
                    drafts.filter(post => post?.post?.state === 'draft')?.length
                }
                activeSide={activeSide && activeSide}
            />
        </div>
    );
}
