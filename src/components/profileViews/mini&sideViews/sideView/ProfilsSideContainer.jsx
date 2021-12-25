import React from 'react';
import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
import ProfileSide from './ProfileSide';

export default function ProfilsSideContainer(props) {
    const { blogID, setShowSideBlog, setSidePostID, sidePostID, response } =
        props;
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
            {data && data.response && (
                <ProfileSide
                    blogID={blogID}
                    setShowSideBlog={setShowSideBlog}
                    sidePostID={sidePostID}
                    setSidePostID={setSidePostID}
                    body={data.response.blog}
                />
            )}
        </div>
    );
}
ProfilsSideContainer.propTypes = {
    blogID: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired,
    sidePostID: PropTypes.string.isRequired
};
