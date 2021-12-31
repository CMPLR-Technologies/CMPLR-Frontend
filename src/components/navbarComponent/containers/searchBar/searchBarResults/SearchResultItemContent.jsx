import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/**
 * Navbar SearchResultItemContent: includes SearchResultItemBlog 
 * @function SearchResultItemContent
 * @property {string} res - tag name
 * @property {function} closeOpenSearch - function to hide the search result
 * @returns {Component} tag item
 */
export default function SearchResultItemContent(props) {
    const { res, closeOpenSearch } = props;
    return (
        <Link to={`tagged/${props.res.slug}`} onClick={closeOpenSearch}>
            <li className="search-result-content">
                <i className="fas fa-search"></i> {res.name}
            </li>
        </Link>
    );
}
SearchResultItemContent.propTypes = {
    res: PropTypes.string,
    closeOpenSearch: PropTypes.func
};
