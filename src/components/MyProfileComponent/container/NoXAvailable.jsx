import React from 'react';
import propTypes from 'prop-types';

NoXAvailable.propTypes = {
    x: propTypes.string
};
export default function NoXAvailable(props) {
    const { x } = props;
    return (
        <div className="not-available">
            <svg
                viewBox="0 0 112 112"
                width="100"
                height="100"
                fill="rgba(255,255,255, 0.65)"
            >
                <path d="M25 8h31v29.5h31v41.015l-62-62V8zm0 17L13.243 13.243 9 17.485l16 16V95h61.515l8.752 8.752 4.243-4.242L87 87 25 25zm37 7V8l25 24H62z"></path>
            </svg>
            No {x} Available
        </div>
    );
}
