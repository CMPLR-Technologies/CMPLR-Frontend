import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { followHashtag, unfollowHashtag } from '../Service';
import { UserContext } from '../../../contexts/userContext/UserContext';

/**
 * Hashtag Component
 * @function Hashtag
 * @description The Hashtag in the Recommended Hashtags List
 * @property {string} name - hashtag name
 * @property {string} firstImg - url for an image
 * @property {string} secondImg - url for an image
 * @property {string} link - url of the hashtag page
 * @property {string} color - font color
 * @property {string} background - background color
 * @property {string} border - background border
 * @returns {Component} Component that contains 5 Recommended blogs
 */

export default function Hashtag(props) {
    const { name, firstImg, secondImg, link, color, background, border } =
        props;
    const [toFollow, setToFollow] = useState(true);

    const { user } = useContext(UserContext);
    return (
        <div
            className="explore-hashtag"
            style={{ background: background, borderColor: border }}
        >
            <a href={link}>
                <span style={{ color: color }}>{name}</span>
                <div className="explore-hashtag-images">
                    <img src={firstImg} />
                    <img src={secondImg} />
                </div>
            </a>
            <button
                style={{ color: background, background: color }}
                onClick={() => {
                    toFollow
                        ? followHashtag(name, user?.token, setToFollow)
                        : unfollowHashtag(name, user?.token, setToFollow);
                }}
            >
                {toFollow ? 'Follow' : 'UnFollow'}
            </button>
        </div>
    );
}
Hashtag.propTypes = {
    name: PropTypes.string,
    firstImg: PropTypes.string,
    secondImg: PropTypes.string,
    link: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    border: PropTypes.string
};
