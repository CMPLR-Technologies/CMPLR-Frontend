import React, { useState, useEffect, useContext } from 'react';
import '../../../../styles/styles.css';
import SearchBar from '../searchBar/SearchBar';
import NavbarMenuMobile from './NavbarMenuMobile';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../contexts/userContext/UserContext';
/**
 * Navbar Section1: includes the logo and the searchbar
 * @function NavbarSection1
 * @property {boolean} menuOpen - Menu open state when mobile view (view navbar or close)
 * @property {function} setMenuOpen - Menu open Setter state
 * @property {boolean} searchOpen - Search bar open state when mobile view (view search bar or close)
 * @property {function} setSearchOpen - Search bar open Setter state
 * @property {boolean} mobileView - Mobile view state (true when resize screen to mobile view)
 * @property {function} setMobileView - Search bar open Setter state
 * @returns {Component} search bar component and logo and menu icon for mobild view
 */
export default function NavbarSection1() {
    const user = useContext(UserContext)?.user;
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpenSetting, setIsOpenSetting] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const toggleMenu = () => {
        // if open setting list so the will close it
        if (isOpenSetting) {
            closeSetting();
        } else {
            // else it will close whole menu
            setMenuOpen(!menuOpen);
        }
    };
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setIsOpenSetting(false);
    };
    const closeSetting = () => {
        setIsOpenSetting(false);
    };
    const openSetting = () => {
        setIsOpenSetting(true);
    };
    //this funcion is made to if the screen is big so make searchOpen to true to show the search bar
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

    return (
        <div className="section1">
            {mobileView && (
                <div className="menu-mobile-icon" onClick={toggleMenu}>
                    <i
                        className={
                            menuOpen
                                ? !isOpenSetting
                                    ? 'fas fa-times'
                                    : 'fas fa-angle-left'
                                : 'fas fa-bars'
                        }
                    />
                </div>
            )}
            <div className="logo main">
                <Link to={user ? '/dashboard' : '/'}>
                    <span className="fa fa-downcase-t"></span>
                </Link>
            </div>
            {!mobileView && <SearchBar />}
            {searchOpen && mobileView ? (
                <SearchBar />
            ) : mobileView ? (
                <div className="logo">
                    <Link to={user ? '/dashboard' : '/'}>
                        <span className="fa fa-downcase-t"></span>
                    </Link>
                </div>
            ) : null}

            <div className="search-mobile-icon" onClick={toggleSearch}>
                <i
                    className={!searchOpen ? 'fas fa-search' : 'fas fa-times'}
                ></i>
            </div>
            <NavbarMenuMobile
                active={menuOpen}
                closeMenuPar={closeMenu}
                openSetting={openSetting}
                isOpenSetting={isOpenSetting}
            />
        </div>
    );
}
