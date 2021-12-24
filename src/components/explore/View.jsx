import React, { useState } from 'react';
import VerticalPostsView from '../partials/VerticalPostsView';
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';

import Following from './containers/Following';
import HashtagsList from './containers/HashtagsList';
import Nav from './containers/Nav';

export default function Explore() {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: posts,
        isPending,
        hasMore
    } = useInfiniteScrolling(`${apiBaseUrl}/user/dashboard?page=${pageNumber}`);

    return (
        <div className="explore">
            <div className="explore-main">
                <Nav />
                <HashtagsList />
                <div className="explore-posts">
                    <VerticalPostsView
                        posts={posts}
                        error={error}
                        isPending={isPending}
                        hasMore={hasMore}
                        setPageNumber={setPageNumber}
                    />
                </div>
            </div>
            <div className="explore-sidebar">
                <Following />
            </div>
        </div>
    );
}
