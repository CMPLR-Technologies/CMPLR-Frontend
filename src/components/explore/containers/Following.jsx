import React, { useContext } from 'react';
import { useState } from 'react';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import { followingHashtags } from '../Data';
import { showTags } from '../Controller';
export default function Following() {
    const theme = useContext(ThemeContext)[0];
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);

    const headStyles = {
        color: `rgb(${themes[theme].whiteOnDark})`,
        borderBottom: `solid 1px rgba(${themes[theme].whiteOnDark}, 0.13)`
    };
    const btnStyles = {
        color: `rgb(${themes[theme].accent})`,
        borderTop: `solid 1px rgba(${themes[theme].whiteOnDark}, 0.13)`
    };
    const styles = `
    .following-hashtag:hover{
        background: rgba(${themes[theme].whiteOnDark}, 0.13);
    }
    `;
    return (
        <div
            className="explore-following"
            style={{ background: `rgba(${themes[theme].whiteOnDark}, 0.07)` }}
        >
            <div className="explore-following-head" style={headStyles}>
                <span>Following</span>
                <span>Edit</span>
            </div>
            <div className="explore-following-main">
                {followingHashtags.slice(start, end).map((hashtag, index) => {
                    return (
                        <a key={index} href={hashtag.link}>
                            <div className="following-hashtag">
                                <img src={hashtag.image} />
                                <div
                                    className="following-hashtag-info"
                                    style={{
                                        color: `rgb(${themes[theme].whiteOnDark})`
                                    }}
                                >
                                    <span>{hashtag.name}</span>
                                    <span>{hashtag.posts} recent posts</span>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
            <button
                className="moreTags"
                style={btnStyles}
                onClick={() => {
                    showTags(end, setStart, setEnd);
                }}
            >
                Show more tags
            </button>
            <style>{styles}</style>
        </div>
    );
}
