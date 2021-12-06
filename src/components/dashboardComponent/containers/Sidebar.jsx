import React, { useContext } from 'react';
import useFetch from '../../../hooks/useFetch';
import { apiBaseUrl } from '../../../config.json';
import BlogInfo from './BlogInfo';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';

export default function Sidebar() {
    const theme = useContext(ThemeContext)[0];
    const {
        error,
        data: recommendedBlogs,
        isPending
    } = useFetch(`${apiBaseUrl}/recommended-blogs`);

    return (
        <div className="dashboard-sidebar">
            <h3>Check out these blogs</h3>
            <div className="dashboard-recommend-blogs">
                {error && <div>{"Couldn't load"}</div>}
                {isPending && <div>{'loading...'}</div>}
                {recommendedBlogs &&
                    recommendedBlogs.map(blog => (
                        <div key={blog.blogName}>
                            <BlogInfo
                                blogName={blog.blogName}
                                blogDesc={blog.blogDesc}
                            />
                        </div>
                    ))}
                <a
                    style={{ color: `rgb(${themes[theme].accent})` }}
                    className="explore-link"
                    href="/explore"
                >
                    Explore all of Tumblr
                </a>
            </div>
        </div>
    );
}
