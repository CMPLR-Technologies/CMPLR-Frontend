import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '../../../../../../config.json';
import AccountPopupBlog from './AccountPopupBlog';
import axios from 'axios';

/**
 * @function AccountPopupBlogsContainer
 * @description in between seperator in the Account Popup Container
 * @property {array} blogs - a state array storing all blogs data of current user
 * @property {function} setBlogs - blog state setter initialized to empty array
 * @returns {Component}
 */

export default function AccountPopupBlogsContainer() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios
            .get(`${apiBaseUrl}/blogs`)
            .then(response => {
                setBlogs(response.data);
            })
            .catch(err => {});
    }, []);

    return (
        <div
            data-testid="AccountPopupBlogsContainer"
            className="account-popup-blogs-container"
        >
            {blogs &&
                blogs.map((blog, index) => (
                    <AccountPopupBlog blog={blog} key={index} />
                ))}
        </div>
    );
}