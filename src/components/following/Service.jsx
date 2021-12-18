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

export const followAccount = (userToken, searchedName) => {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            token: userToken,
            searchedName: searchedName
        }
    })
        .then(() => {})
        .catch(() => {});
};

export const unfollowAccount = (userToken, unfollowAcc) => {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            token: userToken,
            unfollowAcc: unfollowAcc
        }
    })
        .then(() => {})
        .catch(() => {});
};
