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
            {error && <div>{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
            {radarPost && <PostComponent post={radarPost} />}
        </div>
    );
}
