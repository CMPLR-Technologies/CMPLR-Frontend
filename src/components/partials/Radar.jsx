import React, { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { apiBaseUrl } from '../../config.json';
import { LinearProgress } from '@mui/material';
import PostComponent from './postComponent/containers/PostComponent';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';

export default function Radar() {
    const theme = useContext(ThemeContext)[0];
    const {
        error,
        data: radarPost,
        isPending
    } = useFetch(`${apiBaseUrl}/radar-post`);
    return (
        <div className="Radar">
            <h3
                style={{
                    color: `rgb(${themes[theme].whiteOnDark})`
                }}
            >
                Radar
            </h3>
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
            {radarPost && (
                <div className="radar-warper">
                    <PostComponent
                        post={radarPost}
                        radar={true}
                        otherClass="radar-post"
                        isFollowed={false}
                    />
                </div>
            )}
        </div>
    );
}
