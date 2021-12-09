import React, { useContext } from 'react';
import useFetch from '../../../hooks/useFetch';
import { apiBaseUrl } from '../../../config.json';
import BlogInfo from './BlogInfo';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import { LinearProgress } from '@mui/material';

export default function RecommendBlogs() {
    const theme = useContext(ThemeContext)[0];
    const {
        error,
        data: recommendedBlogs,
        isPending
    } = useFetch(`${apiBaseUrl}/recommended-blogs`);

    return (
        <div className="dashboard-recommend-blogs">
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
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
    );
}
