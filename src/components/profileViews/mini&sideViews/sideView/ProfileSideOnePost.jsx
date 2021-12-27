import React from 'react';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../../../config.json';
import useFetch from '../../../../hooks/useFetch';
import { LinearProgress } from '@mui/material';
import PostComponent from '../../../partials/postComponent/containers/PostComponent';

export default function ProfileSide(props) {
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
            ) : post ? (
                <PostComponent
                    post={{ blog: post.blog, post: post.post }}
                    blogPage={true}
                    userBlogName={blogName}
                    themeDeactivate={noTheme}
                />
            ) : (
                <div></div>
            )}
        </div>
    );
}

ProfileSide.propTypes = {
    blogID: PropTypes.string,
    blogName: PropTypes.string.isRequired,
    sidePostID: PropTypes.string,
    noTheme: PropTypes.bool
};
