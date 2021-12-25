import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { apiBaseUrl } from '../../../../config.json';
import useFetch from '../../../../hooks/useFetch';
import { LinearProgress } from '@mui/material';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';

export default function ProfileSide(props) {
    const { blogID, setSidePostID, setShowSideBlog, sidePostID, body } = props;
    const { avatar, header_image: headerImage, title, desciption } = body;
    const {
        error,
        data: post,
        isPending
    } = useFetch(`${apiBaseUrl}/posts/${sidePostID}`);

    const [scrollTop, setScrollTop] = useState(0);
    const headerScrollAnimation = el => {
        setScrollTop(el.target.scrollTop);
    };
    const theme = useContext(ThemeContext)[0];

    const css = `
        .overlay-no-theme {
            background-color: rgb(${themes[theme].navy});
        }
        .profile-side-header-avatar {
            opacity: ${Math.min(Math.max((108 - scrollTop) / 108, 0), 1)};
            ${scrollTop > 108 && 'display: none'}            
        }
        .profile-side-header-div-bg{
            filter: blur(${Math.min(scrollTop, 260) / 40}px);
            object-position: 0 ${Math.min(scrollTop / 2, 108)}px;
        }
        .profile-side-header-fixed{
            filter: blur(${Math.min(scrollTop, 260) / 40}px);
        }
    `;
    // const body = {
    //     username: 'huh',
    //     avatar: 'https://pbs.twimg.com/profile_images/1026496068555612160/Klg8BS8p_400x400.jpg',
    //     bg: 'https://i.ytimg.com/vi/6Vhp65bgKOo/maxresdefault.jpg',
    //     title: 'Heey man',
    //     description: 'wa wafbuaw uwbwakf'
    // };

    return (
        <div className="profile-side" onScroll={headerScrollAnimation}>
            <div className="profile-side-header">
                {/*scrollTop > 216 && (
                <img
                    className="profile-side-header-fixed"
                    src={body.bg}
                    alt="couldn't load bg"
                />
            )*/}
                <NavLink
                    to={`/blog/view/${blogID}`}
                    className="profile-side-header-div"
                >
                    <img
                        className="profile-side-header-div-bg"
                        src={headerImage}
                        alt="couldn't load bg"
                    />
                </NavLink>
                <NavLink to={`/blog/view/${blogID}`}>
                    <img
                        className="profile-side-header-avatar"
                        src={avatar}
                        alt="couldn't load avatar"
                    />
                </NavLink>

                <div className="profile-side-header-text">
                    <div className="profile-side-header-text-title">
                        {title}
                    </div>
                    <div className="profile-side-header-text-desc">
                        {desciption}
                    </div>
                </div>
                {sidePostID ? (
                    error ? (
                        <div className="no-data-error">{"Couldn't load"}</div>
                    ) : isPending ? (
                        <LinearProgress />
                    ) : post ? (
                        <div>{sidePostID}</div>
                    ) : (
                        <div></div>
                    )
                ) : (
                    <div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                        <div> fwaw </div>
                    </div>
                )}
                <style>{css}</style>
            </div>
        </div>
    );
}

ProfileSide.propTypes = {
    blogID: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired,
    body: PropTypes.object.isRequired,
    sidePostID: PropTypes.string.isRequired
};
