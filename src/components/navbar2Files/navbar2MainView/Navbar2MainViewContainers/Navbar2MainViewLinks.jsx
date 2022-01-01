import React from 'react';
import PropTypes from 'prop-types';
import Navbar2MainViewAuthLinks from './Navbar2MainViewAuthLinks';
import Navbar2MainViewUnAuthLinks from './Navbar2MainViewUnAuthLinks';

/**
 * Navbar2MainViewLinks: contains the navbar links
 * @function Navbar2MainViewLinks
 * @description this is the main navbar links 
 * @returns {Component}  includes the navbar links
 */
export default function Navbar2MainViewLinks(props) {
    let isAuth = props.isAuth;
    return (
        <ul className="section2">
            {isAuth ? (
                <Navbar2MainViewAuthLinks {...props} />
            ) : (
                <Navbar2MainViewUnAuthLinks />
            )}
        </ul>
    );
}
Navbar2MainViewLinks.propTypes = {
    isAuth: PropTypes.bool.isRequired
};
