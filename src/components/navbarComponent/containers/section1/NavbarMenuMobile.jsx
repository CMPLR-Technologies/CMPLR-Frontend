import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Navbar menu mobile: includes navbar links when mobile view
 * @function NavbarMenuMobile
 * @property {function} closeMenu - close menu
 * @returns {Component} all links in mobile view
 */
export default function NavbarMenuMobile(props) {
    const closeMenu = () => {
        props.closeMenu();
    };
    return (
        <div className={`navbar-menu-mobile ${props.active ? 'active' : ''}`}>
            <button
                aria-label="Close"
                className="navbar-menu-mobile-close"
                onClick={closeMenu}
            >
                <span></span>
            </button>
            <div className="navbar-menu-mobile-menu">
                <button className="create-new-post">
                    <i className="fas fa-pen"></i> Create a post
                </button>
                <ul>
                    <li className="navbar-menu-mobile-menu-item">
                        <Link to="/dashbord" onClick={closeMenu}>
                            <i className="fas fa-home"></i> Dashboard
                        </Link>
                    </li>
                    <li className="navbar-menu-mobile-menu-item">
                        <Link to="/recommended-for-you" onClick={closeMenu}>
                            <i className="fas fa-compass"></i> Explore
                        </Link>
                    </li>
                    <li className="navbar-menu-mobile-menu-item">
                        <Link to="/inbox" onClick={closeMenu}>
                            <i className="fas fa-envelope"></i> Inbox
                        </Link>
                    </li>
                    <li className="navbar-menu-mobile-menu-item">
                        <Link to="/messaging" onClick={closeMenu}>
                            <i className="fas fa-comment-dots"></i> Messaging
                        </Link>
                    </li>
                    <li className="navbar-menu-mobile-menu-item">
                        <Link to="/activity" onClick={closeMenu}>
                            <i className="fas fa-bolt"></i> Activity
                        </Link>
                    </li>
                    {/*TO DO : add the rest */}
                </ul>
            </div>
        </div>
    );
}

NavbarMenuMobile.propTypes = {
    closeMenu: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
};
