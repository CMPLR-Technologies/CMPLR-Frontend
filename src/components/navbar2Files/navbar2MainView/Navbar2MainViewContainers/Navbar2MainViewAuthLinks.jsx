import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar2MainViewAuthLinks() {
    const [openGetNot, setOpenGetNot] = useState(false);
    const [openMoreOption, setOpenMoreOption] = useState(false);
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
                <li className="link-icon">
                    <Link to="/dashboard">
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                <li className="link-icon">
                    <Link to="/sideview">
                        <i className="fas fa-eye"></i>
                    </Link>
                </li>
                <li className="link-icon">
                    <Link to="/sideview">
                        <i className="fas fa-comment-medical"></i>
                    </Link>
                </li>

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
                <li className="link-icon">
                    <Link to="/sideview">
                        <i className="fas fa-comment-medical"></i>
                    </Link>
                </li>

                <li className="link-icon get" onClick={toggleNot}>
                    Get notification
                </li>
            </>
        );
    return ret;
}
