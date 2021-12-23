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

export const followAccount = (
    userToken,
    searchedName,
    setResponseMsg,
    setFollowing
) => {
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
            setResponseMsg ??
                setResponseMsg(
                    `you're now following ${searchedName} successfully`
                );
            setFollowing(true);
        })
        .catch(err => {
            let errMsg = err?.response?.data?.error;
            setResponseMsg(errMsg);
        });
};

export const unfollowAccount = (
    userToken,
    unfollowAcc,
    setResponseMsg,
    setFollowing
) => {
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
            setResponseMsg ??
                setResponseMsg(`you're not following ${unfollowAcc} anymore`);
            setFollowing(false);
        })
        .catch(err => {
            let errMsg = err.response.data.error;
            setResponseMsg(errMsg);
        });
};
