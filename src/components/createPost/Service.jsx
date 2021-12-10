/* eslint-disable camelcase */
import { validatePosting } from './Controller';
import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const handlePosting = (bodyData, navigate) => {
    let errors = validatePosting(bodyData?.title, bodyData?.content);
    const response = {
        Meta: {
            Status: 200,
            msg: 'OK'
        },
        response: {
            total_no_posts: 2,
            posts: [
                {
                    post_state: 'published',
                    post_id: 13212383,
                    blog_id: 123123,
                    blog_name: '1dsa',
                    post_type: 'text',
                    content: [{ type: 'text', ...bodyData }],
                    reblog_key: 1253,
                    limit: 5,
                    parent_blog_id: 12523,
                    parent_post_id: 1223,
                    post_timestamp: 'December 5th, 7:14 PM',
                    post_date: '01:01:11',
                    format: 'Rich text',
                    blog_avatar:
                        'https://64.media.tumblr.com/34dbb7172ea55d286d686911dff23901/66ab0c35f3053a4a-86/s64x64u_c1/91d3bc478c814e17c299e0893f74959aae7c189e.pnj',
                    blog_url: 'dddddas',
                    blog_email: 'dsadwqda',
                    post_link:
                        'https://theinsaneapp.tumblr.com/post/669080647503101952',
                    number_notes: 5,
                    layout: [
                        {
                            type: 'rows',
                            display: '[{blocks:[0,1]} , {blocks:[2]}]'
                        }
                    ],
                    tags: ['pain', 'pain-000']
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

export function fetchPost(postId, setPost) {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/post/${postId}`
    }).then(res => {
        if (res.data.Meta.Status === 200) setPost(res.data.response);
    });
}

export function reblogPost(bodyData, navigate) {
    const response = {
        Meta: {
            Status: 200,
            msg: 'OK'
        },
        response: {
            total_no_posts: 2,
            posts: [
                {
                    post_state: 'published',
                    post_id: 13212383,
                    blog_id: 123123,
                    blog_name: '1dsa',
                    post_type: 'text',
                    content: [{ type: 'text', ...bodyData }],
                    reblog_key: 1253,
                    limit: 5,
                    parent_blog_id: 12523,
                    parent_post_id: 1223,
                    post_timestamp: 'December 5th, 7:14 PM',
                    post_date: '01:01:11',
                    format: 'Rich text',
                    blog_avatar:
                        'https://64.media.tumblr.com/34dbb7172ea55d286d686911dff23901/66ab0c35f3053a4a-86/s64x64u_c1/91d3bc478c814e17c299e0893f74959aae7c189e.pnj',
                    blog_url: 'dddddas',
                    blog_email: 'dsadwqda',
                    post_link:
                        'https://theinsaneapp.tumblr.com/post/669080647503101952',
                    number_notes: 5,
                    layout: [
                        {
                            type: 'rows',
                            display: '[{blocks:[0,1]} , {blocks:[2]}]'
                        }
                    ],
                    tags: ['pain', 'pain-000']
                }
            ]
        }
    };

    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/posts/reblog`,
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
