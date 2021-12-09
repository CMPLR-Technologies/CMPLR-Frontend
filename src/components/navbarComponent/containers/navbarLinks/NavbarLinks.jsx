import React from 'react';
// import OnOutsiceClick from "react-outclick";
import '../../../../styles/styles.css';
import AuthLinks from './links/AuthLinks';
import UnAuthLinks from './links/UnAuthLinks';
import PropTypes from 'prop-types';
/**
 * Navbar Links: includes navbar links when is user auth or not
 * @function NavbarLinks
 * @returns {Component} AuthLinks and UnAuthLinks
 */
export default function NavbarLinks(props) {
    const { isAuth } = props;
    return (
        <ul className="section2">{isAuth ? <AuthLinks /> : <UnAuthLinks />}</ul>
    );
}

NavbarLinks.propTypes = {
    isAuth: PropTypes.bool
};
