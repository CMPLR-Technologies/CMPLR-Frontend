import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function ProfileMiniBody
 * @description A component that renders the upper part of the Profile Mini View (without images)
 * @property {function} setShowSideBlog
 * @property {function} setSidePostID
 * @property {object} body - has all needed data for rendering the page
 * @returns {Component}
 */

export default function ProfileMiniBody(props) {
    const {
        avatar,
        header_image: headerImage,
        blog_name: blogName,
        title,
        desciption
    } = props.body;
    const setShowSideBlog = props.setShowSideBlog;
    const setSidePostID = props.setSidePostID;

    return (
        <div className="profile-mini-body">
            <img
                className="profile-mini-body-bg"
                src={headerImage}
                alt="couldn't load bg"
                onClick={() => {
                    setSidePostID('');
                    setShowSideBlog(true);
                }}
            />
            <img
                onClick={() => {
                    setSidePostID('');
                    setShowSideBlog(true);
                }}
                className="profile-mini-body-avatar"
                src={avatar}
                alt="couldn't load avatar"
            />
            <div className="profile-mini-body-text">
                <div className="profile-mini-body-text-title">
                    {title === 'untitled' ? blogName : title}
                </div>
                <div className="profile-mini-body-text-desc">{desciption}</div>
            </div>
        </div>
    );
}

ProfileMiniBody.propTypes = {
    body: PropTypes.object.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired
};
