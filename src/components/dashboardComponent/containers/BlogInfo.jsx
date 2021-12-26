import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';

export default function BlogInfo({ blogName, blogDesc, blogIcon }) {
    const theme = useContext(ThemeContext)[0];

    return (
        <div className="dashboard-blogInfo" style={{ position: 'relative' }}>
            <a href="/">
                <div className="blogInfo-row">
                    <img src={blogIcon} alt="" />
                    <div className="blogInfo-column">
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
                        className="to-end init-btn follow-btn"
                        href="/"
                    >
                        Follow
                    </button>
                </div>
            </a>
            <button className="init-btn remove-btn">
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 14 14"
                    fill={`rgba(${themes[theme].whiteOnDark}, 0.13)`}
                >
                    <path d="M14 2.8L11.2 0 7 4.2 2.8 0 0 2.8 4.2 7 0 11.2 2.8 14 7 9.8l4.2 4.2 2.8-2.8L9.8 7 14 2.8z"></path>
                </svg>
            </button>
        </div>
    );
}
BlogInfo.propTypes = {
    blogName: PropTypes.string,
    blogDesc: PropTypes.string,
    blogIcon: PropTypes.string
};
