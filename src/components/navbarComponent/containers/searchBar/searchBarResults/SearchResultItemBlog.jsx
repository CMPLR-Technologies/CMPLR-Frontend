import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function SearchResultItemBlog(props) {
    //to do get the real img
    let { blogName, title, img, imgShape, closeOpenSearch } = props;
    return (
        <Link to={`profile/${blogName}`} onClick={closeOpenSearch}>
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
                <div className="search-result-blog-button">
                    <button>Follow</button>
                </div>
            </li>
        </Link>
    );
}

SearchResultItemBlog.propTypes = {
    img: PropTypes.string.isRequired,
    imgShape: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    closeOpenSearch: PropTypes.func.isRequired
};
