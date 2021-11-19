import React from 'react';
import PropTypes from 'prop-types';

export default function SearchResultItemContent(props) {
    const strSearch = props.res;
    return (
        <li className="search-result-content">
            <i className="fas fa-search"></i> {strSearch}
        </li>
    );
}
SearchResultItemContent.propTypes = {
    res: PropTypes.string
};
