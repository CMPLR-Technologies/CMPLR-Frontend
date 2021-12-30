import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar2SideViewMoreOptions from './Navbar2SideViewMoreOptions';
import { follow, unFollow, unBlock } from '../Controller';

export default function Navbar2SideView(props) {
    const {
        setShowSideBlog,
        blogName,
        blogID,
        isFollowed,
        isBlocked,
        setBlocked,
        setIsFollowed
    } = props;
    const [openMoreOptions, setOpenMoreOptions] = useState(false);
    const [actionRespMessage, setActionRespMessage] = useState('');

    const isSelf =
        JSON.parse(localStorage.getItem('user'))?.blogName === blogName;
    //options which shown when click 3 dots
    const openOption = () => {
        if (openMoreOptions) return;
        setOpenMoreOptions(true);
    };
    const closOption = () => {
        setTimeout(() => {
            setOpenMoreOptions(false);
        }, 100);
    };
    const closeProfile = () => {
        setShowSideBlog(false);
    };

    return (
        <div className="Navbar2SideView">
            <div className="container">
                <span className="icon closeIcon" onClick={closeProfile}>
                    <i className="fas fa-times"></i>
                </span>
                <div className="searchCon">
                    <div className="searchConText">{props.name}</div>
                </div>
                <div className="icons">
                    {!isBlocked && (
                        <div className="icon drop" onClick={openOption}>
                            <i className="fas fa-ellipsis-h"></i>
                            {openMoreOptions && (
                                <Navbar2SideViewMoreOptions
                                    setBlocked={setBlocked}
                                    setIsFollowed={setIsFollowed}
                                    blogID={blogID}
                                    blogName={blogName}
                                    close={closOption}
                                    setShowSideBlog={setShowSideBlog}
                                    isFollowed={isFollowed}
                                    isBlocked={isBlocked}
                                    isSelf={isSelf}
                                />
                            )}
                        </div>
                    )}
                    {!isSelf &&
                        (isBlocked ? (
                            <div
                                className="follow"
                                onClick={() => unBlock(blogName, setBlocked)}
                            >
                                Unblock
                            </div>
                        ) : isFollowed ? (
                            <div
                                className="follow"
                                onClick={() =>
                                    unFollow(
                                        setIsFollowed,
                                        blogName,
                                        setActionRespMessage
                                    )
                                }
                            >
                                Unfollow
                            </div>
                        ) : (
                            <div
                                className="follow"
                                onClick={() =>
                                    follow(
                                        setIsFollowed,
                                        blogName,
                                        setActionRespMessage
                                    )
                                }
                            >
                                Follow
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
Navbar2SideView.propTypes = {
    name: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    blogName: PropTypes.string.isRequired,
    blogID: PropTypes.string.isRequired,
    setIsFollowed: PropTypes.func.isRequired,
    setBlocked: PropTypes.func.isRequired,
    isBlocked: PropTypes.bool,
    isFollowed: PropTypes.bool
};
