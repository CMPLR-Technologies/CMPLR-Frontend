import React, { useContext } from 'react';
import { useState } from 'react';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import { showTags } from '../Controller';
import useFetch from '../../../hooks/useFetch';
import { apiBaseUrl } from '../../../config.json';
import { LinearProgress } from '@material-ui/core';

export default function Following() {
    const { error, data, isPending } = useFetch(`${apiBaseUrl}/following/tags`);
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
            </div>
            <div className="explore-following-main">
                {isPending && <LinearProgress />}
                {error && (
                    <div className="no-data-error">{"Couldn't load"}</div>
                )}
                {data &&
                    data.slice(start, end).map((hashtag, index) => {
                        return (
                            <a key={index} href={`/tagged/${hashtag?.name}`}>
                                <div className="following-hashtag">
                                    <img
                                        src={
                                            hashtag && hashtag.cover_image
                                                ? hashtag.cover_image.link
                                                : 'https://64.media.tumblr.com/avatar_88dad111d576_128.pnj'
                                        }
                                    />
                                    <div
                                        className="following-hashtag-info"
                                        style={{
                                            color: `rgb(${themes[theme].whiteOnDark})`
                                        }}
                                    >
                                        <span>{hashtag?.name}</span>
                                        <span>
                                            {hashtag
                                                ? hashtag?.posts_count
                                                : 69}{' '}
                                            recent posts
                                        </span>
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
                    showTags(setStart, setEnd, end, data?.length);
                }}
                disabled={data && data.length <= 4}
            >
                Show more tags
            </button>
            <style>{styles}</style>
        </div>
    );
}
