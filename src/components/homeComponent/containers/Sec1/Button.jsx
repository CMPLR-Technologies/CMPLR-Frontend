import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @function HomeButtons
 * @description this is the base of buttons used in home component
 * @param {string} href - href of the button if any
 * @param {string} title - text body of button
 * @param {array} children - children of component if any
 * @param {string} className - className of button
 * @param {string} dataTestid - test id used in unit testing
 * @returns {Component} the Component of the Button
 */

Button.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.array,
    dataTestid: PropTypes.string,
    className: PropTypes.string.isRequired
};
export default function Button(props) {
    const { href, className, title, children, dataTestid } = props;
    return (
        <Link data-testid={dataTestid} to={href} className={className}>
            {title}
            {children}
        </Link>
    );
}
