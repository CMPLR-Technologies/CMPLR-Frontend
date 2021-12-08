import Axios from 'axios';
import { apiBaseUrl } from '../../../config.json';

//=================================================Footer Services============================================
export function handleLikePost(
    loveFillColor,
    setLoveFillColor,
    postId,
    reblogKey
) {
    const url =
        loveFillColor === 'gray'
            ? `${apiBaseUrl}/user/like`
            : `${apiBaseUrl}/user/unlike`;
    Axios({
        method: 'POST',
        url: url,
        headers: {
            'content-type': 'application/json'
        },
        data: {
            id: postId,
            reblogKey: reblogKey
        }
    }).then(res => {
        if (res.status === 201) {
            setLoveFillColor(
                loveFillColor === 'gray' ? 'rgb(255,73,47)' : 'gray'
            );
        }
    });
}

export function deletePost(postId, setIsModalOpen) {
    Axios({
        method: 'DELETE',
        url: `${apiBaseUrl}/post/delete`,
        headers: {
            'content-type': 'application/json'
        },
        data: {
            id: postId
        }
    }).then(res => {
        if (res.data.Meta.Status === 200) {
            setIsModalOpen(false);
        }
    });
}

//=================================================PostComponent Services============================================
export function unfollow(blogUrl, setFollowing, setIsOptionListOpen) {
    Axios({
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        url: `${apiBaseUrl}/user/unfollow`,
        data: {
            url: blogUrl
        }
    }).then(response => {
        if (response.status === 200) {
            setFollowing(false);
            setIsOptionListOpen(false);
        }
    });
}
export function follow(blogUrl, blogEmail, setFollowing) {
    Axios({
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        url: `${apiBaseUrl}/user/follow`,
        data: {
            url: blogUrl,
            email: blogEmail
        }
    }).then(response => {
        if (response.status === 201) setFollowing(true);
    });
}

export function block(
    blogIdentifier,
    setIsOptionListOpen,
    setIsModalOpen,
    setIsMsgModalOpen
) {
    Axios({
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        url: `${apiBaseUrl}/blog/${blogIdentifier}/blocks`
    }).then(response => {
        if (response.data.meta.status === 200) {
            setIsOptionListOpen(false);
            setIsModalOpen(false);
            setIsMsgModalOpen(true);
        }
    });
}
