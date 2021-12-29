import React, { useState, useRef, useCallback } from 'react';
import Hashtag from './Hashtag';
import { colors } from '../Data';
import useInfiniteScrolling from '../../../hooks/useInfiniteScrolling';
import { apiBaseUrl } from '../../../config.json';
import { LinearProgress } from '@material-ui/core';

export default function HashtagsList() {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        error,
        data: tags,
        isPending,
        hasMore
    } = useInfiniteScrolling(
        `${apiBaseUrl}/recommended/tags?page=${pageNumber}`,
        false,
        true
    );
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
        <div className="explore-hashtags-main">
            <div className="explore-hashtags">
                {isPending && <LinearProgress />}
                <>
                    {tags &&
                        tags.map((hash, index) => {
                            if (tags.length === index + 1) {
                                return (
                                    <div ref={lastPostElementRef} key={index}>
                                        <Hashtag
                                            key={index}
                                            name={hash.tag_name}
                                            firstImg={
                                                hash?.posts_views[0]?.link
                                                    ? hash?.posts_views[0]?.link
                                                    : 'https://64.media.tumblr.com/891192a8d723fe2a1f7e5279da75c9ff/2e1d25e975f9c0eb-0a/s640x960/be31a5f1d7f851872378269aca148a7dee2ec501.jpg'
                                            }
                                            secondImg={
                                                hash?.posts_views[1]?.link
                                                    ? hash?.posts_views[1]?.link
                                                    : 'https://64.media.tumblr.com/39105f36dc93917f319f5b5693aeea0b/1254f2e40ff31f0a-21/s640x960/2fd5c64d6b692a2634834e20651865c55f14990c.jpg'
                                            }
                                            link={`/tagged/${hash.tag_name}`}
                                            background={
                                                colors[index % 4].background
                                            }
                                            color={colors[index % 4].color}
                                            border={colors[index % 4].border}
                                        />
                                    </div>
                                );
                            } else {
                                return (
                                    <Hashtag
                                        key={index}
                                        name={hash.tag_name}
                                        firstImg="https://64.media.tumblr.com/891192a8d723fe2a1f7e5279da75c9ff/2e1d25e975f9c0eb-0a/s640x960/be31a5f1d7f851872378269aca148a7dee2ec501.jpg"
                                        secondImg="https://64.media.tumblr.com/39105f36dc93917f319f5b5693aeea0b/1254f2e40ff31f0a-21/s640x960/2fd5c64d6b692a2634834e20651865c55f14990c.jpg"
                                        link={`/tagged/${hash.tag_name}`}
                                        background={
                                            colors[index % 4].background
                                        }
                                        color={colors[index % 4].color}
                                        border={colors[index % 4].border}
                                    />
                                );
                            }
                        })}
                </>
            </div>
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
        </div>
    );
}
