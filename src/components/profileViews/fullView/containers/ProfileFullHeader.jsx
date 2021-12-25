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

export default function ProfileFullHeader(props) {
    const { blogName, blogID, content } = props;
    const response = useFetch(`${apiBaseUrl}/MiniProfileView/${blogID}`);
    const { error, data, isPending } = response;

    const [scrollTop, setScrollTop] = useState(0);
    const headerScrollAnimation = el => {
        setScrollTop(el.target.scrollTop);
    };
    const theme = useContext(ThemeContext)[0];
    console.log(scrollTop);
    const css = `
        .post-container{
            box-shadow: 0 0 0 1px rgba(${themes[theme].black},.07);
        }
        .profile-side-header-avatar {
            opacity: ${Math.min(Math.max((150 - scrollTop) / 150, 0), 1)};
            ${scrollTop > 108 && 'display: none'}            
        }
        .profile-side-header-div-bg{
            filter: blur(${Math.min(scrollTop, 300) / 40}px);
            object-position: 0 ${Math.min(scrollTop / 2, 150)}px;
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
        <div className="profile-full" onScroll={headerScrollAnimation}>
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
            {data && (
                <div className="profile-side-header">
                    <NavLink
                        to={`/blog/view/${blogName}/${blogID}`}
                        className="profile-side-header-div"
                    >
                        <img
                            className="profile-side-header-div-bg"
                            src={data.blog.header_image}
                            alt="couldn't load bg"
                        />
                    </NavLink>
                    <NavLink to={`/blog/view/${blogName}/${blogID}`}>
                        <img
                            className="profile-side-header-avatar"
                            src={data.blog.avatar}
                            alt="couldn't load avatar"
                        />
                    </NavLink>

                    <div className="profile-side-header-text">
                        <NavLink
                            className="profile-side-header-text-link"
                            to={`/blog/view/${blogName}/${blogID}`}
                        >
                            <div className="profile-side-header-text-title">
                                {data.blog.title}
                            </div>
                        </NavLink>
                        <div className="profile-side-header-text-desc">
                            {data.blog.desciption}
                        </div>
                    </div>
                    <div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                        <div>ffwafwa</div>
                    </div>
                    <style>{css}</style>
                </div>
            )}
        </div>
    );
}

ProfileFullHeader.propTypes = {
    blogName: PropTypes.string.isRequired,
    blogID: PropTypes.string.isRequired,
    content: PropTypes.string
};
