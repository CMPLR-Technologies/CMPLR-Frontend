/* eslint-disable camelcase */
import axios from 'axios';
import { apiBaseUrl } from '../../config.json';
import { useNavigate } from 'react-router-dom';
import { checkCreateBlog } from './Controller';
import { checkDeleteBlog } from './Controller';
import {} from './Controller';

const camelToSnakeCase = str => {
    if (str[0] === str[0].toUpperCase()) {
        return str;
    }
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};
export function createBlog(
    title,
    url,
    privacy,
    password,
    errorMsg,
    setErrorMsg,
    history,
    token
) {
    if (checkCreateBlog(title, url, privacy, password, errorMsg, setErrorMsg)) {
        setErrorMsg([]);
        axios({
            //TODO change to post
            method: 'post',
            url: `${apiBaseUrl}/blog`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: {
                title: title,
                blogName: title,
                privacy: privacy,
                password: password
            }
        })
            .then(res => {
                if (res.data.meta.status_code === 201) {
                    console.log(res.data.meta.status_code);
                    history(`/blog/${title}`);
                    setErrorMsg([]);
                }
            })
            .catch(err => {
                if (err.response.status === 422) {
                    setErrorMsg([...errorMsg, 'Blog Name is not available']);
                }
                setErrorMsg([...errorMsg, 'error creating blog']);
            });
    }
}

export function deleteBlog(
    password,
    email,
    blogName,
    setErrorMsg,
    history,
    token
) {
    if (checkDeleteBlog(password, email, setErrorMsg)) {
        setErrorMsg('');
        axios({
            //TODO change to post
            method: 'post',
            //TODO change to url: `${apiBaseUrl}/blog/${blogName}`
            url: `${apiBaseUrl}/blog/${blogName}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: {
                email: email,
                password: password
            }
        })
            .then(res => {
                if (res.data.meta.status_code === 200) {
                    history('/settings/account');
                }
            })
            .catch(err => {
                console.log(err.response.status);
                if (err.response.status === 404) {
                    setErrorMsg('blog name is not available');
                } else if (err.response.status === 403) {
                    setErrorMsg('email or password is incorrect');
                } else setErrorMsg('error deleting blog');
            });
    }
}
