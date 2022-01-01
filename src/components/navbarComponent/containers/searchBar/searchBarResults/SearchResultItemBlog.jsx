import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/**
 * Navbar SearchResultItemBlog: includes SearchResultItemBlog 
 * @function SearchResultItemBlog
 * @property {string} blogName - blog name
 * @property {string} blogId - blog id
 * @property {string} title - blog title
 * @property {string} img - blog avatar
 * @property {function} imgShape - blog avatar shape
 * @property {function} closeOpenSearch - function to hide the search result
 * @returns {Component} blog item
 */
export default function SearchResultItemBlog(props) {
    //to do get the real img
    let { blogName,blogId, title, img, imgShape, closeOpenSearch } = props;
    return (
        <Link to={`blog/view/${blogName}/${blogId}/posts`} onClick={closeOpenSearch}>
            <li className="search-result-blog">
                <div className="search-result-blog-section1">
                    <div
                        className={`search-result-blog-section1-img ${imgShape}`}
                    >
                        <img src={img} />
                    </div>
                    <div className="search-result-blog-section1-text">
                        <h3>{blogName}</h3>
                        <h4>{title}</h4>
                    </div>
                </div>
            </li>
        </Link>
    );
}

SearchResultItemBlog.propTypes = {
    img: PropTypes.string.isRequired,
    imgShape: PropTypes.string.isRequired,
    blogId:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    closeOpenSearch: PropTypes.func.isRequired
};
