import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function ProfileSideSettings(props) {
    const {
        blogID,
        /*blogName,*/
        /*setSidePostID,*/
        body
    } = props;
    const {
        avatar,
        header_image: headerImage,
        title,
        desciption,
        blog_name: blogName
    } = body;

    // const body = {
    //     username: 'huh',
    //     avatar: 'https://pbs.twimg.com/profile_images/1026496068555612160/Klg8BS8p_400x400.jpg',
    //     bg: 'https://i.ytimg.com/vi/6Vhp65bgKOo/maxresdefault.jpg',
    //     title: 'Heey man',
    //     description: 'wa wafbuaw uwbwakf'
    // };

    return (
        <div className="profile-side">
            <div className="profile-side-header">
                <NavLink
                    to={`/blog/view/${blogName}/${blogID}/posts`}
                    className="profile-side-header-div"
                >
                    <img
                        className="profile-side-header-div-bg"
                        src={headerImage}
                        alt="couldn't load bg"
                    />
                </NavLink>
                <NavLink to={`/blog/view/${blogName}/${blogID}/posts`}>
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
            </div>
        </div>
    );
}

ProfileSideSettings.propTypes = {
    blogID: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func,
    setSidePostID: PropTypes.func,
    body: PropTypes.object.isRequired,
    sidePostID: PropTypes.string
};
