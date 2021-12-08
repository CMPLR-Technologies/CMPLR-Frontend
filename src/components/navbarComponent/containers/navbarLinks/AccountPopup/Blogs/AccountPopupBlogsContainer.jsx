import React, { useEffect, useState } from 'react';
import AccountPopupBlog from './AccountPopupBlog';
import axios from 'axios';

export default function AccountPopupBlogsContainer() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3333/users').then(response => {
            setBlogs(response.data.blogs);
        });
    }, []);

    return (
        <div className="account-popup-blogs-container">
            {blogs.map((blog, index) => (
                <AccountPopupBlog blog={blog} key={index} />
            ))}
        </div>
    );
}
