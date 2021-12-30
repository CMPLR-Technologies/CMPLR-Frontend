import React, { useState } from 'react';
import ProfileMiniHoverInnerWrapper from './miniView/ProfileMiniHoverInnerWrapper';
import PropTypes from 'prop-types';
import ProfilsSideContainer from './sideView/ProfilsSideContainer';

/**
 * @function ProfileMiniHoverWrapper
 * @description Wrapper around any ref to blog to show mini view on hover and side view on click
 * @property {string} blogID
 * @property {string} blogName
 * @returns {Component}
 */

export default function ProfileMiniHoverWrapper(props) {
    const { blogID, blogName, children } = props;
    const [showSideBlog, setShowSideBlog] = useState(false);
    const [sidePostID, setSidePostID] = useState('');

    const css = `
        body{
            ${showSideBlog && 'overflow-y: hidden;'}            
        }
        `;

    return (
        <span className="profile-side-outter">
            <ProfileMiniHoverInnerWrapper
                blogID={blogID}
                blogName={blogName}
                setShowSideBlog={setShowSideBlog}
                setSidePostID={setSidePostID}
            >
                {children}
            </ProfileMiniHoverInnerWrapper>
            {showSideBlog && (
                <ProfilsSideContainer
                    blogID={blogID}
                    blogName={blogName}
                    setShowSideBlog={setShowSideBlog}
                    sidePostID={sidePostID}
                    setSidePostID={setSidePostID}
                />
            )}
            <style>{css}</style>
        </span>
    );
}

ProfileMiniHoverWrapper.propTypes = {
    children: PropTypes.object.isRequired,
    blogID: PropTypes.any.isRequired,
    blogName: PropTypes.string.isRequired
};
