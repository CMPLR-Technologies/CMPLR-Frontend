import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const getFollowingList = (
    setFollowingList,
    followingList,
    userToken,
    setIsPending,
    setError,
    setTotalFollowing
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/following?limit=20&offset=${followingList?.length}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        }
    })
        .then(res => {
            setIsPending(false);
            let newArr = [];
            if (res?.data?.response?.following?.length) {
                newArr = res?.data?.response?.following;
            }
            setFollowingList([...followingList, ...newArr]);
            setTotalFollowing(res?.data?.response?.following?.total);
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
