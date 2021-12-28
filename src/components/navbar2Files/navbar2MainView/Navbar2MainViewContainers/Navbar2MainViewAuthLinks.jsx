import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfilsSideContainer from '../../../profileViews/mini&sideViews/sideView/ProfilsSideContainer';
import PropTypes from 'prop-types';

export default function Navbar2MainViewAuthLinks(props) {
    const [openGetNot, setOpenGetNot] = useState(false);
    const [openMoreOption, setOpenMoreOption] = useState(false);
    const [showSideBlog, setShowSideBlog] = useState(false);
    const [sidePostID, setSidePostID] = useState('');
    const { blogName, blogID, isFollowed, isBlocked } = props;
    const toggleNot = () => {
        setOpenGetNot(!openGetNot);
    };
    const toggleMoreOption = () => {
        setOpenMoreOption(!openMoreOption);
    };
    const followUser = () => {};
    const blockUser = () => {};
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

                {openMoreOption && (
                    <>
                        <li className="link-icon more" onClick={followUser}>
                            <span>Follow</span>
                        </li>
                        <li className="link-icon more" onClick={blockUser}>
                            <span>Block</span>
                        </li>
                    </>
                )}
                <li className="link-icon" onClick={toggleMoreOption}>
                    <i className="fas fa-user"></i>
                </li>
                <li className="link-icon get" onClick={toggleNot}>
                    Get notification
                </li>
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
