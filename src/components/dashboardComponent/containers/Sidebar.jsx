import React, { useContext } from 'react';
import RecommendBlogs from './RecommendBlogs';
import Radar from '../../partials/Radar';
import { apiBaseUrl } from '../../../config.json';
import useFetch from '../../../hooks/useFetch';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';

export default function Sidebar() {
    const {
        error,
        data: radarPost,
        isPending
    } = useFetch(`${apiBaseUrl}/radar-post`);
    const theme = useContext(ThemeContext)[0];
    return (
        <div className="dashboard-sidebar">
            <h3
                style={{
                    color: `rgb(${themes[theme].whiteOnDark})`
                }}
            >
                Check out these blogs
            </h3>
            <RecommendBlogs />
            <Radar error={error} radarPost={radarPost} isPending={isPending} />
        </div>
    );
}
