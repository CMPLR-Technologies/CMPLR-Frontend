import { LinearProgress } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostComponent from '../partials/postComponent/containers/PostComponent';
import SidebarTag from './containers/SidebarTag';
import {
    followHashtag,
    getHashtagData,
    getHashtagInfo,
    unfollowHashtag
} from './Service';
import MobileHashtagBar from './containers/MobileTopBar';
import { UserContext } from '../../contexts/userContext/UserContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';

export default function Hashtag() {
    const { tag } = useParams();
    const { user } = useContext(UserContext);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isFollower, setIsFollower] = useState(false);
    const [totalFollowers, setTotalFollowers] = useState(0);
    const [loadingHashtag, setLoadingHashtag] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(false);
    const [recommendedTags, setRecommendedTags] = useState([]);
    const [isPendingFollow, setIsPendingFollow] = useState(false);
    const [errorFollow, setErrorFollow] = useState('');
    const theme = useContext(ThemeContext)[0];

    const css = `
        .YOf31 {
            color: rgb(${themes[theme]?.whiteOnDark});
        }
        .Wo4gS {
            color: rgb(${themes[theme]?.whiteOnDark});
        }
        .spanTaghandler {
            color: rgb(${themes[theme]?.whiteOnDark});
        }
        .spanTaghandler:hover{
            background-color: rgb(${themes[theme]?.navy}) !important;
            color: rgb(${themes[theme]?.accent}) !important;}
        }
        .sNQra{
            color:rgb(${themes[theme]?.navy});
        }
        .kckjF{
            color:rgb(${themes[theme]?.whiteOnDark});
        }
        .endOftheposts{
            color:rgb(${themes[theme]?.whiteOnDark});
        }
        .CrU4O{
            color: rgb(${themes[theme]?.whiteOnDark});
        }
        .WdYx4{
            color: rgb(${themes[theme]?.navy});
            background: rgb(${themes[theme]?.accent});
        }
        .p4DiZ{
            border-bottom: 1px solid rgb(${themes[theme]?.white});
        }
        .uM3pd{
            color: rgb(${themes[theme]?.whiteOnDark});
        }
        .ZN143{
            background-color:rgb(${themes[theme]?.whiteOnDark},0.07);
        }
        .errorAlertInFollow{
            color: rgb(${themes[theme]?.whiteOnDark});
        }
    `;

    const handleScroll = () => {
        if (hasMore) {
            getHashtagData(
                tag,
                setPosts,
                setIsPending,
                setError,
                setPage,
                page,
                setHasMore,
                posts,
                user?.token
            );
        }
    };

    const handleFollowHashtag = (tagName, isFollowReq) => {
        setIsPendingFollow(true);
        if (isFollowReq) {
            followHashtag(
                tagName,
                setIsFollower,
                setIsPendingFollow,
                setErrorFollow,
                user?.token,
                navigate
            );
        } else {
            unfollowHashtag(
                tagName,
                setIsFollower,
                setIsPendingFollow,
                setErrorFollow,
                user?.token,
                navigate
            );
        }
    };

    useEffect(() => {
        handleScroll();
        getHashtagInfo(
            tag,
            user?.token,
            setLoadingHashtag,
            setIsFollower,
            setTotalFollowers,
            setRecommendedTags,
            setTotalPosts
        );
    }, []);

    return (
        <>
            <style>{css}</style>
            <MobileHashtagBar
                loading={loadingHashtag}
                totalPosts={totalPosts}
                totalFollowers={totalFollowers}
                isFollower={isFollower}
                tagName={tag}
                recommendedTags={recommendedTags}
                handleFollowHashtag={handleFollowHashtag}
                isPendingFollow={isPendingFollow}
                errorFollow={errorFollow}
            />
            <div className="dashboard">
                <div className="posts-region">
                    <InfiniteScroll
                        dataLength={posts?.length} //This is important field to render the next data
                        next={handleScroll}
                        hasMore={hasMore}
                        loader={<LinearProgress />}
                        endMessage={<p></p>}
                        style={{ overflow: 'hidden' }}
                    >
                        {posts &&
                            posts?.map((post, index) => {
                                if (posts.length === index + 1) {
                                    return (
                                        <div>
                                            <PostComponent
                                                key={index}
                                                post={post}
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <PostComponent
                                            key={index}
                                            post={post}
                                        />
                                    );
                                }
                            })}

                        {error && (
                            <div className="no-data-error">
                                {"Couldn't load"}
                            </div>
                        )}
                        {isPending && <LinearProgress />}
                    </InfiniteScroll>
                </div>
                <SidebarTag
                    loading={loadingHashtag}
                    totalPosts={totalPosts}
                    totalFollowers={totalFollowers}
                    isFollower={isFollower}
                    tagName={tag}
                    recommendedTags={recommendedTags}
                    handleFollowHashtag={handleFollowHashtag}
                    isPendingFollow={isPendingFollow}
                    errorFollow={errorFollow}
                />
            </div>
        </>
    );
}
