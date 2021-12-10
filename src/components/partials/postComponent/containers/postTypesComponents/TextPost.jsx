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
    title: PropTypes.string.isRequired,
    content: PropTypes.string
};

export default function TextPost(props) {
    const { title, content } = props;
    
    return (
        <div className="post-body">
            <div className="text-title">
                <span className="text-title-content">{title}</span>
            </div>
            <div className="text-body">
                <span
                    className="body-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
}
