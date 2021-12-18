/* eslint-disable camelcase */
import { validatePosting } from './Controller';
import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const handlePosting = (bodyData, navigate) => {
    let errors = validatePosting(bodyData?.title, bodyData?.content);
    const response = {
        Meta: {
            Status: 200,
            msg: 'Success'
        },
        response: {
            posts: [
                {
                    post: {
                        post_id: 1,
                        type: 'photos',
                        state: 'publish',
                        title: bodyData?.title,
                        content: bodyData?.content,
                        date: 'Friday, 17-Dec-21 23:27:28 UTC',
                        reblog_key: 'fsdfas',
                        number_notes: 1,
                        source_content: 'google.com',
                        tags: ['summer', 'winter']
                    },
                    blog: {
                        blog_id: 11,
                        blog_name: 'ahmed_3',
                        avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
                        avatar_shape: 'circle',
                        replies: 'everyone'
                    }
                }
            ]
        }
    };
    if (errors?.length > 0) {
        //console.log(errors);
        return { status: false, err: errors };
    } else {
        Axios({
            method: 'POST',
            url: `${apiBaseUrl}/posts`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: response
        })
            .then(res => {
                navigate('/dashboard');
                return res;
            })
            .catch(err => {
                return err;
            });
    }
};

export function fetchPost(postId, setPost, edit, setTitlePost, setContent) {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/post/${postId}`
    })
        .then(res => {
            if (res.data.Meta.Status === 200) {
                setPost(res.data.response);
                if (edit === true) {
                    setTitlePost(res.data.response.post.title);
                    setContent(res.data.response.post.content);
                }
            }
        })
        .catch(() => {});
}

export function reblogPost(post, comment, navigate) {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/posts/reblog`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
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

export function editPost(postId, dataBody, navigate) {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/posts/edit`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            id: postId,
            data: dataBody
        }
    })
        .then(res => {
            navigate('/dashboard');
            return res;
        })
        .catch(() => {});
}
