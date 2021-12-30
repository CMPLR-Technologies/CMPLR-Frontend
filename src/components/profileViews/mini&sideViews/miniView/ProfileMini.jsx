import React from 'react';
import ProfileMiniBody from './ProfileMiniBody';
import ProfileMiniImages from './ProfileMiniImages';
import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../../../config.json';
import useFetch from '../../../../hooks/useFetch';

/**
 * @function ProfileMini
 * @description
 * @property {string} blogID
 * @property {function} setShowSideBlog
 * @property {function} setSidePostID
 * @returns {Component}
 */

export default function ProfileMini(props) {
    const { setShowSideBlog, setSidePostID, blogID } = props;
    const response = useFetch(`${apiBaseUrl}/MiniProfileView/${blogID}`);
    const { error, data, isPending } = response;

    return (
        <div className="profile-mini">
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
            {data && (
                <ProfileMiniBody
                    setShowSideBlog={setShowSideBlog}
                    setSidePostID={setSidePostID}
                    body={data.blog}
                />
            )}
            {data && data.views && data.views.length === 3 && (
                <ProfileMiniImages
                    setShowSideBlog={setShowSideBlog}
                    setSidePostID={setSidePostID}
                    imgs={data.views}
                />
            )}
        </div>
    );
}
ProfileMini.propTypes = {
    blogID: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired
};
