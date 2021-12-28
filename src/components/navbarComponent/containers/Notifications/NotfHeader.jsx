import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '../../../../config.json';
import axios from 'axios';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import ClickAwayListener from '@mui/base/ClickAwayListener';

export default function NotfHeader(props) {
    const { userBlogName, userAvatar, filterNotf } = props;
    const [selected, setSelected] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [blogsView, setBlogsView] = useState(false);
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    useEffect(() => {
        axios({
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${apiBaseUrl}/user/info`
        })
            .then(response => {
                setBlogs(response.data.response.blogs);
            })
            .catch(() => {});
    }, []);
    console.log(blogs);
    return (
        <div className="header">
            <div className="control-left">
                <div>
                    <div>
                        <ClickAwayListener
                            onClickAway={() => setBlogsView(false)}
                        >
                            <>
                                <div
                                    onClick={() => setBlogsView(prev => !prev)}
                                    className="header-flex-cont"
                                >
                                    <img
                                        data-testid="avatar-img-ts"
                                        src={userAvatar}
                                        className="avatar-img-mob"
                                    />
                                    <button className="btn-control">
                                        <span className="caption">
                                            {userBlogName}
                                        </span>
                                        <span className="icon_arrow_carrot_down">
                                            <RiArrowDropDownLine
                                                style={{
                                                    fill: 'black'
                                                }}
                                            />
                                        </span>
                                    </button>
                                </div>
                                {blogsView && (
                                    <div className="blogs-list">
                                        {blogs &&
                                            blogs.map((blog, index) => (
                                                <div
                                                    data-testid="AccountPopupBlogsContainer"
                                                    className="account-popup-blogs-container"
                                                    key={index}
                                                >
                                                    <NavLink
                                                        to={`/blog/${blog?.blog_name}`}
                                                        className="account-popup-blog-head-img"
                                                    >
                                                        <img
                                                            src={blog?.avatar}
                                                            alt="ava"
                                                        />
                                                    </NavLink>
                                                    <NavLink
                                                        to={`/blog/${blog?.blog_name}`}
                                                        className="account-popup-blog-head-text"
                                                    >
                                                        <h1>{blog?.blog_name}</h1>
                                                        <div>{blog?.title}</div>
                                                    </NavLink>
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </>
                        </ClickAwayListener>
                    </div>
                </div>
            </div>
            <div className="notf-types">
                <div
                    onClick={() => {
                        setSelected(1);
                        filterNotf('all');
                    }}
                    className={`all ${selected === 1 ? 'selected' : ''}`}
                >
                    All
                </div>
                <div
                    onClick={() => {
                        setSelected(2);
                        filterNotf('reblog');
                    }}
                    className={`reblogs ${selected === 2 ? 'selected' : ''}`}
                >
                    Reblogs
                </div>
                <div
                    onClick={() => {
                        setSelected(3);
                        filterNotf('reply');
                    }}
                    className={`replies ${selected === 3 ? 'selected' : ''}`}
                >
                    Replies
                </div>
            </div>
        </div>
    );
}
