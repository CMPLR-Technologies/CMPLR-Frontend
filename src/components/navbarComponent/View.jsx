import React, { useState, useEffect } from 'react';
import '../../styles/styles.css';
import NavbarLinks from './containers/navbarLinks/NavbarLinks';
import NavbarSection1 from './containers/section1/NavbarSection1';
/**
 * Navbar Main Component
 * @function Navbar
 * @description this is the main Component of navbar contains in it's body all the navbar components
 * @returns {Component} navbar_section1_logo&searchbar & navbar-links
 */
export default function Navbar() {
    const [mobileView, setMobileView] = useState(false);
    const isAuth = true;
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
    let nav = (
        <div className="nav">
            <div className="nav-container">
                {/*section 1 contains logo and search bar*/}
                <NavbarSection1 />
                {/*section 2 contains links*/}
                <NavbarLinks isAuth={isAuth} />
            </div>
        </div>
    );

    // if not user auth and mobile view hide navbar
    if (mobileView && !isAuth) nav = null;
    return nav;
}
