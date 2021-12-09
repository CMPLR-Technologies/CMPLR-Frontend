import React from 'react';
import useFetch from '../../hooks/useFetch';
import { apiBaseUrl } from '../../config.json';
import { LinearProgress } from '@mui/material';
import PostComponent from './postComponent/containers/PostComponent';

export default function Radar() {
    const {
        error,
        data: radarPost,
        isPending
    } = useFetch(`${apiBaseUrl}/radar-post`);
    return (
        <div className="Radar">
            <h3>Radar</h3>
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
            {radarPost && (
                <div className="radar-warper">
                    <PostComponent
                        post={radarPost}
                        radar={true}
                        otherClass="radar-post"
                    />
                </div>
            )}
        </div>
    );
}
