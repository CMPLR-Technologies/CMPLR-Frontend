import React, { useState } from 'react';
import VerticalPostsView from '../partials/VerticalPostsView';
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';

import Following from './containers/Following';
import HashtagsList from './containers/HashtagsList';
import Nav from './containers/Nav';

export default function Explore() {
    const [pageNumber, setPageNumber] = useState(1);
    const [grid, setGrid] = useState(false);
    const {
        error,
        data: posts,
        isPending,
        hasMore
    } = useInfiniteScrolling(`${apiBaseUrl}/user/dashboard?page=${pageNumber}`);

    return (
        <div className="explore">
            <div className={`explore-main ${!grid ? 'mid-size' : ''} `}>
                <Nav grid={grid} setGrid={setGrid} />
                <HashtagsList />
                {grid ? (
                    <div className="explore-posts">
                        <VerticalPostsView
                            posts={posts.slice(0, posts.length / 3)}
                            error={error}
                            isPending={isPending}
                            hasMore={hasMore}
                            setPageNumber={setPageNumber}
                            isRadar={grid}
                        />
                        <VerticalPostsView
                            posts={posts.slice(
                                posts.length / 3,
                                (2 * posts.length) / 3
                            )}
                            error={error}
                            isPending={isPending}
                            hasMore={hasMore}
                            setPageNumber={setPageNumber}
                            isRadar={grid}
                        />
                        <VerticalPostsView
                            posts={posts.slice(
                                (2 * posts.length) / 3,
                                posts.length
                            )}
                            error={error}
                            isPending={isPending}
                            hasMore={hasMore}
                            setPageNumber={setPageNumber}
                            isRadar={grid}
                        />
                    </div>
                ) : (
                    <VerticalPostsView
                        posts={posts}
                        error={error}
                        isPending={isPending}
                        hasMore={hasMore}
                        setPageNumber={setPageNumber}
                        isRadar={grid}
                    />
                )}
            </div>
            <div className="explore-sidebar">
                <Following />
            </div>
        </div>
    );
}
