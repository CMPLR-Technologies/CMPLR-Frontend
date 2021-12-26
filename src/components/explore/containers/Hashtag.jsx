import React from 'react';
import PropTypes from 'prop-types';

export default function Hashtag(props) {
    const { name, firstImg, secondImg, link, color, background, border } =
        props;
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
            <button style={{ color: background, background: color }}>
                Follow
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
