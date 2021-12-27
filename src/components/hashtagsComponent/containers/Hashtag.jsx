import React from 'react';
import HashtagPicture from './HashtagPicture';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress, LinearProgress } from '@mui/material';

export default function HashtagView(props) {
    const navigate = useNavigate();
    const {
        loading,
        totalPosts,
        totalFollowers,
        isFollower,
        tagName,
        recommendedTags,
        handleFollowHashtag,
        isPendingFollow
    } = props;
    return (
        <>
            <div className="ZN143">
                <HashtagPicture tagName={tagName} />
                <div className="YOf31">
                    <div className="NmAj2">Trending now</div>
                    <Link to={'/tagged/' + tagName} className="Wo4gS">
                        {'#' + tagName}
                    </Link>
                    <div className="S3HC8">
                        <div>
                            <b>{totalFollowers}</b>
                            {' followers /'}&nbsp;
                        </div>
                        <div>
                            <b>{totalPosts}</b>
                            {' posts'}
                        </div>
                    </div>
                    <div className="emvA3">
                        <button
                            onClick={e => {
                                e.preventDefault();
                                if (!isFollower) {
                                    handleFollowHashtag(tagName, true);
                                } else {
                                    handleFollowHashtag(tagName, false);
                                }
                            }}
                            className="EVsUa"
                        >
                            <span className="WdYx4">
                                {isPendingFollow && (
                                    <CircularProgress
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            color: 'white',
                                            marginLeft: '2px',
                                            cursor: 'wait'
                                        }}
                                    />
                                )}
                                {isFollower ? 'UnFollow' : 'Follow'}
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                navigate('/new/post');
                            }}
                            className="EVsUa"
                            style={{ marginLeft: '5px' }}
                        >
                            <span className="WdYx4">New Post</span>
                        </button>
                    </div>
                    <div className="XVkC9">
                        {/*loop here and pass data to the span */}
                        {recommendedTags?.map((h, i) => {
                            return (
                                <span className="spanTaghandler" key={i}>
                                    <a href={'/tagged/' + h} className="E6EKm">
                                        {'#' + h}
                                    </a>
                                </span>
                            );
                        })}
                    </div>
                    {loading && <LinearProgress />}
                </div>
            </div>
        </>
    );
}

HashtagView.propTypes = {
    loading: PropTypes.bool.isRequired,
    totalPosts: PropTypes.number,
    totalFollowers: PropTypes.number,
    isFollower: PropTypes.bool,
    tagName: PropTypes.string,
    recommendedTags: PropTypes.any,
    handleFollowHashtag: PropTypes.func,
    isPendingFollow: PropTypes.bool
};
