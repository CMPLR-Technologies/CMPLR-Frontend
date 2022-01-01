import React from 'react';
import { trendingColors } from '../Data';
import TrendingTag from './TrendingTag';
import useFetch from '../../../hooks/useFetch';
import { apiBaseUrl } from '../../../config.json';
import { LinearProgress } from '@material-ui/core';

/**
 * TrendingTags Component
 * @function TrendingTags
 * @description The Tending Hashtags List
 * @returns {Component} Component That Contains The Tending Hashtags
 */

export default function TrendingTags() {
    const { error, data, isPending } = useFetch(
        `${apiBaseUrl}/trending/tags?page=1`
    );
    return (
        <div className="explore-trending-main explore-hashtags">
            {isPending && <LinearProgress />}
            {data &&
                data.tags
                    .slice(0, 8)
                    .map((tag, index) => (
                        <TrendingTag
                            key={index}
                            order={index + 1}
                            tag={tag}
                            color={trendingColors[index]}
                        />
                    ))}
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
        </div>
    );
}
