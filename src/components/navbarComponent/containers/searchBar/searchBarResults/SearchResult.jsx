import React from 'react';
import SearchResultItemContent from './SearchResultItemContent';
import SearchResultItemBlog from './SearchResultItemBlog';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/**
 * Navbar SearchResult: includes SearchResult array
 * @function SearchResult
 * @property {array} searchResults - blogs and tagged search results array
 * @property {function} closeOpenSearch - function to hide the search result
 * @property {string} search - Input value state
 * @returns {Component} blogs and tagged search results
 */
export default function SearchResult(props) {
    let { search, closeOpenSearch, searchResults } = props;
    return (
        <div className="search-result">
            <ul>
                <Link to={`tagged/${props.search}`} onClick={closeOpenSearch}>
                    <li className="search-result-go">
                        Go to #<span className="color">{props.search}</span>
                    </li>
                </Link>
                {searchResults.tags &&
                    searchResults.tags?.map((item, index) => (
                        <SearchResultItemContent
                            key={index}
                            res={item}
                            search={search}
                            closeOpenSearch={closeOpenSearch}
                        />
                    ))}
                <h3 className="search-result-dis">Tumblrs</h3>
                <Link to={`blog/${props.search}`} onClick={closeOpenSearch}>
                    <li className="search-result-go">
                        Go to @<span className="color">{props.search}</span>
                    </li>
                </Link>
                {searchResults?.blogs &&
                    searchResults?.blogs?.map((item, index) => (
                        <SearchResultItemBlog
                            key={index}
                            blogName={item?.blog_name}
                            blogId={item?.settings?.blog_id}
                            title={item?.title}
                            img={item?.settings?.avatar}
                            imgShape={item?.settings?.avatar_shape}
                            search={search}
                            closeOpenSearch={closeOpenSearch}
                        />
                    ))}
            </ul>
        </div>
    );
}

SearchResult.propTypes = {
    closeOpenSearch: PropTypes.func,
    search: PropTypes.string,
    searchResults: PropTypes.array
};
