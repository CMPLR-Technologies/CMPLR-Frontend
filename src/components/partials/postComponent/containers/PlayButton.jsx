import React from 'react';
import PropTypes from 'prop-types';

PlayButton.propTypes = {
    played: PropTypes.bool.isRequired
};
export default function PlayButton(props) {
    const { played } = props;
    return played ? (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <rect width="4" height="16" x="15" y="4" rx="1"></rect>
            <rect width="4" height="16" x="5" y="4" rx="1"></rect>
        </svg>
    ) : (
        <svg width="24" height="24" viewBox="18 15 13 16">
            <g fill="none">
                <path
                    fill="white"
                    d="M30.592 23.578L19.52 30.3a1 1 0 0 1-1.52-.854V16a1 1 0 0 1 1.519-.855l11.073 6.723a1 1 0 0 1 0 1.71z"
                ></path>
            </g>
        </svg>
    );
}
