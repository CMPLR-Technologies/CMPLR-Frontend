import React from 'react';
import Hashtag from './Hashtag';

export default function HashtagsList() {
    return (
        <div className="explore-hashtags">
            <svg
                width="40"
                height="40"
                viewBox="0 0 15 9"
                fill="#ffffff"
                style={{ transform: 'rotate(90deg)' }}
                className="arrow-icon"
            >
                <path d="M2.498 1.045a1.026 1.026 0 0 0-1.446.005 1.027 1.027 0 0 0 0 1.454l5.839 5.45a1.023 1.023 0 0 0 .83.29c-.017.004.02.006.057.006.27 0 .53-.106.726-.3l5.828-5.44a1.029 1.029 0 1 0-1.448-1.46l-5.19 4.845-5.196-4.85z"></path>
            </svg>

            <Hashtag />
            <Hashtag />
            <Hashtag />
            <Hashtag />
            <svg
                width="40"
                height="40"
                viewBox="0 0 15 9"
                fill="#ffffff"
                style={{ transform: 'rotate(270deg)', right: '20px' }}
                className="arrow-icon"
            >
                <path d="M2.498 1.045a1.026 1.026 0 0 0-1.446.005 1.027 1.027 0 0 0 0 1.454l5.839 5.45a1.023 1.023 0 0 0 .83.29c-.017.004.02.006.057.006.27 0 .53-.106.726-.3l5.828-5.44a1.029 1.029 0 1 0-1.448-1.46l-5.19 4.845-5.196-4.85z"></path>
            </svg>
        </div>
    );
}
