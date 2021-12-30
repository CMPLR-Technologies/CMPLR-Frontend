import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../../../config.json';
import useInfiniteScrolling from '../../../../hooks/useInfiniteScrolling';
import VerticalPostsView from '../../../partials/VerticalPostsView';

export default function ProfileSideAllPosts(props) {
    const { blogName, noTheme } = props;
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: posts,
        isPending,
        hasMore
    } = useInfiniteScrolling(
        `${apiBaseUrl}/posts/view/${blogName}?page=${pageNumber}`
    );
    return (
        <VerticalPostsView
            posts={posts}
            error={error}
            isPending={isPending}
            hasMore={hasMore}
            setPageNumber={setPageNumber}
            blogPage={true}
            isRef={true}
            userBlogName={blogName}
            noTheme={noTheme}
            isRadar={true}
        />
    );
}

ProfileSideAllPosts.propTypes = {
    blogName: PropTypes.string.isRequired,
    noTheme: PropTypes.bool
};
