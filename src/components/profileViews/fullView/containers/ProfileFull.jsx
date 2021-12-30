import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';
import { apiBaseUrl } from '../../../../config.json';
import useFetch from '../../../../hooks/useFetch';
import { LinearProgress } from '@mui/material';
import ProfileContent from './content/ProfileContent';
import ProfileFollowing from './content/ProfileFollowing';
import ProfileLikes from './content/ProfileLikes';
import Navbar2MainView from '../../../navbar2Files/navbar2MainView/Navbar2MainView';

/**
 * @function ProfileFull
 * @description Full Blog View main Component
 * @property {string} blogID
 * @property {string} blogName
 * @property {string} content - a string gotten from url params, used to specify the type of content in Blog view (likes, following, posts ..etc)
 * @returns {Component}
 */

export default function ProfileFull(props) {
    const { postID } = useParams();
    const { blogName, blogID, content } = props;
    const [scrollTop, setScrollTop] = useState(0);
    const headerScrollAnimation = el => {
        setScrollTop(el.target.scrollTop);
    };
    //const isFollowed = false;

    const response = useFetch(`${apiBaseUrl}/MiniProfileView/${blogID}`);
    const navArray = [
        {
            title: 'POSTS',
            link: 'posts'
        },
        {
            title: 'LIKES',
            link: 'likes'
        },
        {
            title: 'FOLLOWING',
            link: 'following'
        },
        {
            title: 'ASK ME ANYTHING',
            link: 'ask'
        }
    ];
    const { error, data, isPending } = response;
    const css = `
    .post-container{
        box-shadow: 0 0 0 1px rgba(0,0,0,.07);
    }
    .profile-full-header-avatar {
        opacity: ${Math.min(Math.max((150 - scrollTop) / 150, 0), 1)};
        ${scrollTop > 108 && 'display: none'}            
    }
    .profile-full-header-div-bg{
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
        <div>
            {error && (
                <div className="profile-full-header">
                    <br />
                    <br />
                    <br />
                    <div className="no-data-error">{"Couldn't load"}</div>
                </div>
            )}
            {isPending && <LinearProgress />}
            {data && (
                <div
                    className="profile-full-header"
                    onScroll={headerScrollAnimation}
                >
                    <Navbar2MainView
                        blogName={blogName}
                        blogID={blogID}
                        isFollowed={data?.blog.is_followed}
                        isBlocked={data?.blog.is_blocked}
                    />
                    <NavLink
                        to={`/blog/view/${blogName}/${blogID}/posts`}
                        className="profile-full-header-div"
                    >
                        <img
                            className="profile-full-header-div-bg"
                            src={data.blog.header_image}
                            alt="couldn't load bg"
                        />
                    </NavLink>
                    <NavLink to={`/blog/view/${blogName}/${blogID}/posts`}>
                        <img
                            className="profile-full-header-avatar"
                            src={data.blog.avatar}
                            alt="couldn't load avatar"
                        />
                    </NavLink>

                    <div className="profile-full-header-text">
                        <NavLink
                            className="profile-full-header-text-link"
                            to={`/blog/view/${blogName}/${blogID}/posts`}
                        >
                            <div className="profile-full-header-text-title">
                                {data.blog.title === 'untitled'
                                    ? blogName
                                    : data.blog.title}
                            </div>
                        </NavLink>
                        <div className="profile-full-header-text-desc">
                            {data.blog.desciption}
                        </div>
                    </div>
                    <div className="profile-full-header-nav">
                        {navArray.map(
                            (category, index) =>
                                (data.blog.is_primary ||
                                    category.link === 'posts' ||
                                    category.link === 'ask') && (
                                    <NavLink
                                        className={`profile-full-header-nav-link ${
                                            category.link === content &&
                                            'underline'
                                        }`}
                                        to={`/blog/view/${blogName}/${blogID}/${category.link}`}
                                        key={index}
                                    >
                                        {category.title}
                                    </NavLink>
                                )
                        )}
                    </div>
                    {(content === 'posts' || content === 'ask') && (
                        <ProfileContent
                            blogName={blogName}
                            blogID={blogID}
                            content={content}
                            postID={postID}
                        />
                    )}
                    {content === 'following' &&
                        (data.blog.is_primary ? (
                            <ProfileFollowing
                                blogName={blogName}
                                blogID={blogID}
                            />
                        ) : (
                            <div className="no-data-error">
                                Not a primary Blog
                            </div>
                        ))}
                    {content === 'likes' &&
                        (data.blog.is_primary ? (
                            <ProfileLikes blogName={blogName} blogID={blogID} />
                        ) : (
                            <div className="no-data-error">
                                Not a primary Blog
                            </div>
                        ))}
                </div>
            )}
            <style>{css}</style>
        </div>
    );
}

ProfileFull.propTypes = {
    blogName: PropTypes.string.isRequired,
    blogID: PropTypes.string.isRequired,
    content: PropTypes.string
};
