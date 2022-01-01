import React from 'react';
import PropTypes from 'prop-types';
export default function ProfileMiniImages(props) {
    const { imgs, setShowSideBlog, setSidePostID } = props;
    return (
        <div className="profile-mini-images" data-testid="profile-mini-images">
            {imgs.map((img, index) => {
                if (img.link.slice(0, 5) === 'https') {
                    return (
                        <img
                            data-testid={`profile-mini-image-${index}`}
                            src={img.link}
                            key={index}
                            onClick={() => {
                                setSidePostID(img.post_id);
                                setShowSideBlog(true);
                            }}
                            alt="couldn't be loaded"
                        />
                    );
                }
            })}
        </div>
    );
}

ProfileMiniImages.propTypes = {
    imgs: PropTypes.array.isRequired,
    setShowSideBlog: PropTypes.func,
    setSidePostID: PropTypes.func
};
