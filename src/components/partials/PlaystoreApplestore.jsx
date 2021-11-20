import React from 'react';

/**
 * Mobile Mood Buttons
 * @function PlaystoreApplestore
 * @description used in mobile browser mood for showing google/apple stores logos
 * @returns {Component} images of google_store/play_store when browser in mobile mode
 */

export default function PlaystoreApplestore() {
    return (
        <div className="LoginCard__stores-logos">
            <a href="/">
                <img
                    src="https://assets.tumblr.com/pop/src/assets/images/download-on-the-appstore/en-8c4986ee.svg"
                    alt="Download on the Apple Store"
                    style={{ paddingRight: '20px' }}
                />
            </a>

            <a href="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt=""
                />
            </a>
        </div>
    );
}
