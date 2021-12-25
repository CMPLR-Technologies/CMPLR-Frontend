import React from 'react';
import ProfileMiniBody from './ProfileMiniBody';
import ProfileMiniImages from './ProfileMiniImages';
import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';

// import {
//     ThemeContext,
//     themes
// } from '../../../contexts/themeContext/ThemeContext';

export default function ProfileMini(props) {
    const { setShowSideBlog, setSidePostID, response } = props;
    //const [postSideView, setPostSideView] = useState('');
    const { error, data, isPending } = response;
    // const body = {
    //     username: 'huh',
    //     avatar: 'https://pbs.twimg.com/profile_images/1026496068555612160/Klg8BS8p_400x400.jpg',
    //     bg: 'https://i.ytimg.com/vi/6Vhp65bgKOo/maxresdefault.jpg',
    //     title: 'Heey man',
    //     description: 'wa wafbuaw uwbwakf'
    // };
    // const imgs = [
    //     {
    //         link: 'https://www.cigareta-shop.eu/_obchody/cigareta-shop.web5.cz/prilohy/16/eleaf-ijust-aio-1500mah-0.png.big.jpg',
    //         post: '1'
    //     },
    //     {
    //         link: 'https://everydaypower.com/wp-content/uploads/2021/07/50-Killua-Quotes-From-the-Popular-Anime-Manga-Series.jpg',
    //         post: '2'
    //     },
    //     {
    //         link: 'https://i.ytimg.com/vi/6Vhp65bgKOo/maxresdefault.jpg',
    //         post: '3'
    //     }
    // ];
    return (
        <div className="profile-mini">
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
            {data && data.response && (
                <ProfileMiniBody
                    setShowSideBlog={setShowSideBlog}
                    setSidePostID={setSidePostID}
                    body={data.response.blog}
                />
            )}
            {data && data.response && data.response.views && (
                /* data.response.views.length === 3 &&*/ <ProfileMiniImages
                    setShowSideBlog={setShowSideBlog}
                    setSidePostID={setSidePostID}
                    imgs={data.response.views}
                />
            )}
        </div>
    );
}
ProfileMini.propTypes = {
    blogID: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
};
