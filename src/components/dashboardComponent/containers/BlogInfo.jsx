import React, { useContext } from 'react';
import img from './logo.png';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';

export default function BlogInfo() {
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
                            Hello world
                        </p>
                        <p
                            style={{
                                color: `rgba(${themes[theme].whiteOnDark}, 0.65)`
                            }}
                        >
                            Cpp
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
