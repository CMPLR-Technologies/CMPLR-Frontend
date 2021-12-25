/* eslint-disable camelcase */
import { validatePosting } from './Controller';
import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const handlePosting = (bodyData, handleClose, token, setSpinnerPost) => {
    let errors = validatePosting(bodyData?.title, bodyData?.content);
    if (errors?.length > 0) {
        return { status: false, err: errors };
    } else {
        console.log('data to sent ', bodyData);
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
                setSpinnerPost(false);
                handleClose(); //redirect to dahsboard
                return res;
            })
            .catch(err => {
                setSpinnerPost(false);
                console.log(err.data);
                return err;
            });
    }
};

export function fetchPost(
    postId,
    setPost,
    edit,
    setTitlePost,
    setContent,
    token
) {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/edit/kholdbold/${postId}`,
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

export function editPost(postId, dataBody, navigate, token) {
    Axios({
        method: 'PUT',
        url: `${apiBaseUrl}/update/ahmed_1/${postId}`,
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
