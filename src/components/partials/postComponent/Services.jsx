/* eslint-disable camelcase */
import Axios from 'axios';
import { apiBaseUrl } from '../../../config.json';

//=================================================Footer Services============================================
export function handleLikePost(setLoveFillColor, postId, token) {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/user/like`,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: {
            id: 3
        }
    })
        .then(res => {
            if (res.status === 200) {
                setLoveFillColor('rgb(255,73,47)');
            }
        })
        .catch(() => {});
}

export function handleUnlikePost(setLoveFillColor, postId, token) {
    Axios({
        method: 'DELETE',
        url: `${apiBaseUrl}/user/unlike`,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: {
            id: 3
        }
    })
        .then(res => {
            if (res.status === 200) {
                setLoveFillColor('gray');
            }
        })
        .catch(() => {});
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
    })
        .then(res => {
            if (res.data.Meta.Status === 200) {
                setIsModalOpen(false);
            }
        })
        .catch(() => {});
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
    })
        .then(response => {
            if (response.status === 200) {
                setFollowing(false);
                setIsOptionListOpen(false);
            }
        })
        .catch(() => {});
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
    })
        .then(response => {
            if (response.status === 200) setFollowing(true);
        })
        .catch(() => {});
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
    })
        .then(response => {
            if (response.data.meta.status === 200) {
                setIsOptionListOpen(false);
                setIsModalOpen(false);
                setIsMsgModalOpen(true);
            }
        })
        .catch(() => {});
}

//=================================================Notes Services============================================
export function getPostNotes(blogIdentifier, setNotes, setCounts, postId) {
    Axios({
        url: `${apiBaseUrl}/post/notes`,
        method: 'GET',
        params: {
            'blog-identifier': blogIdentifier,
            post_id: postId
        }
    })
        .then(res => {
            // setNotes(res.data.notes);
            // let count = {
            //     totalLikes: res.data['total_likes'],
            //     totalReblogs: res.data['total_reblogs'],
            //     totalReplys: res.data['total_replys']
            // };
            // setCounts(count);

            setNotes(res.data[0][0].notes);
            let count = {
                totalLikes: res.data[0][0]['total_likes'],
                totalReblogs: res.data[0][0]['total_reblogs'],
                totalReplys: res.data[0][0]['total_replys']
            };
            setCounts(count);
        })
        .catch(() => {});
}

export function submitNote(
    e,
    type,
    reply,
    blogIdentifier,
    setNotes = null,
    setCounts = null
) {
    e.preventDefault();
    Axios({
        url: `${apiBaseUrl}/post/notes`,
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: {
            Meta: {
                Status: 200,
                msg: 'OK'
            },
            response: {
                counts: {
                    totalLikes: 3,
                    totalReblogs: 1
                },
                notes: [
                    {
                        type: type,
                        blog_name: 'hazom',
                        blog_url: 'https://hazom.com',
                        followed: true,
                        post_id: 2541652,
                        reblog_parent_blog_name: 'kholdbold',
                        reblog_parent_blog_url: 'https://kholdbold.com',
                        avatar: 'https://64.media.tumblr.com/5d65e6564325029026372d750047aca2/da25d5299e6bc43a-9a/s64x64u_c1/d33411435f6a25c6182f6d780030d659f917766b.jpg',
                        content: reply
                    }
                ]
            }
        }
    })
        .then(() => {
            getPostNotes(blogIdentifier, setNotes, setCounts);
        })
        .catch(() => {});
}
