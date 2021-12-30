import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar2MainViewSearchBar(props) {
    const [searchWord, setSearchWord] = useState('');
    const onChange = e => {
        setSearchWord(e.target.value);
    };
    const onEnterPress = e => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            /*
            TO DO make a search filter
            */

            setSearchWord('');
        }
    };
    return (
        <div className="search">
            <div className="search-icon">
                <i className="fas fa-search"></i>
            </div>
            <input
                type="text"
                value={searchWord}
                onChange={onChange}
                onKeyDown={onEnterPress}
                focus=""
                className="search-input"
                placeholder={`Search ${props.name}`}
            ></input>
        </div>
    );
}
Navbar2MainViewSearchBar.propTypes = {
    name: PropTypes.string.isRequired
};
