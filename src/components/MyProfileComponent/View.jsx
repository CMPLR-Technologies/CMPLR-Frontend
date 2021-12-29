import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './container/SideBar';
import { useLocation, useParams } from 'react-router-dom';
import FollowersPage from './container/FollowersPage';
import PostsPage from './container/PostsPage';
import { getBlogPosts, getFollowersList } from './Service';
import ActivityPage from '../activityPageComponent/ActivityPage';
import { chaneMobileView } from '../partials/postComponent/Controller';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
//import { getFollowingList } from '../followingComponent/Service';

export default function MyProfile() {
    const location = useLocation();
    const { blogUrlIdf } = useParams();
    const theme = useContext(ThemeContext)[0];
    const [activeSide, setActiveSide] = useState(null);
    useEffect(() => {
        if (location.pathname.includes('/followers')) {
            setActiveSide(4);
        } else if (location.pathname.includes('/activity')) {
            setActiveSide(3);
        } else {
            setActiveSide(2);
        }
    }, [location.pathname]);

    const [isPendingFollowers, setIsPendingFollowers] = useState(true);
    const [errorFollowers, setErrorFollowers] = useState(false);
    const [followers, setFollowers] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [totalFollowing, setTotalFollowing] = useState(0);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        getFollowersList(
            setFollowers,
            followers,
            user?.token,
            blogUrlIdf,
            setIsPendingFollowers,
            setErrorFollowers,
            setTotalFollowing,
            page,
            setPage,
            setHasMore
        );
        getBlogPosts(blogUrlIdf, user?.token, setPosts, setIsPending);
        chaneMobileView(setMobileView);
    }, [blogUrlIdf, activeSide]);
    window.addEventListener('resize', () => chaneMobileView(setMobileView));
    const user = JSON.parse(localStorage.getItem('user'));
    const handleScroll = () => {
        if (hasMore) {
            getFollowersList(
                setFollowers,
                followers,
                user?.token,
                blogUrlIdf,
                setIsPendingFollowers,
                setErrorFollowers,
                setTotalFollowing,
                page,
                setPage,
                setHasMore
            );
        }
    };

    const css = `
    .follow-search-result {
        color: rgb(${themes[theme].whiteOnDark});
    }
    .followers-num {
        color: rgb(${themes[theme].whiteOnDark});
    }
    .wrapper .list{
        color: rgb(${themes[theme].whiteOnDark});       
        background-color:rgba(${themes[theme].whiteOnDark},);
    }
    .wrapper .list .list-item{
        border-bottom: 1px solid rgba(${themes[theme].white}, 0.07);
    }
    .wrapper .list .list-item:hover {
        background-color:rgba(${themes[theme].whiteOnDark},.07);
        border-bottom: 1px solid rgba(${themes[theme].white}, 0.07);
    }
    .wrapper .list  .clicked {
        background-color:rgba(${themes[theme].whiteOnDark},.07);
        border-bottom: 1px solid rgba(${themes[theme].white}, 0.07);
    }
    .wrapper .list .list-item .list-item-anchor {
        color: #001935;
    }

    .wrapper .list .list-item .list-item-anchor .list-item-span {
        color: rgb(${themes[theme].whiteOnDark},.65);
    }
    .list-item-anchor-small {
        color: rgb(${themes[theme].whiteOnDark},.65);
    }
    .primary,.blog-h1 {
        color: rgb(${themes[theme].whiteOnDark});
        border-bottom: 1.5px solid rgba(${themes[theme].white}, 0.1);
    }

    .followers-list {
        background-color: rgb(${themes[theme].white});
    }
    .name .primary{
        color: rgb(${themes[theme].black})
    }
    .name .secondary {
        color: rgba(${themes[theme].black}, 0.65)
    }

    .not-available {
        background-color: rgba(${themes[theme].white}, 0.07);
         color: rgba(${themes[theme].whiteOnDark},.65);
    }

    .not-available svg {
        fill: rgba(${themes[theme].whiteOnDark},.65);
        }
    `;

    return (
        <>
            <div
                className="dashboard-profile"
                data-testid="dashboard-profile-myprofile"
            >
                <div
                    className="posts-region"
                    data-testid="posts-region-myprofile"
                >
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
                    ) : location.pathname.includes('/activity') ? (
                        <ActivityPage />
                    ) : (
                        <PostsPage
                            mobileView={mobileView}
                            response={{
                                posts: posts.filter(
                                    post => post?.post?.type !== null
                                ),
                                isPending
                            }}
                            draft={false}
                        />
                    )}
                </div>
                {!mobileView && (
                    <Sidebar
                        postLength={
                            posts.filter(post => post?.post?.type !== null)
                                ?.length
                        }
                        followersLength={totalFollowing}
                        activeSide={activeSide && activeSide}
                    />
                )}
            </div>
            <style>{css}</style>
        </>
    );
}
