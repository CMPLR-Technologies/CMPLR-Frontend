import React from 'react';
import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
import ProfileSide from './ProfileSide';
import { apiBaseUrl } from '../../../../config.json';
import useFetch from '../../../../hooks/useFetch';

export default function ProfilsSideContainer(props) {
    const { blogID, blogName, setShowSideBlog, setSidePostID, sidePostID } =
        props;
    const response = useFetch(`${apiBaseUrl}/MiniProfileView/${blogID}`);
    const { error, data, isPending } = response;

    return (
        <div className="overlay-container" data-testid="OverlayContainer">
            <div
                className="overlay-div overlay-no-theme"
                onClick={() => setShowSideBlog(false)}
                data-testid="OverlayDiv"
            >
                {' '}
            </div>
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
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
    blogID: PropTypes.number.isRequired,
    blogName: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired,
    sidePostID: PropTypes.string.isRequired
};
