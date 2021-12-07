import React from 'react';
import PropTypes from 'prop-types';

export default function OptionIcon(props) {
    const { typeName, draw, fill } = props;
    return (
        <>
            <li>
                <button className="btncreateoption" aria-label="Text">
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
