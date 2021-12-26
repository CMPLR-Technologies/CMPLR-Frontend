import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import VerticalPostsView from '../partials/VerticalPostsView';
import GridPostsView from '../partials/GridPostsView';
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import HashtagsList from './containers/HashtagsList';
import Nav from './containers/Nav';
import ExploreSidebar from './containers/ExploreSidebar';

export default function Explore() {
    const [pageNumber, setPageNumber] = useState(1);
    const [grid, setGrid] = useState(true);
    const isBigScreen = useMediaQuery({
        query: '(min-device-width: 960px )'
    });
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
                {grid && isBigScreen ? (
                    <GridPostsView
                        posts={posts}
                        error={error}
                        isPending={isPending}
                        hasMore={hasMore}
                        setPageNumber={setPageNumber}
                    />
                ) : (
                    <VerticalPostsView
                        posts={posts}
                        error={error}
                        isPending={isPending}
                        hasMore={hasMore}
                        setPageNumber={setPageNumber}
                        isRadar={grid}
                        isRef={true}
                    />
                )}
            </div>
            <ExploreSidebar />
        </div>
    );
}
