import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserBlogs } from './Service';

/**
 * @function PagesList
 * @description This function is used to render the list of pages
 * @returns {React.Component} Page list  component
 */

export default function PagesList() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getUserBlogs(setBlogs, user?.token);
    }, []);
    const endPoints = [
        '/settings/account',
        '/settings/dashboard',
        '/settings/notifications',
        '/settings/apps'
    ];
    const pageName = ['Account', 'Dashboard', 'Notifications', 'Apps'];
    const pageDescription = [
        'The essentials',
        ' Appearance options, text editor',
        'Via email & mobile',
        " Things you've connected"
    ];
    return (
        <div className="container2">
            <div className="wrapper">
                <ul className="list">
                    {endPoints.map((endPoint, i) => {
                        return (
                            <li key={i} className="list-item">
                                <Link
                                    className="list-item-anchor"
                                    to={endPoint}
                                >
                                    <span className="list-item-span">
                                        {pageName[i]}
                                    </span>
                                    <small className="list-item-anchor-small">
                                        {pageDescription[i]}
                                    </small>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="blog">
                    <h1 className="blog-h1">Blog</h1>
                    <ul className="list">
                        {blogs.length !== 0 &&
                            blogs.map((blog, i) => {
                                return (
                                    <li
                                        className="list-item blog-item"
                                        key={i}
                                        onClick={() => {
                                            localStorage.setItem(
                                                'user',
                                                JSON.stringify({
                                                    ...JSON.parse(
                                                        localStorage.getItem(
                                                            'user'
                                                        )
                                                    ),
                                                    blogName: blog?.blog_name,
                                                    userData: {
                                                        ...JSON.parse(
                                                            localStorage.getItem(
                                                                'user'
                                                            )
                                                        ).userData,
                                                        avatar: blog?.avatar
                                                    }
                                                })
                                            );
                                        }}
                                    >
                                        <div className="temp">
                                            <a
                                                className="blog-item-anchor"
                                                href={`/blog/${blog.blog_name}/settings`}
                                            >
                                                <div className="icon-text">
                                                    <div className="icon">
                                                        <img
                                                            className="nLowv"
                                                            src={blog.avatar}
                                                            sizes="37px"
                                                            alt="Avatar"
                                                            style={{
                                                                width: '37px',
                                                                height: '37px',
                                                                objectFit:
                                                                    'cover'
                                                            }}
                                                            loading="eager"
                                                        />
                                                    </div>
                                                    <div className="text">
                                                        <div className="text-up">
                                                            <span className="text-up-span">
                                                                {blog.blog_name}
                                                            </span>
                                                        </div>
                                                        <div className="text-down">
                                                            {blog.title}
                                                        </div>
                                                    </div>
                                                </div>
                                                {i === 0 && (
                                                    <div className="star">
                                                        <svg
                                                            viewBox="0 0 12 12"
                                                            width="12"
                                                            height="12"
                                                            fill="white"
                                                            className="star-svg"
                                                        >
                                                            <path d="M2.3 11.4L6 0l3.7 11.4L0 4.3h12"></path>
                                                        </svg>
                                                    </div>
                                                )}
                                            </a>
                                        </div>
                                    </li>
                                );
                            })}
                        <li className="list-item blog-item">
                            <div className="temp">
                                <Link
                                    to={'/blog/new'}
                                    style={{
                                        textDecoration: 'none'
                                    }}
                                    className="blog-item-anchor-create-new-blog"
                                >
                                    create a new blog
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
