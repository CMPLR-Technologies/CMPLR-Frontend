import React, { useRef, useCallback } from 'react';
import PostComponent from './postComponent/containers/PostComponent';
import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
export default function VerticalPostsView(props) {
    const { posts, error, isPending, hasMore, setPageNumber, isRadar } = props;

    const observer = useRef();
    const lastPostElementRef = useCallback(
        node => {
            if (isPending) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber(prevPageNumber => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isPending, hasMore]
    );

    return (
        <>
            {posts &&
                posts.map((post, index) => {
                    if (posts.length === index + 1) {
                        return (
                            <div ref={lastPostElementRef} key={index}>
                                <PostComponent post={post} radar={isRadar} />
                            </div>
                        );
                    } else {
                        return (
                            <PostComponent
                                key={index}
                                post={post}
                                radar={isRadar}
                            />
                        );
                    }
                })}

            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
        </>
    );
}

VerticalPostsView.propTypes = {
    posts: PropTypes.array,
    error: PropTypes.string,
    isPending: PropTypes.bool,
    hasMore: PropTypes.bool,
    setPageNumber: PropTypes.func,
    isRadar: PropTypes.bool
};
