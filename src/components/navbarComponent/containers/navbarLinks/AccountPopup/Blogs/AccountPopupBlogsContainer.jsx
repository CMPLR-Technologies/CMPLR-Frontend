import React, { useEffect, useState } from 'react';
import AccountPopupBlog from './AccountPopupBlog';
import axios from 'axios';

export default function AccountPopupBlogsContainer() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3333/blogs').then(response => {
            setBlogs(response.data);
        });
    }, []);

    return (
        <div className="account-popup-blogs-container">
            {blogs &&
                blogs.map((blog, index) => (
                    <AccountPopupBlog blog={blog} key={index} />
                ))}
        </div>
    );
}
