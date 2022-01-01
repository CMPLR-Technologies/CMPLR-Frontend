import React from 'react';
import p0 from '../../../assets/images/profile_pic0.png';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

/**
 * the bar of hashtag but for mobile Component
 * @function MobileHashtagBar
 * @property {bool} loading
 * @property {number} totalPosts
 * @property {number} totalFollowers
 * @property {bool} isFollower
 * @property {string} tagName
 * @property {function} handleFollowHashtag
 * @property {bool} isPendingFollow
 * @property {string} errorFollow
 * @description the top bar which shows info on the hashtag and some recommended tags
 * @returns {Component}
 */
export default function MobileHashtagBar(props) {
    const navigate = useNavigate();
    const {
        loading,
        totalPosts,
        totalFollowers,
        isFollower,
        tagName,
        recommendedTags,
        handleFollowHashtag,
        isPendingFollow,
        errorFollow
    } = props;
    return (
        <>
            <div className="viewMobController">
                <div className="iGLU3">
                    {loading && (
                        <LinearProgress data-testid="mobhash_circularProgress" />
                    )}
                    <Link to={'/tagged/' + tagName} className="BSUG4" href="#">
                        <div className="qJeyT"></div>
                    </Link>
                    <div className="ZV6oZ">
                        <div className="YOf31">
                            <h3 className="NmAj2">Trending now</h3>
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
                            <div className="mainDivHash">
                                <div className="emvA3">
                                    <button
                                        className="sNQra"
                                        onClick={e => {
                                            e.preventDefault();
                                            if (!isFollower) {
                                                handleFollowHashtag(
                                                    tagName,
                                                    true
                                                );
                                            } else {
                                                handleFollowHashtag(
                                                    tagName,
                                                    false
                                                );
                                            }
                                        }}
                                        dataTestid="follow_btn_hashtag"
                                    >
                                        <span className="WdYx4">
                                            {isPendingFollow && (
                                                <CircularProgress
                                                    data-testid="circular_mui_hashtag0"
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
                                    {!isFollower && (
                                        <button
                                            className="sNQra"
                                            style={{ marginLeft: '5px' }}
                                            onClick={() => {
                                                navigate('/new/post');
                                            }}
                                            dataTestid="newpost_btn_hashtag"
                                        >
                                            <span className="WdYx4">
                                                New post
                                            </span>
                                        </button>
                                    )}
                                </div>
                                {errorFollow !== '' && (
                                    <p className="errorAlertInFollow">
                                        {errorFollow}
                                    </p>
                                )}
                                <a
                                    className="kckjF"
                                    href="#"
                                    onClick={e => e.preventDefault()}
                                >
                                    <div className="CrU4O">
                                        <span>Posted by</span>
                                    </div>
                                    <div className="nZ9l5">
                                        <div className="samllPic">
                                            <div className="ESMam">
                                                <div className="_0MuRn">
                                                    <img
                                                        src={p0}
                                                        alt="posted_bypic"
                                                        loading="eager"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="XVkC9">
                    <div className="theScrollhandler">
                        {recommendedTags?.map((h, i) => {
                            return (
                                <span className="spanTaghandler" key={i}>
                                    <a href={'tagged/' + h}>{h}</a>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

MobileHashtagBar.propTypes = {
    loading: PropTypes.bool.isRequired,
    totalPosts: PropTypes.number,
    totalFollowers: PropTypes.number,
    isFollower: PropTypes.bool,
    tagName: PropTypes.string,
    recommendedTags: PropTypes.any,
    handleFollowHashtag: PropTypes.func,
    isPendingFollow: PropTypes.bool,
    errorFollow: PropTypes.string
};
