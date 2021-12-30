import {
    followAccountWithResponse,
    unfollowAccount
} from '../followingComponent/Service';
import { apiBaseUrl } from '../../config.json';
import Axios from 'axios';

export const follow = (setIsFollowed, blogName, setActionRespMessage) => {
    setIsFollowed(
        !followAccountWithResponse(
            JSON.parse(localStorage.getItem('user'))?.token,
            blogName,
            setActionRespMessage
        )
    );
};

export const unFollow = (setIsFollowed, blogName, setActionRespMessage) => {
    setIsFollowed(
        unfollowAccount(
            JSON.parse(localStorage.getItem('user'))?.token,
            blogName,
            setActionRespMessage,
            true
        )
    );
    //isFollowed = false
};

export const block = (blogName, setBlocked, setIsFollowed) => {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/blog/${
            JSON.parse(localStorage.getItem('user'))?.blogName
        }/blocks`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${
                JSON.parse(localStorage.getItem('user'))?.token
            }`
        },
        data: {
            blockName: blogName
        }
    })
        .then(() => {
            setBlocked(true);
            setIsFollowed(false);
        })
        .catch(err => {});
};

export const unBlock = (blogName, setBlocked) => {
    Axios({
        method: 'delete',
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${
                JSON.parse(localStorage.getItem('user'))?.token
            }`
        },
        url: `${apiBaseUrl}/blog/${
            JSON.parse(localStorage.getItem('user'))?.blogName
        }/blocks?blockName=${blogName}`
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 200) {
                setBlocked(false);
            }
        })
        .catch(() => {});
};
