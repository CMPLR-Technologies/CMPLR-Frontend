import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const getFollowingList = (
    setFollowingList,
    userToken,
    setIsPending,
    setErrorMessage,
    setOpenError
) => {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            token: userToken
        }
    })
        .then(res => {
            setIsPending(false);
            setFollowingList(res.data.response.following);
            return null;
        })
        .catch(err => {
            if (err.response) setErrorMessage(err.response.data.error);
            else setErrorMessage("Couldn't find following users");
            setOpenError(true);
            setIsPending(false);
            return null;
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
