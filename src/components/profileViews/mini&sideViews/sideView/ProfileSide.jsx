import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
import ProfileSideOnePost from './ProfileSideOnePost';
import ProfileSideAllPosts from './ProfileSideAllPosts';
import Navbar2SideView from '../../../navbar2Files/navbar2SideView/Navbar2SideView';

export default function ProfileSide(props) {
    const {
        blogID,
        /*blogName,*/
        /*setSidePostID,*/ setShowSideBlog,
        sidePostID,
        body
    } = props;
    const {
        avatar,
        header_image: headerImage,
        title,
        desciption,
        blog_name: blogName
    } = body;

    const isFollowed = false;
    const isBlocked = false;

    const [scrollTop, setScrollTop] = useState(0);
    const headerScrollAnimation = el => {
        setScrollTop(el.target.scrollTop);
    };
    const theme = useContext(ThemeContext)[0];

    const css = `
        .post-container{
            box-shadow: 0 0 0 1px rgba(${themes[theme].black},.07);
        }
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
                <Navbar2SideView
                    setShowSideBlog={setShowSideBlog}
                    blogName={blogName}
                    blogID={blogID}
                    isFollowed={isFollowed}
                    isBlocked={isBlocked}
                />
                {isBlocked && (
                    <div className="profile-side-header-blocked">
                        <div>
                            This blog is Blocked, you can unblock it to view its
                            content
                        </div>
                    </div>
                )}

                {!isBlocked && (
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
                )}
                {!isBlocked && (
                    <NavLink to={`/blog/view/${blogName}/${blogID}/posts`}>
                        <img
                            className="profile-side-header-avatar"
                            src={avatar}
                            alt="couldn't load avatar"
                        />
                    </NavLink>
                )}
                {!isBlocked && (
                    <div className="profile-side-header-text">
                        <div className="profile-side-header-text-title">
                            {title === 'untitled' ? blogName : title}
                        </div>
                        <div className="profile-side-header-text-desc">
                            {desciption}
                        </div>
                    </div>
                )}
                {!isBlocked && (
                    <div className="profile-side-header-post-container">
                        {sidePostID ? (
                            <ProfileSideOnePost
                                blogName={blogName}
                                blogID={blogID}
                                sidePostID={sidePostID}
                                noTheme={false}
                            />
                        ) : (
                            <ProfileSideAllPosts
                                blogName={blogName}
                                noTheme={false}
                            />
                        )}
                    </div>
                )}
                <style>{css}</style>
            </div>
        </div>
    );
}

ProfileSide.propTypes = {
    blogID: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func,
    setSidePostID: PropTypes.func,
    body: PropTypes.object.isRequired,
    sidePostID: PropTypes.string
};
