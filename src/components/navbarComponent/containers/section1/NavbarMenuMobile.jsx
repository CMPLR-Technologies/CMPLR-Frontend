import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
import LogOutOverlay from '../navbarLinks/AccountPopup/Seperators/LogOutOverlay';
import { apiBaseUrl } from '../../../../config.json';
import AccountPopupBlogsContainer from '../navbarLinks/AccountPopup/Blogs/AccountPopupBlogsContainer';
import useFetch from '../../../../hooks/useFetch';

/**
 * Navbar menu mobile: includes navbar links when mobile view
 * @function NavbarMenuMobile
 * @property {function} closeMenu - close menu
 * @returns {Component} all links in mobile view
 */

export default function NavbarMenuMobile(props) {
    const [theme, changeTheme] = useContext(ThemeContext);
    const [paletteChanged, setPaletteChanged] = useState(false);
    const { data: userInfo } = useFetch(`${apiBaseUrl}/user/info`);
    let { isOpenSetting, openSetting, closeMenuPar, active } = props;

    //for logout
    const [overlay, setOverlay] = useState(false);

    const closeMenu = () => {
        closeMenuPar();
    };
    const toggleTheme = () => {
        setPaletteChanged(true);
        changeTheme();
    };
    const openSettingHere = () => {
        openSetting();
    };
    const logout = () => {
        setOverlay(true);
    };
    return (
        <div className={`navbar-menu-mobile ${active ? 'active' : ''}`}>
            <button
                aria-label="Close"
                className="navbar-menu-mobile-close"
                onClick={closeMenu}
            >
                <span></span>
            </button>
            {!isOpenSetting ? (
                <div className="navbar-menu-mobile-menu">
                    <button className="create-new-post">
                        <i className="fas fa-pen"></i> Create a post
                    </button>
                    <ul>
                        <NavLink to="/dashboard" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                <i className="fas fa-home"></i> Dashboard
                            </li>
                        </NavLink>
                        <NavLink
                            to="/explore/recommended-for-you"
                            onClick={closeMenu}
                        >
                            <li className="navbar-menu-mobile-menu-item">
                                <i className="fas fa-compass"></i> Explore
                            </li>
                        </NavLink>
                        <NavLink to="/inbox" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                <i className="fas fa-envelope"></i> Inbox
                            </li>
                        </NavLink>
                        <NavLink to="/messaging" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                <i className="fas fa-comment-dots"></i>{' '}
                                Messaging
                            </li>
                        </NavLink>
                        <NavLink
                            to={`/blog/${
                                JSON.parse(localStorage.getItem('user'))
                                    ?.blogName
                            }/activity`}
                            onClick={closeMenu}
                        >
                            <li className="navbar-menu-mobile-menu-item">
                                <i className="fas fa-bolt"></i> Activity
                            </li>
                        </NavLink>
                        {/*------------------------------------ account links */}
                        <NavLink to="/likes" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>
                                        <i className="fas fa-heart"></i> Likes
                                    </div>
                                    <span className="val">
                                        {userInfo && userInfo.user.likes_count}
                                    </span>
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to="/following" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>
                                        <i className="far fa-address-book"></i>{' '}
                                        Following
                                    </div>
                                    <span className="val">
                                        {userInfo &&
                                            userInfo.user.following_count}
                                    </span>
                                </div>
                            </li>
                        </NavLink>
                        <a onClick={openSettingHere}>
                            <li className="navbar-menu-mobile-menu-item">
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>
                                        <i className="fas fa-cog"></i>
                                        Settings
                                    </div>
                                </div>
                            </li>
                        </a>
                        <NavLink to="/help" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>
                                        <i className="fas fa-question-circle"></i>
                                        Help
                                    </div>
                                </div>
                            </li>
                        </NavLink>
                        <a>
                            <li className="navbar-menu-mobile-menu-item">
                                <div
                                    className="navbar-menu-mobile-menu-item-text"
                                    onClick={toggleTheme}
                                >
                                    <div>
                                        <i className="fas fa-palette"></i>
                                        {paletteChanged
                                            ? theme
                                            : 'Change Palette'}
                                    </div>
                                    <div className="val">
                                        {`${
                                            Object.keys(themes).indexOf(theme) +
                                            1
                                        }/${Object.keys(themes).length}`}
                                    </div>
                                </div>
                            </li>
                        </a>
                    </ul>
                    <div className="blogs">
                        <h3>Blogs</h3>
                        <AccountPopupBlogsContainer
                            closeMenu={closeMenu}
                            blogs={userInfo?.blogs}
                        />
                    </div>
                    <div
                        data-testid="AccountPopupFooter"
                        className="navbar-menu-mobile-footer"
                    >
                        <footer>
                            <NavLink to="/about" className={`clickable`}>
                                About
                            </NavLink>
                            <NavLink to="/apps" className={`clickable`}>
                                Apps
                            </NavLink>
                            <NavLink
                                to="/policy/terms-of-service"
                                className={`clickable`}
                            >
                                Legal{' '}
                            </NavLink>
                            <NavLink
                                to="/policy/privacy"
                                className={`clickable`}
                            >
                                Privacy{' '}
                            </NavLink>
                        </footer>
                    </div>
                </div>
            ) : (
                <div className="navbar-menu-mobile-menu">
                    <ul>
                        <NavLink to="/settings/" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                Change Password
                            </li>
                        </NavLink>
                        <NavLink to="/settings/account" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                Two Factor Authentication
                            </li>
                        </NavLink>
                        <NavLink to="/settings/account" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>Account</div>
                                    <span className="val">
                                        <i className="fas fa-share-square"></i>
                                    </span>
                                </div>
                            </li>
                        </NavLink>

                        <NavLink
                            to="/settings/notifications"
                            onClick={closeMenu}
                        >
                            <li className="navbar-menu-mobile-menu-item">
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>Notifications</div>
                                    <span className="val">
                                        <i className="fas fa-share-square"></i>
                                    </span>
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to="/settings/apps" onClick={closeMenu}>
                            <li className="navbar-menu-mobile-menu-item">
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>apps</div>
                                    <span className="val">
                                        <i className="fas fa-share-square"></i>
                                    </span>
                                </div>
                            </li>
                        </NavLink>
                        {overlay && (
                            <LogOutOverlay
                                hideOverlay={() => setOverlay(false)}
                            />
                        )}
                        <li className="navbar-menu-mobile-menu-item">
                            <a onClick={logout}>
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>Logout</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

NavbarMenuMobile.propTypes = {
    closeMenuPar: PropTypes.func.isRequired,
    openSetting: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    isOpenSetting: PropTypes.bool.isRequired
};
