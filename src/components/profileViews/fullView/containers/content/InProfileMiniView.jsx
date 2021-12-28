import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function InProfileMiniView(props) {
    const {
        avatar,
        title,
        header_image: headerImage,
        desciption,
        blog_name: blogName,
        blog_id: blogID
    } = props.body;

    return (
        <div className="profile-mini">
            <div className="profile-mini-body">
                <NavLink to={`/blog/view/${blogName}/${blogID}/posts`}>
                    <img
                        className="profile-mini-body-bg"
                        src={headerImage}
                        alt="couldn't load bg"
                    />
                </NavLink>
                <NavLink to={`/blog/view/${blogName}/${blogID}/posts`}>
                    <img
                        className="profile-mini-body-avatar"
                        src={avatar}
                        alt="couldn't load avatar"
                    />
                </NavLink>
                <div className="profile-mini-body-text">
                    <div className="profile-mini-body-text-title">{title}</div>
                    <div className="profile-mini-body-text-desc">
                        {desciption}
                    </div>
                </div>
            </div>
        </div>
    );
}

InProfileMiniView.propTypes = {
    body: PropTypes.object.isRequired
};
