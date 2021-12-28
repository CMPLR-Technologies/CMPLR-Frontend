import React from 'react';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../../../../config.json';
import useFetch from '../../../../../hooks/useFetch';
import { LinearProgress } from '@mui/material';
import InProfileMiniView from './InProfileMiniView';

export default function ProfileFollowing(props) {
    const { blogName } = props;
    const response = useFetch(`${apiBaseUrl}/profile/following/${blogName}`);
    const { error, data, isPending } = response;

    return (
        <div className="profile-following">
            {(error || data?.blogs.length === 0) && (
                <div className="no-data-error">
                    {'This Blog does not follow any other blogs'}
                </div>
            )}
            {isPending && <LinearProgress />}
            {data?.blogs.map((blog, index) => (
                <InProfileMiniView key={index} body={blog} />
            ))}
        </div>
    );
}

ProfileFollowing.propTypes = {
    blogName: PropTypes.string.isRequired,
    blogID: PropTypes.string
};
