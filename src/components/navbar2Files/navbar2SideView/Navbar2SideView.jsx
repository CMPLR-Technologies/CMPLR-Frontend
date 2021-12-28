import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar2SideViewMoreOptions from './Navbar2SideViewMoreOptions';
export default function Navbar2SideView(props) {
    const { setShowSideBlog, blogName, blogID, isFollowed, isBlocked } = props;
    const [openMoreOptions, setOpenMoreOptions] = useState(false);
    const isSelf =
        JSON.parse(localStorage.getItem('user')).blogName === blogName;
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

    const unFollow = () => {
        //isFollowed = false
    };
    const unBlock = () => {
        //isBlocked = false
    };
    const follow = () => {
        //isBlocked = false
        //isFollowed = true
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
                            <div className="follow" onClick={unBlock}>
                                Unblock
                            </div>
                        ) : isFollowed ? (
                            <div className="follow" onClick={unFollow}>
                                Unfollow
                            </div>
                        ) : (
                            <div className="follow" onClick={follow}>
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
    isBlocked: PropTypes.bool,
    isFollowed: PropTypes.bool
};
