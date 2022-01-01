import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BlogInfo from './BlogInfo';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import { LinearProgress } from '@mui/material';

/**
 * RecommendBlogs Component
 * @function RecommendBlogs
 * @description The Recommended Blogs Section
 * @property {boolean} blogsError - If there is an error while fetching the data or not
 * @property {array} blogs - blogs to be recommended
 * @property {boolean} blogsIsPending - True while fetching the data
 * @property {boolean} showExplore - show or hide explore button
 * @property {string} otherClass - add other css class to the main container
 * @returns {Component} Component that contains 5 Recommended blogs
 */

export default function RecommendBlogs(props) {
    const { blogsError, blogs, blogsIsPending, showExplore, otherClass } =
        props;
    const theme = useContext(ThemeContext)[0];
    return (
        <div className={`dashboard-recommend-blogs ${otherClass}`}>
            <h3
                style={{
                    color: `rgb(${themes[theme].whiteOnDark})`,
                    padding: '15px',
                    borderBottom: `solid 1px rgba(${themes[theme].whiteOnDark}, 0.13)`
                }}
            >
                Check out these blogs
            </h3>
            {blogsError && (
                <div className="no-data-error">{"Couldn't load"}</div>
            )}
            {blogsIsPending && <LinearProgress />}
            {blogs &&
                blogs.map((blog, index) => (
                    <div key={index}>
                        <BlogInfo
                            blogName={blog.blog_name}
                            blogDesc={blog.title}
                            blogIcon={blog.avatar}
                            blogId={blog.blog_id}
                        />
                    </div>
                ))}
            {showExplore && (
                <a
                    style={{ color: `rgb(${themes[theme].accent})` }}
                    className="explore-link"
                    href="/explore/recommended-for-you"
                >
                    Explore all of CMPlr
                </a>
            )}
        </div>
    );
}

RecommendBlogs.propTypes = {
    blogsError: PropTypes.any,
    blogs: PropTypes.array,
    blogsIsPending: PropTypes.bool,
    showExplore: PropTypes.bool,
    otherClass: PropTypes.string
};
