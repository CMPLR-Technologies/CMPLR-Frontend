import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BlogInfo from './BlogInfo';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import { LinearProgress } from '@mui/material';

export default function RecommendBlogs(props) {
    const { blogsError, blogs, blogsIsPending } = props;
    const theme = useContext(ThemeContext)[0];
    return (
        <div className="dashboard-recommend-blogs">
            <h3
                style={{
                    color: `rgb(${themes[theme].whiteOnDark})`
                }}
            >
                Check out these blogs
            </h3>
            {blogsError && (
                <div className="no-data-error">{"Couldn't load"}</div>
            )}
            {blogsIsPending && <LinearProgress />}
            {blogs &&
                blogs.map(blog => (
                    <div key={blog.blogName}>
                        <BlogInfo
                            blogName={blog.blogName}
                            blogDesc={blog.blogDesc}
                            blogIcon={blog.blogIcon}
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

RecommendBlogs.propTypes = {
    blogsError: PropTypes.string,
    blogs: PropTypes.array,
    blogsIsPending: PropTypes.bool
};
