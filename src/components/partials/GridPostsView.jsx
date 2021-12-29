import React from 'react';
import VerticalPostsView from './VerticalPostsView';
import PropTypes from 'prop-types';

export default function GridPostsView(props) {
    const {
        posts,
        error,
        isPending,
        hasMore,
        setPageNumber,
        blogPage = false,
        noTheme = false
    } = props;
    return (
        <div className="explore-posts">
            <VerticalPostsView
                posts={posts.slice((2 * posts.length) / 3, posts.length)}
                error={error}
                isPending={isPending}
                hasMore={hasMore}
                setPageNumber={setPageNumber}
                isRadar={true}
                blogPage={blogPage}
                noTheme={noTheme}
                isRef={posts.length > 2}
            />
            <VerticalPostsView
                posts={posts.slice(posts.length / 3, (2 * posts.length) / 3)}
                error={error}
                isPending={isPending}
                hasMore={hasMore}
                setPageNumber={setPageNumber}
                isRadar={true}
                isRef={posts.length === 2}
                blogPage={blogPage}
                noTheme={noTheme}
            />
            <VerticalPostsView
                posts={posts.slice(0, posts.length / 3)}
                error={error}
                isPending={isPending}
                hasMore={hasMore}
                setPageNumber={setPageNumber}
                isRadar={true}
                blogPage={blogPage}
                noTheme={noTheme}
                isRef={posts.length === 1}
            />
        </div>
    );
}

GridPostsView.propTypes = {
    posts: PropTypes.array,
    error: PropTypes.any,
    isPending: PropTypes.bool,
    hasMore: PropTypes.any,
    blogPage: PropTypes.bool,
    noTheme: PropTypes.bool,
    setPageNumber: PropTypes.func
};
