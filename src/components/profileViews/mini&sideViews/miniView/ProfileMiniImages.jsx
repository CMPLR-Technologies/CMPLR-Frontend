import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function ProfileMiniImages
 * @description A component that renders the lower part of the Profile Mini View (images)
 * @property {function} setShowSideBlog
 * @property {function} setSidePostID
 * @property {array} imgs - array of 3 imgs to be shown in the lower view
 * @returns {Component}
 */

export default function ProfileMiniImages(props) {
    const { imgs, setShowSideBlog, setSidePostID } = props;
    return (
        <div className="profile-mini-images">
            {imgs.map((img, index) => (
                <img
                    src={img.link}
                    key={index}
                    onClick={() => {
                        setSidePostID(img.post_id);
                        setShowSideBlog(true);
                    }}
                    alt="couldn't be loaded"
                />
            ))}
        </div>
    );
}

ProfileMiniImages.propTypes = {
    imgs: PropTypes.array.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired
};
