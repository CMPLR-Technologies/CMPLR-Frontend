import React from 'react';
import PostComponent from './containers/PostComponent';
import PropTypes from 'prop-types';

/**
 * @function PostsComponentView
 * @description View Posts Component
 * @param {array} posts - object containg post data response received from server
 * @param {boolean} isFollowed - boolean used to determine if user is following the post author
 * @param {string} userBlogName - blog name of the user who is logged in
 * @param {boolean} radar - boolean used to determine if the post viewed in radar section or not
 * @returns {Component} PostsComponentView
 */

View.propTypes = {
    posts: PropTypes.array.isRequired,
    isFollowed: PropTypes.bool.isRequired,
    userBlogName: PropTypes.string.isRequired,
    radar: PropTypes.bool
};

export default function View(props) {
    const { userBlogName, posts, isFollowed, radar } = props;

    return (
        <>
            {posts &&
                posts.map((item, index) => (
                    <PostComponent
                        key={index}
                        userBlogName={userBlogName}
                        post={item}
                        isFollowed={isFollowed}
                        radar={radar}
                    />
                ))}
        </>
    );
}
