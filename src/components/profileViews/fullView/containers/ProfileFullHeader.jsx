import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function ProfileFullHeader(props) {
    const { blogID, content } = props;
    const { avatar, header_image: headerImage, title, desciption } = body;
    const [scrollTop, setScrollTop] = useState(0);
    const headerScrollAnimation = el => {
        setScrollTop(el.target.scrollTop);
    };
    const css = `
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
                <img
                    className="profile-side-header-avatar"
                    src={avatar}
                    alt="couldn't load avatar"
                />
                <div className="profile-side-header-text">
                    <div className="profile-side-header-text-title">
                        {title}
                    </div>
                    <div className="profile-side-header-text-desc">
                        {desciption}
                    </div>
                </div>
                {sidePostID ? (
                    <div>{sidePostID}</div>
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

ProfileFullHeader.propTypes = {
    blogID: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
