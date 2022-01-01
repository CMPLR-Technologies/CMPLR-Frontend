import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../../../../config.json';
import useInfiniteScrolling from '../../../../../hooks/useInfiniteScrolling';
import GridPostsView from '../../../../partials/GridPostsView';

export default function ProfileLikes(props) {
    const { blogName } = props;
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: posts,
        isPending,
        hasMore
    } = useInfiniteScrolling(
        `${apiBaseUrl}/profile/likes/${blogName}?page=${pageNumber}`
    );

    return (
        <div className="profile-following" data-testid="profile-likes">
            {posts?.length || isPending ? (
                <GridPostsView
                    posts={posts}
                    error={error}
                    isPending={isPending}
                    hasMore={hasMore}
                    setPageNumber={setPageNumber}
                    noTheme={true}
                    blogPage={true}
                />
            ) : (
                <div>This blog has no liked posts</div>
            )}
        </div>
    );
}

ProfileLikes.propTypes = {
    blogName: PropTypes.string.isRequired,
    blogID: PropTypes.string
};
