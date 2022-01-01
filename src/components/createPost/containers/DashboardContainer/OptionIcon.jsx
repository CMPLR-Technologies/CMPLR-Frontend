import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

/**
 * Draw CreatePost Icons
 * @function OptionIcon
 * @property {string} typeName
 * @property {path} draw
 * @property {string} fill
 * @description it's used for drawing the Text/Pic/Video etc icons
 * @returns {Component}
 */
export default function OptionIcon(props) {
    const { typeName, draw, fill } = props;
    const navigate = useNavigate();

    const handleOpen = () => {
        navigate('/new/post');
    };

    return (
        <>
            <li>
                <button
                    onClick={handleOpen}
                    className="btncreateoption"
                    aria-label="Text"
                >
                    <span className="spanStyle">
                        <svg
                            viewBox="0 0 20.8 13"
                            height="35"
                            width="40"
                            fill={fill}
                        >
                            <path d={draw}></path>
                        </svg>
                    </span>
                    {typeName}
                </button>
            </li>
        </>
    );
}

OptionIcon.propTypes = {
    draw: PropTypes.string.isRequired,
    typeName: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired
};
