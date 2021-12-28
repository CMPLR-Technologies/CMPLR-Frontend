import React, { useState, useEffect } from 'react';
import '../../../../styles/styles.css';
import SearchResult from './searchBarResults/SearchResult';
import CircularProgress from '@mui/material/CircularProgress';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { getSearchRes } from '../../Service';
import PropTypes from 'prop-types';

/**
 * Navbar SearchBar: includes the input field for search
 * @function NavbarSearchBar
 * @property {boolean} isHover - Is hover state when blur to the input field
 * @property {function} setIsHover - Is hover Setter state
 * @property {string} searchWord - Input value state
 * @property {function} setSearchWord - Input value Setter state
 * @property {boolean} openSearch - Open search state to show the search results
 * @property {function} setOpenSearch - Open search Setter state
 * @returns {Component} input field
 */
export default function SearchBar(props) {
    const { placeHolder, searchFollower } = props;
    const [isHover, setIsHover] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [openSearch, setOpenSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const onChange = e => {
        setSearchWord(e.target.value);
    };
    useEffect(() => {
        //TO DO : send req to backend and get the users
        if (searchWord.length > 0 && searchWord.trim() !== '') {
            getSearchRes(searchWord, setSearchResults, setLoading);
            setOpenSearch(true);
        } else setOpenSearch(false);
        if (searchWord.length > 0 && !placeHolder) setOpenSearch(true);
        else setOpenSearch(false);
    }, [searchWord]);
    const changeHover = () => {
        if (!isHover && searchWord !== '' && !placeHolder) setOpenSearch(true);
        setIsHover(!isHover);
    };
    const closeOpenSearch = () => {
        setOpenSearch(false);
    };
    //TO DO change it to know the real auth or not
    const isAuth = true;
    const darkTheme = false;
    return (
        <ClickAwayListener onClickAway={closeOpenSearch}>
            <div
                className={`search ${isHover ? 'focus ' : ''} ${
                    !isAuth ? 'not-auth ' : ''
                }${darkTheme ? 'dark' : ''}`}
            >
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>
                <input
                    type="text"
                    value={searchWord}
                    onFocus={changeHover}
                    onBlur={changeHover}
                    onChange={onChange}
                    focus=""
                    onKeyUp={e => {
                        if (e.key === 'Enter' && placeHolder !== '') {
                            if (searchFollower) searchFollower(searchWord);
                        }
                    }}
                    className="search-input"
                    placeholder={placeHolder ? placeHolder : 'Search Tumblr'}
                ></input>
                {loading && (
                    <div className="loading">
                        <CircularProgress size={'25px'} />
                    </div>
                )}
                {openSearch && !loading && (
                    <SearchResult
                        data-testid="search-result"
                        search={searchWord}
                        searchResults={searchResults}
                        closeOpenSearch={closeOpenSearch}
                    />
                )}
            </div>
        </ClickAwayListener>
    );
}

SearchBar.propTypes = {
    placeHolder: PropTypes.string,
    searchFollower: PropTypes.func
};
