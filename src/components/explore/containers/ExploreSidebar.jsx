import React, { useContext } from 'react';
import RecommendBlogs from '../../dashboardComponent/containers/RecommendBlogs';
import Following from './Following';
import { exploreBlogs } from '../Data';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';

export default function ExploreSidebar() {
    const theme = useContext(ThemeContext)[0];
    return (
        <div className="explore-sidebar">
            <Following />
            <div
                style={{
                    background: `rgba(${themes[theme].whiteOnDark}, 0.07)`
                }}
            >
                <RecommendBlogs
                    blogsError={false}
                    blogs={exploreBlogs}
                    blogsIsPending={false}
                    showExplore={false}
                    otherClass={'explore-recommendedBlogs'}
                />
            </div>
        </div>
    );
}
