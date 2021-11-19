import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Button.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.string,
    dataTestid: PropTypes,
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
