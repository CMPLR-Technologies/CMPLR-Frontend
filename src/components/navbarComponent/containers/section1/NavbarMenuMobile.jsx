import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
import LogOutOverlay from '../navbarLinks/AccountPopup/Seperators/LogOutOverlay';

/**
 * Navbar menu mobile: includes navbar links when mobile view
 * @function NavbarMenuMobile
 * @property {function} closeMenu - close menu
 * @returns {Component} all links in mobile view
 */

export default function NavbarMenuMobile(props) {
    const [theme, changeTheme] = useContext(ThemeContext);
    const [paletteChanged, setPaletteChanged] = useState(false);
    let { isOpenSetting, openSetting, closeMenuPar, active } = props;

    //for logout
    const [overlay, setOverlay] = useState(false);

    const closeMenu = () => {
        closeMenuPar();
    };
    const toggleTheme = () => {
        setPaletteChanged(true);
        changeTheme(theme);
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
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/dashboard" onClick={closeMenu}>
                                <i className="fas fa-home"></i> Dashboard
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink
                                to="/explore/recommended-for-you"
                                onClick={closeMenu}
                            >
                                <i className="fas fa-compass"></i> Explore
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/inbox" onClick={closeMenu}>
                                <i className="fas fa-envelope"></i> Inbox
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/messaging" onClick={closeMenu}>
                                <i className="fas fa-comment-dots"></i>{' '}
                                Messaging
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/activity" onClick={closeMenu}>
                                <i className="fas fa-bolt"></i> Activity
                            </NavLink>
                        </li>

                        {/*------------------------------------ account links */}
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/likes" onClick={closeMenu}>
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>
                                        <i className="fas fa-heart"></i> Likes
                                    </div>
                                    <span className="val">50</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/following" onClick={closeMenu}>
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>
                                        <i className="far fa-address-book"></i>{' '}
                                        Following
                                    </div>
                                    <span className="val">50</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <a onClick={openSettingHere}>
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>
                                        <i className="fas fa-cog"></i>
                                        Settings
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/help" onClick={closeMenu}>
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>
                                        <i className="fas fa-question-circle"></i>
                                        Help
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <a>
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
                            </a>
                        </li>
                    </ul>
                    <div className="blogs">
                        <h3>Blogs</h3>
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
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/dashbord" onClick={closeMenu}>
                                Change Password
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink
                                to="/recommended-for-you"
                                onClick={closeMenu}
                            >
                                Two Factor Authentication
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/following" onClick={closeMenu}>
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>Account</div>
                                    <span className="val">
                                        <i className="fas fa-share-square"></i>
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/following" onClick={closeMenu}>
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>Notifications</div>
                                    <span className="val">
                                        <i className="fas fa-share-square"></i>
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="navbar-menu-mobile-menu-item">
                            <NavLink to="/following" onClick={closeMenu}>
                                <div className="navbar-menu-mobile-menu-item-text">
                                    <div>apps</div>
                                    <span className="val">
                                        <i className="fas fa-share-square"></i>
                                    </span>
                                </div>
                            </NavLink>
                        </li>

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
