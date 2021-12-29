import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import VerticalPostsView from '../partials/VerticalPostsView';
import GridPostsView from '../partials/GridPostsView';
import { apiBaseUrl } from '../../config.json';
import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';
import HashtagsList from './containers/HashtagsList';
import Nav from './containers/Nav';
import ExploreSidebar from './containers/ExploreSidebar';
import { useParams } from 'react-router-dom';
import TrendingTags from './containers/TrendingTags';

export default function Explore() {
    const [pageNumber, setPageNumber] = useState(1);
    const [postsType, setPostsType] = useState('recommended');
    const [grid, setGrid] = useState(true);
    const isBigScreen = useMediaQuery({
        query: '(min-device-width: 960px )'
    });
    const {
        error,
        data: posts,
        isPending,
        hasMore,
        setData
    } = useInfiniteScrolling(
        `${apiBaseUrl}/${postsType}/posts?page=${pageNumber}`
    );
    const { type } = useParams();
    useEffect(() => {
        if (type === 'trending' && postsType === 'recommended') setData([]);
        if (type === 'recommended-for-you' && postsType === 'trending')
            setData([]);

        if (type === 'trending') setPostsType('trending');
        else setPostsType('recommended');
    }, [type]);
    return (
        <div className="explore">
            <div className={`explore-main ${!grid ? 'mid-size' : ''} `}>
                <Nav grid={grid} setGrid={setGrid} />
                {type !== 'trending' && <HashtagsList />}
                {type === 'trending' && <TrendingTags />}
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
