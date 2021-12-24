import React, { useContext } from 'react';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';

export default function Following() {
    const theme = useContext(ThemeContext)[0];
    const followingStyles = {
        background: `rgba(${themes[theme].whiteOnDark}, 0.07)`
    };
    const headStyles = {
        color: `rgb(${themes[theme].whiteOnDark})`,
        borderBottom: `solid 1px rgba(${themes[theme].whiteOnDark}, 0.13)`
    };
    const typoStyles = {
        color: `rgb(${themes[theme].whiteOnDark})`
    };
    return (
        <div className="explore-following" style={followingStyles}>
            <div className="explore-following-head" style={headStyles}>
                <span>Following</span>
                <span>Edit</span>
            </div>
            <div className="explore-following-main">
                <div className="following-hashtag">
                    <img src="https://64.media.tumblr.com/5321df071c0777b12faa659e7662e97a/adf9e8c81bd814f7-70/s640x960/0fb9219fd16d394613e0d8731b02ad44e9e22e4d.jpg" />
                    <div className="following-hashtag-info" style={typoStyles}>
                        <span>code#</span>
                        <span>69 recent posts</span>
                    </div>
                </div>

                <div className="following-hashtag">
                    <img src="https://64.media.tumblr.com/5321df071c0777b12faa659e7662e97a/adf9e8c81bd814f7-70/s640x960/0fb9219fd16d394613e0d8731b02ad44e9e22e4d.jpg" />
                    <div className="following-hashtag-info" style={typoStyles}>
                        <span>code#</span>
                        <span>69 recent posts</span>
                    </div>
                </div>

                <div className="following-hashtag">
                    <img src="https://64.media.tumblr.com/5321df071c0777b12faa659e7662e97a/adf9e8c81bd814f7-70/s640x960/0fb9219fd16d394613e0d8731b02ad44e9e22e4d.jpg" />
                    <div className="following-hashtag-info" style={typoStyles}>
                        <span>code#</span>
                        <span>69 recent posts</span>
                    </div>
                </div>
                <div className="following-hashtag">
                    <img src="https://64.media.tumblr.com/5321df071c0777b12faa659e7662e97a/adf9e8c81bd814f7-70/s640x960/0fb9219fd16d394613e0d8731b02ad44e9e22e4d.jpg" />
                    <div className="following-hashtag-info" style={typoStyles}>
                        <span>code#</span>
                        <span>69 recent posts</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
