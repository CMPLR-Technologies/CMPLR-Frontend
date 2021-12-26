import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const getFollowingList = (
    setFollowingList,
    followingList,
    userToken,
    setIsPending,
    setError,
    setTotalFollowing,
    page,
    setPage,
    setHasMore
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/user/followings?page=${page}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        }
    })
        .then(res => {
            setIsPending(false);
            let newArr = [];
            if (res?.data?.response?.blogs?.length !== 0) {
                newArr = res?.data?.response?.blogs;
            }
            if (res?.data?.response?.blogs?.length < 15) {
                setHasMore(false);
            }
            console.log(res?.data?.response?.blogs);
            setFollowingList([...followingList, ...newArr]);
            setTotalFollowing(
                res?.data?.response?.total_following
                    ? res?.data?.response?.total_following
                    : 0
            );
            const newPage = page + 1;
            setPage(newPage);
        })
        .catch(() => {
            setError(true);
            setIsPending(false);
        });
};

export const followAccount = (userToken, searchedName, setResponseMsg) => {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/user/follow`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        },
        data: {
            blogName: searchedName
        }
    })
        .then(() => {
            setResponseMsg(`you're now following ${searchedName} successfully`);
            return;
        })
        .catch(err => {
            let errMsg = err?.response?.data?.error;
            setResponseMsg(errMsg);
            return;
        });
};

export const unfollowAccount = (userToken, unfollowAcc, setResponseMsg) => {
    Axios({
        method: 'DELETE',
        url: `${apiBaseUrl}/user/follow`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        },
        data: {
            blogName: unfollowAcc
        }
    })
        .then(() => {
            setResponseMsg(`you're not following ${unfollowAcc} anymore`);
            return true;
        })
        .catch(err => {
            let errMsg = err.response.data.error;
            setResponseMsg(errMsg);
            return false;
        });
};

export const blockAccount = (
    userToken,
    blockAcc,
    setResponseMsg,
    userBlogName
) => {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/blog/${userBlogName}/blocks`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        },
        data: {
            blogName: blockAcc
        }
    })
        .then(() => {
            setResponseMsg(`you've blocked ${blockAcc}`);
            return true;
        })
        .catch(err => {
            let errMsg = err?.response?.data?.error;
            setResponseMsg(errMsg);
            return false;
        });
};
