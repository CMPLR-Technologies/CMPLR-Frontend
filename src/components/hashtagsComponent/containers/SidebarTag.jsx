import React, { useContext } from 'react';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import RecommendBlogs from '../../dashboardComponent/containers/RecommendBlogs';
import HashtagView from './Hashtag';

export default function SidebarTag() {
    const theme = useContext(ThemeContext)[0];
    return (
        <div className="dashboard-sidebar">
            <HashtagView />
            <h3
                style={{
                    color: `rgb(${themes[theme].whiteOnDark})`
                }}
            >
                Check out these blogs
            </h3>
            <RecommendBlogs />
        </div>
    );
}
