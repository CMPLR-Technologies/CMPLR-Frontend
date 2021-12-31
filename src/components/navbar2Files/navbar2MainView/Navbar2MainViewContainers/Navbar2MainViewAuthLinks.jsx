import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfilsSideContainer from '../../../profileViews/mini&sideViews/sideView/ProfilsSideContainer';
import PropTypes from 'prop-types';
import { follow, unFollow, unBlock, block } from '../../Controller';


/**
 * Navbar2MainViewAuthLinks: contains the follow,block,following,likes buttons
 * @function Navbar2MainViewAuthLinks
 * @property {boolean} openGetNot - boolan to open get notigation
 * @property {string} blogName - the blog name
 * @property {string} blogID - the blog id
 * @property {boolean} isFollowed - if the user follow this blog 
 * @property {boolean} isBlocked - if the user block this blog 
 * @property {number} sidePostID - user block this blog 
 * @property {number} openMoreOptions - open more option menu
 * @property {boolean} showSideBlog - user follow this blog 
 * @returns {Component}  includes the contains the follow,block,following,likes buttons
 */
export default function Navbar2MainViewAuthLinks(props) {
    const [openGetNot, setOpenGetNot] = useState(false);
    const [openMoreOption, setOpenMoreOption] = useState(false);
    const [showSideBlog, setShowSideBlog] = useState(false);
    const [sidePostID, setSidePostID] = useState('');
    const { blogName, blogID, isFollowed, isBlocked } = props;
    const [followed, setIsFollowed] = useState(isFollowed);
    const [blocked, setBlocked] = useState(isBlocked);
    const [actionRespMessage, setActionRespMessage] = useState('');

    const isSelf =
        JSON.parse(localStorage.getItem('user'))?.blogName === blogName;

    const toggleNot = () => {
        setOpenGetNot(!openGetNot);
    };
    const toggleMoreOption = () => {
        setOpenMoreOption(!openMoreOption);
    };

    const [mobileView, setMobileView] = useState(false);
    const chaneMobileView = () => {
        if (window.innerWidth > 960) {
            setMobileView(false);
        } else {
            setMobileView(true);
        }
    };

    useEffect(() => {
        chaneMobileView();
    }, []);
    window.addEventListener('resize', chaneMobileView);
    let ret = null;
    if (!mobileView)
        ret = (
            <>
                {showSideBlog && (
                    <ProfilsSideContainer
                        blogID={blogID}
                        blogName={blogName}
                        setShowSideBlog={setShowSideBlog}
                        sidePostID={sidePostID}
                        setSidePostID={setSidePostID}
                    />
                )}
                <li className="link-icon">
                    <Link to="/dashboard">
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                <li className="link-icon">
                    <div onClick={() => setShowSideBlog(true)}>
                        <i className="fas fa-eye"></i>
                    </div>
                </li>
                {/* <li className="link-icon">
                    <Link to="/sideview">
                        <i className="fas fa-comment-medical"></i>
                    </Link>
                </li> */}
                {!isSelf && openMoreOption && (
                    <>
                        {followed ? (
                            <li
                                className="link-icon more"
                                onClick={() =>
                                    unFollow(
                                        setIsFollowed,
                                        blogName,
                                        setActionRespMessage
                                    )
                                }
                            >
                                <span>Unfollow</span>
                            </li>
                        ) : (
                            <li
                                className="link-icon more"
                                onClick={() =>
                                    follow(
                                        setIsFollowed,
                                        blogName,
                                        setActionRespMessage
                                    )
                                }
                            >
                                <span>Follow</span>
                            </li>
                        )}
                        {blocked ? (
                            <li
                                className="link-icon more"
                                onClick={() => unBlock(blogName, setBlocked)}
                            >
                                <span>Unblock</span>
                            </li>
                        ) : (
                            <li
                                className="link-icon more"
                                onClick={() =>
                                    block(blogName, setBlocked, setIsFollowed)
                                }
                            >
                                <span>Block</span>
                            </li>
                        )}
                    </>
                )}
                {!isSelf && (
                    <li className="link-icon" onClick={toggleMoreOption}>
                        <i className="fas fa-user"></i>
                    </li>
                )}
            </>
        );
    else
        ret = (
            <>
                <li className="link-icon get" onClick={toggleNot}>
                    Get notification
                </li>
            </>
        );
    return ret;
}

Navbar2MainViewAuthLinks.propTypes = {
    isBlocked: PropTypes.bool,
    isFollowed: PropTypes.bool,
    blogID: PropTypes.bool.isRequired,
    blogName: PropTypes.bool.isRequired
};
