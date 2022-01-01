import React from 'react';
import RecommendBlogs from '../../dashboardComponent/containers/RecommendBlogs';
import HashtagView from './Hashtag';
import PropTypes from 'prop-types';
import useFetch from '../../../hooks/useFetch';
import { apiBaseUrl } from '../../../config.json';
/**
 * Sidebar of hashtag Component
 * @function SidebarTag
 * @property {bool} loading
 * @property {number} totalPosts
 * @property {number} totalFollowers
 * @property {bool} isFollower
 * @property {string} tagName
 * @property {function} handleFollowHashtag
 * @property {bool} isPendingFollow
 * @property {string} errorFollow
 * @description the side bar which shows info on the hashtag and some recommended tags
 * @returns {Component}
 */

export default function SidebarTag(props) {
    const {
        error: blogsError,
        data,
        isPending: blogsIsPending
    } = useFetch(`${apiBaseUrl}/recommended/blogs?page=1`);
    const {
        loading,
        totalPosts,
        totalFollowers,
        isFollower,
        tagName,
        recommendedTags,
        handleFollowHashtag,
        isPendingFollow,
        errorFollow
    } = props;
    return (
        <div className="dashboard-sidebar">
            <HashtagView
                loading={loading}
                totalPosts={totalPosts}
                totalFollowers={totalFollowers}
                isFollower={isFollower}
                tagName={tagName}
                recommendedTags={recommendedTags}
                handleFollowHashtag={handleFollowHashtag}
                isPendingFollow={isPendingFollow}
                errorFollow={errorFollow}
            />
            <RecommendBlogs
                blogsError={blogsError}
                blogs={data?.blogs}
                blogsIsPending={false}
                showExplore={blogsIsPending}
            />
        </div>
    );
}

SidebarTag.propTypes = {
    loading: PropTypes.bool.isRequired,
    totalPosts: PropTypes.number,
    totalFollowers: PropTypes.number,
    isFollower: PropTypes.bool,
    tagName: PropTypes.string,
    recommendedTags: PropTypes.any,
    handleFollowHashtag: PropTypes.func,
    isPendingFollow: PropTypes.bool,
    errorFollow: PropTypes.string
};
