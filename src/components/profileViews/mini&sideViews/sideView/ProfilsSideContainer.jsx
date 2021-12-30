import React from 'react';
import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
import ProfileSide from './ProfileSide';
import { apiBaseUrl } from '../../../../config.json';
import useFetch from '../../../../hooks/useFetch';

/**
 * @function ProfilsSideContainer
 * @description Wrapper around any ref to blog to show mini view on hover and side view on click
 * @property {string} blogID
 * @property {string} blogName
 * @property {function} setShowSideBlog
 * @property {function} setSidePostID
 * @property {string} sidePostID - is '' when showing all posts (default behavior), else on click on image in mini hover view: is set to postID of the post of image
 * @returns {Component}
 */

export default function ProfilsSideContainer(props) {
    const { blogID, blogName, setShowSideBlog, setSidePostID, sidePostID } =
        props;
    const response = useFetch(`${apiBaseUrl}/MiniProfileView/${blogID}`);
    const { data, isPending } = response;
    return (
        <div
            className="overlay-container"
            data-testid="OverlayContainer"
            style={{ display: 'flex !important' }}
        >
            <div
                className="overlay-div overlay-no-theme"
                onClick={() => setShowSideBlog(false)}
                data-testid="OverlayDiv"
            >
                {' '}
            </div>
            {isPending && <LinearProgress />}
            {data && (
                <ProfileSide
                    blogID={blogID}
                    blogName={blogName}
                    setShowSideBlog={setShowSideBlog}
                    sidePostID={sidePostID}
                    setSidePostID={setSidePostID}
                    body={data.blog}
                />
            )}
        </div>
    );
}
ProfilsSideContainer.propTypes = {
    blogID: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired,
    sidePostID: PropTypes.string.isRequired
};
