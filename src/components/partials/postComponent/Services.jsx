/* eslint-disable camelcase */
import Axios from 'axios';
import { apiBaseUrl } from '../../../config.json';

//=================================================Footer Services============================================
export function handleLikePost(setLoveFillColor, setIsLiked, postId, token) {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/user/like`,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: {
            id: postId
        }
    })
        .then(res => {
            if (res.status === 200) {
                setLoveFillColor('rgb(255,73,47)');
                setIsLiked(true);
            }
        })
        .catch(() => {});
}

export function handleUnlikePost(setLoveFillColor, setIsLiked, postId, token) {
    Axios({
        method: 'DELETE',
        url: `${apiBaseUrl}/user/unlike`,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: {
            id: postId
        }
    })
        .then(res => {
            if (res.status === 200) {
                setLoveFillColor('gray');
                setIsLiked(false);
            }
        })
        .catch(() => {});
}

export function deletePost(postId, setIsModalOpen, token, navigate) {
    Axios({
        method: 'DELETE',
        url: `${apiBaseUrl}/post/delete/${postId}`,
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.data.meta.status_code === 200) {
                navigate('/empty');
                navigate('/dashboard');
                setIsModalOpen(false);
            }
        })
        .catch(() => {});
}

//=================================================PostComponent Services============================================

export function block(
    blogName,
    userBlogName,
    setIsOptionListOpen,
    setIsModalOpen,
    setIsMsgModalOpen,
    setBlockResponse,
    token
) {
   return  Axios({
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        url: `${apiBaseUrl}/blog/${userBlogName}/blocks`,
        data: {
            blockName: blogName
        }
    })
        .then(res => {
            setIsOptionListOpen(false);
            setIsModalOpen(false);
            setIsMsgModalOpen(true);
            if (res?.data?.meta?.status_code === 200)
                setBlockResponse(`${blogName} has been blocked.`);
        })
        .catch(err => {
            return Promise.reject(err)
          
        });
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
            setNotes(res.data[0].notes);
            let count = {
                totalLikes: res.data[0]['total_likes'],
                totalReblogs: res.data[0]['total_reblogs'],
                totalReplys: res.data[0]['total_replys']
            };
            setCounts(count);
        })
        .catch(() => {});
}

export function submitNote(
    e,
    reply,
    postId,
    blogIdentifier,
    token,
    setNotes = null,
    setCounts = null
) {
    e.preventDefault();
    Axios({
        url: `${apiBaseUrl}/user/post/reply`,
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: {
            post_id: postId,
            reply_text: reply
        }
    })
        .then(() => {
            getPostNotes(blogIdentifier, setNotes, setCounts, postId);
        })
        .catch(() => {});
}
