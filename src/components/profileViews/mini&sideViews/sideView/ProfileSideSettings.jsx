import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import apiBaseUrl from '../../../../config.json';
import { LinearProgress } from '@mui/material';

export default function ProfileSideSettings(props) {
    const {
        blogId
        /*blogName,*/
        /*setSidePostID,*/
    } = props;
    const {
        error,
        data: body,
        isPending
    } = useFetch(`${apiBaseUrl}/MiniProfileView/10`);
    console.log(blogId, error, body, isPending);
    // const body = {
    //     username: 'huh',
    //     avatar: 'https://pbs.twimg.com/profile_images/1026496068555612160/Klg8BS8p_400x400.jpg',
    //     bg: 'https://i.ytimg.com/vi/6Vhp65bgKOo/maxresdefault.jpg',
    //     title: 'Heey man',
    //     description: 'wa wafbuaw uwbwakf'
    // };

    return (
        <div className="profile-settings">
            {error}
            {isPending && <LinearProgress />}
            {body && body.blog && (
                <div className="profile-side">
                    <div className="profile-side-header">
                        <div className="profile-side-header-div">
                            <img
                                className="profile-side-header-div-bg"
                                src={body.blog.header_image}
                                alt="couldn't load bg"
                            />
                        </div>
                        <img
                            className="profile-side-header-avatar"
                            src={body.blog.avatar}
                            alt="couldn't load avatar"
                        />
                        <div className="profile-side-header-text">
                            <NavLink
                                to={`/blog/view/${body.blog.blog_name}/${blogId}/posts`}
                            >
                                <div className="profile-side-header-text-title">
                                    {body.blog.title === 'untitled'
                                        ? body.blog.blog_name
                                        : body.blog.title}
                                </div>
                            </NavLink>
                            <div className="profile-side-header-text-desc">
                                {body.blog.desciption}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

ProfileSideSettings.propTypes = {
    blogId: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired
};
