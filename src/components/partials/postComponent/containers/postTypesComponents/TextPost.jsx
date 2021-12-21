import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function TextPost
 * @description Component used to view text post in postComponent Container
 * @param {string} title - Heading of text post
 * @param {HtmlTags} content - content of text post
 * @returns {Component} TextPost Component
 */

TextPost.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
};

export default function TextPost(props) {
    const { title, content } = props;
    return (
        <div data-testid={`post-body-ts`} className="post-body">
            <div className="text-title">
                <span
                    data-testid={`post-text-title-ts-${title}`}
                    className="text-title-content"
                >
                    {title}
                </span>
            </div>
            <div
                data-testid={`post-body-content-ts-${title}`}
                className="text-body"
            >
                <span
                    className="body-content"
                    data-testid={`body-content-ts-${title}`}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
}
