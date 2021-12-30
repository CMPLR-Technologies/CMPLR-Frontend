import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const getIsFollowed = (tagName, token, setToFollow) => {
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
            setToFollow(!res?.data?.is_follower);
        })
        .catch(() => {});
};

export const followHashtag = (tagName, token) => {
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
        .then(() => {})
        .catch(() => {});
};

export const unfollowHashtag = (tagName, token) => {
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
        .then(() => {})
        .catch(() => {});
};
