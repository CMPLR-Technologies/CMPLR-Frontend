import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function TextPost
 * @description Component used to view text post in postComponent Container
 * @param {string} title - Heading of text post
 * @param {HtmlTags} text - content of text post
 * @returns {Component} TextPost Component
 */

TextPost.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
};

export default function TextPost(props) {
    const { title, text } = props;
    return (
        <div className="post-body">
            <div className="text-title">
                <span className="text-title-content">{title}</span>
            </div>
            <div className="text-body">
                <span
                    className="body-content"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </div>
    );
}
