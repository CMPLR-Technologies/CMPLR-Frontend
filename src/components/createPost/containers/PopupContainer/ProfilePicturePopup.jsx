import React from 'react';
import PropTypes from 'prop-types';

export function ProfilePic(props) {
    const { user } = props;
    return (
        <div className="post-margin">
            <div className="post-form--avatar">
                <div className="channel-avatar avatar-container">
                    <a href={`/blog/${user?.blogName}`} className="avatar-link">
                        <img
                            className="avatar-image"
                            src={user?.userData?.avatar}
                            alt="untitled"
                        />
                    </a>
                </div>
                <div className="primary-avatar">
                    <a href={`/blog/${user?.blogName}`} className="avatar-link">
                        <img
                            className="avatar-image"
                            src={user?.userData?.avatar}
                            alt="untitled"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

ProfilePic.propTypes = {
    user: PropTypes.any
};
