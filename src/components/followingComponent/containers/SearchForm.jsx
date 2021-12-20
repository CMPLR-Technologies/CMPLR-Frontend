import React from 'react';
import PropTypes from 'prop-types';

/**
 * Search Bar OF Following Page Component
 * @function SearchForm
 * @description this is the search bar of the following page
 * @returns {Component} the view directly
 */

export default function SearchForm(props) {
    const { search, setSearch, handleSearchFollow } = props;
    return (
        <form className="Il4T7">
            <input
                className="dyc2r"
                type="text"
                autoComplete="off"
                placeholder="Enter a username, URL, or email address to follow"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button
                className="TRX6J"
                onClick={handleSearchFollow}
                disabled={search && search?.length < 2}
                style={{
                    backgroundColor:
                        search?.length < 2 ? 'transparent' : '#00B8FF',
                    border: search?.length < 2 ? '1px solid #405368' : 'none'
                }}
            >
                <span
                    style={{
                        color: search?.length < 2 ? '#a6afb0' : '#001935'
                    }}
                    className="Tb7Ey"
                >
                    Follow
                </span>
            </button>
        </form>
    );
}

SearchForm.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    handleSearchFollow: PropTypes.func.isRequired
};
