import React, { useContext } from 'react';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import PropTypes from 'prop-types';

/**
 * TrendingTag Component
 * @function TrendingTag
 * @description The Tag in the TrendingTags List
 * @property {string} tag - tag name
 * @property {string} color - background color
 * @property {number} order - the order of the tag
 * @returns {Component} Component that contains 5 Recommended blogs
 */

export default function TrendingTag({ color, tag, order }) {
    const theme = useContext(ThemeContext)[0];
    return (
        <a
            href={`/tagged/${tag.tag_name}`}
            className="trending-tag"
            style={{
                background: `rgba(${color}, 0.25)`
            }}
        >
            <div
                className="tag-info"
                style={{
                    color: `rgb(${themes[theme].whiteOnDark})`
                }}
            >
                <div
                    className="tag-number"
                    style={{
                        color: 'black',
                        background: `rgb(${color})`
                    }}
                >
                    {order}
                </div>{' '}
                {tag.tag_name}
            </div>
            <div className="tag-img">
                <img src={tag?.posts_views[0]?.link} />
            </div>
        </a>
    );
}

TrendingTag.propTypes = {
    color: PropTypes.string,
    tag: PropTypes.any,
    order: PropTypes.any
};
