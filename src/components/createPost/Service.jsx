/* eslint-disable camelcase */
import { validatePosting } from './Controller';
import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const handlePosting = (bodyData, handleClose, token) => {
    let errors = validatePosting(bodyData?.title, bodyData?.content);
    if (errors?.length > 0) {
        return { status: false, err: errors };
    } else {
        Axios({
            method: 'POST',
            url: `${apiBaseUrl}/posts`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: bodyData
        })
            .then(res => {
                handleClose(); //redirect to dahsboard
                return res;
            })
            .catch(err => {
                return err;
            });
    }
};

export function fetchPost(
    postId,
    blogName,
    setPost,
    edit,
    setTitlePost,
    setContent,
    token
) {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/edit/${blogName}/${postId}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.data.meta.status_code === 200) {
                setPost(res.data.response);
                if (edit === true) {
                    setTitlePost(res.data.response.post.title);
                    setContent(res.data.response.post.content);
                }
            }
        })
        .catch(() => {});
}

export function editPost(postId, blogName, dataBody, navigate, token) {
    Axios({
        method: 'PUT',
        url: `${apiBaseUrl}/update/${blogName}/${postId}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: dataBody
    })
        .then(res => {
            navigate('/dashboard');
            return res;
        })
        .catch(() => {});
}

export function reblogPost(post, comment, navigate, token) {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/posts/reblog`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: {
            id: post['post_id'],
            reblog_key: post['reblog_key'],
            comment: comment
        }
    })  
        .then(res => {
            navigate('/dashboard');
            return res;
        })
        .catch(() => {});
}
