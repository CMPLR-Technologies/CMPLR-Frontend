import React from 'react';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../../../config.json';
import useFetch from '../../../../hooks/useFetch';
import { LinearProgress } from '@mui/material';
import PostComponent from '../../../partials/postComponent/containers/PostComponent';

/**
 * @function ProfileSideOnePost
 * @description Loads a certain post of a certain blog (using sidePostID)
 * @property {string} blogID
 * @property {string} blogName
 * @property {string} sidePostID - is '' when showing all posts (default behavior), else on click on image in mini hover view: is set to postID of the post of image
 * @property {bool} noTheme - deactivates theme
 * @returns {Component}
 */

export default function ProfileSideOnePost(props) {
    const { blogName, sidePostID, noTheme } = props;
    const {
        error,
        data: post,
        isPending
    } = useFetch(`${apiBaseUrl}/posts/${sidePostID}`);

    return (
        <div>
            {error ? (
                <div className="no-data-error">{"Couldn't load"}</div>
            ) : isPending ? (
                <LinearProgress />
            ) : post && post.blog.blog_name === blogName ? (
                <PostComponent
                    post={{ blog: post.blog, post: post.post }}
                    blogPage={true}
                    userBlogName={blogName}
                    themeDeactivate={noTheme}
                />
            ) : (
                <div className="no-data-error">
                    404: mismatching post and post-owning blog
                </div>
            )}
        </div>
    );
}

ProfileSideOnePost.propTypes = {
    blogID: PropTypes.string,
    blogName: PropTypes.string,
    sidePostID: PropTypes.string,
    noTheme: PropTypes.bool
};
