import React, { useContext } from 'react';
import img from './logo.png';
import PropTypes from 'prop-types';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';

// eslint-disable-next-line react/prop-types
export default function BlogInfo({ blogName, blogDesc }) {
    const theme = useContext(ThemeContext)[0];

    return (
        <div className="dashboard-blogInfo">
            <a href="/">
                <div className="row">
                    <img src={img} alt="" />
                    <div className="column">
                        <p
                            style={{
                                color: `rgb(${themes[theme].whiteOnDark})`
                            }}
                        >
                            {blogName}
                        </p>
                        <p
                            style={{
                                color: `rgba(${themes[theme].whiteOnDark}, 0.65)`
                            }}
                        >
                            {blogDesc}
                        </p>
                    </div>
                    <button
                        style={{
                            color: `rgb(${themes[theme].accent})`
                        }}
                        className="to-end init-button"
                        href="/"
                    >
                        Follow
                    </button>
                </div>
            </a>
        </div>
    );
}

BlogInfo.prototype = {
    blogName: PropTypes.string.isRequired,
    blogDesc: PropTypes.string.isRequired
};
