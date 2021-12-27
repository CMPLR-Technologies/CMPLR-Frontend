import React, { useContext } from 'react';
import { LinearProgress } from '@mui/material';
import PostComponent from './postComponent/containers/PostComponent';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';
import { apiBaseUrl } from './../../config.json';
import useFetch from '../../hooks/useFetch';

export default function Radar() {
    const { error, data, isPending } = useFetch(`${apiBaseUrl}/posts/radar/`);
    const theme = useContext(ThemeContext)[0];
    const user = JSON.parse(localStorage.getItem('user'));

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
            {data && (
                <div className="radar-warper">
                    <PostComponent
                        post={{ blog: data.blog, post: data.post }}
                        radar={true}
                        otherClass="radar-post"
                        isFollowed={false}
                        userBlogName={user?.blogName}
                    />
                </div>
            )}
        </div>
    );
}
