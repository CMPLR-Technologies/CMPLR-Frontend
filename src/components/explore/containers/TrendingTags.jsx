import React from 'react';
import { trendingColors, trendingTags } from '../Data';
import TrendingTag from './TrendingTag';

export default function TrendingTags() {
    return (
        <div className="explore-trending-main explore-hashtags">
            {trendingTags.map((tag, index) => (
                <TrendingTag
                    key={index}
                    order={index + 1}
                    tag={tag.tag}
                    color={trendingColors[index]}
                    img={tag.img}
                />
            ))}
        </div>
    );
}
