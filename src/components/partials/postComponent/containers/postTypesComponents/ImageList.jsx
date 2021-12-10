import React, { useEffect, useState } from 'react';
import {
    extractImageData,
    showImage,
    closeImagePreview
} from '../../Controller';
import PropTypes from 'prop-types';

/**
 * @function ImagePost
 * @description Component used to view image post in postComponent Container
 * @param {HtmlTag} imageTag - image HTML tag containing src and alt attributes
 * @param {boolean} caption - caption of the image viewed as description to the post
 * @param {string} postId - id of the post
 * @returns {Component} ImagePost Component
 */

ImageList.propTypes = {
    imageTag: PropTypes.string.isRequired,
    caption: PropTypes.string,
    postId: PropTypes.string.isRequired
};

export default function ImageList(props) {
    const { imageTag, caption, postId } = props;
    const [imgSrcUrl, setImgSrcUrl] = useState('');
    const [imgAlt, setImgAlt] = useState('');

    useEffect(() => {
        extractImageData(imageTag, setImgSrcUrl, setImgAlt);
    }, [imageTag]);

    return (
        <>
            <div
                style={{ display: 'none' }}
                className="show-image-modal"
                id={`show-image-modal${imgSrcUrl}-${postId}`}
                role="dialog"
                aria-modal="true"
                onClick={() => {
                    closeImagePreview(imgSrcUrl, postId);
                }}
            >
                <div className="img-preview-container">
                    <span>
                        <img
                            className="preview-img"
                            id={`preview-img${imgSrcUrl}-${postId}`}
                            loading="lazy"
                        />
                    </span>
                </div>
            </div>
            <div className="images-list">
                <div className="image">
                    <button
                        onClick={() => {
                            showImage(imgSrcUrl, postId);
                        }}
                        className="img-link btn"
                    >
                        <figure>
                            <img
                                className="post-img"
                                src={imgSrcUrl}
                                alt={imgAlt}
                            />
                        </figure>
                    </button>
                </div>
            </div>
            <div className="post-body">
                <span className="body-content">{caption}</span>
            </div>
        </>
    );
}
