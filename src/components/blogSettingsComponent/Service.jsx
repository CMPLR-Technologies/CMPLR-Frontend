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
    history
) {
    if (checkCreateBlog(title, url, privacy, password, errorMsg, setErrorMsg)) {
        setErrorMsg([]);
        axios({
            //TODO change to post
            method: 'get',
            url: `${apiBaseUrl}/blog`
            // data: {
            //     title: title,
            //     blogName:title,
            //     privacy: privacy,
            //     password: password,
            // }
        })
            .then(res => {
                if (res.data.meta.status_code === 201) {
                    console.log(res.data.meta.status_code);
                    history(`/blog/${title}`);
                    setErrorMsg([]);
                } else if (res.data.meta.status_code === 422) {
                    setErrorMsg([...errorMsg, 'url already exists']);
                }
            })
            .catch(() => {
                setErrorMsg([...errorMsg, 'error creating blog']);
            });
    }
}

export function deleteBlog(password, email, blogName, setErrorMsg, history) {
    if (checkDeleteBlog(password, email, setErrorMsg)) {
        setErrorMsg('');
        axios({
            //TODO change to delete
            method: 'get',
            //TODO change to url: `${apiBaseUrl}/blog/${blogName}`
            url: `${apiBaseUrl}/blog`
            // data: {
            //     email: email,
            //     password: password
            // }
        })
            .then(res => {
                if (res.data.meta.status_code === 200) {
                    history('/settings/account');
                } else if (res.data.meta.status_code === 404) {
                    setErrorMsg('blog name is not available');
                } else if (res.data.meta.status_code === 403) {
                    setErrorMsg('email or password is incorrect');
                }
            })
            .catch(() => {
                setErrorMsg('error deleting blog');
            });
    }
}
