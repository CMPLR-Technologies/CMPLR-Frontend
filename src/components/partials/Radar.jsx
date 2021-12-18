import React, { useContext } from 'react';
import { LinearProgress } from '@mui/material';
import PostComponent from './postComponent/containers/PostComponent';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';

// eslint-disable-next-line react/prop-types
export default function Radar({ error, radarPost, isPending }) {
    const theme = useContext(ThemeContext)[0];

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
