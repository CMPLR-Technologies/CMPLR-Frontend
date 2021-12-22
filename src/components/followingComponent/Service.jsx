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
    setPage
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/user/followings?page=${page ? page : 1}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        }
    })
        .then(res => {
            setIsPending(false);
            let newArr = [];
            console.log('response:', res?.data?.response);
            if (res?.data?.response?.blogs?.length !== 0) {
                newArr = res?.data?.response?.blogs;
            }
            setFollowingList([...followingList, ...newArr]);
            setTotalFollowing(
                res?.data?.response?.total_following
                    ? res?.data?.response?.total_following
                    : 0
            );
            setPage(res?.data?.response?.next_page);
            console.log(res?.data?.response?.next_page, 'current Page res');
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
        })
        .catch(err => {
            let errMsg = err?.response?.data?.error;
            setResponseMsg(errMsg);
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
        })
        .catch(err => {
            let errMsg = err.response.data.error;
            setResponseMsg(errMsg);
        });
};
