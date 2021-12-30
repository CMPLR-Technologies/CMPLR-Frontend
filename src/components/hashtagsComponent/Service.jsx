import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';
import { checkIfAuthenticated } from './Controller';

export const getHashtagData = (
    tagName,
    setPosts,
    setIsPending,
    setError,
    setPage,
    page,
    setHasMore,
    posts
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/post/tagged?tag=${tagName}&page=${page}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then(res => {
            setIsPending(false);
            let newArr = [];
            if (res?.data?.post?.length !== 0) {
                newArr = res?.data?.post;
            }
            if (res?.data?.post?.length < 15) {
                setHasMore(false);
            }
            setPosts([...posts, ...newArr]);
            let p = page + 1;
            setPage(p);
            setError(false);
        })
        .catch(err => {
            setIsPending(false);
            setError(err?.data?.error ? err?.data?.error : "couldn't load");
        });
};

export const getHashtagInfo = (
    tagName,
    token,
    setLoadingHashtag,
    setIsFollower,
    setTotalFollowers,
    setRecommendedTags,
    setTotalPosts
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/tag/info?tag=${tagName}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            setLoadingHashtag(false);

            setIsFollower(res?.data?.is_follower);
            setTotalFollowers(res?.data?.total_followers);
            setTotalPosts(res?.data?.total_posts);
            if (res?.data?.tags && res?.data?.tags?.length > 0) {
                setRecommendedTags(res?.data?.tags);
            }
        })
        .catch(() => {
            setLoadingHashtag(false);
            //setError(true);
        });
};

export const followHashtag = (
    tagName,
    setIsFollower,
    setIsPending,
    setError,
    token,
    navigate
) => {
    if (!checkIfAuthenticated(token)) {
        navigate('/login');
    } else {
        Axios({
            method: 'POST',
            url: `${apiBaseUrl}/user/tags/add`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: {
                // eslint-disable-next-line camelcase
                tag_name: tagName
            }
        })
            .then(() => {
                setIsPending(false);
                setIsFollower(true);
                setError(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err?.data?.error ? err?.data?.error : "couldn't load");
            });
    }
};

export const unfollowHashtag = (
    tagName,
    setIsFollower,
    setIsPending,
    setError,
    token,
    navigate
) => {
    if (!checkIfAuthenticated(token)) {
        navigate('/login');
    } else {
        Axios({
            method: 'DELETE',
            url: `${apiBaseUrl}/user/tags/remove?tag_name=${tagName}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: {
                // eslint-disable-next-line camelcase
                tag_name: tagName
            }
        })
            .then(() => {
                setIsPending(false);
                setIsFollower(false);
                setError(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err?.data?.error ? err?.data?.error : "couldn't load");
            });
    }
};
