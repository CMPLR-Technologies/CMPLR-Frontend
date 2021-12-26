import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar2SideViewMoreOptions from './Navbar2SideViewMoreOptions';
export default function Navbar2SideView(props) {
    const [openSearch, setOpenSearch] = useState(false);
    const [openMoreOptions, setOpenMoreOptions] = useState(false);
    const [searchWord, setSearchWord] = useState('');

    //options which shown when click 3 dots
    const openOption = () => {
        if (openMoreOptions) return;
        setOpenMoreOptions(true);
    };
    const closOption = () => {
        setTimeout(() => {
            setOpenMoreOptions(false);
        }, 100);
    };
    const onChange = e => {
        setSearchWord(e.target.value);
    };
    const onEnterPress = e => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            /*
            TO DO make a search filter
            */
            console.log(searchWord);
            setSearchWord('');
        }
    };
    const closeProfile = () => {
        //to do make close profile
    };
    const openChat = () => {
        //to do make open chat
    };
    const follow = () => {
        //to do make the follow
    };

    return (
        <div className="Navbar2SideView">
            <div className="container">
                <span className="icon closeIcon" onClick={closeProfile}>
                    <i className="fas fa-times"></i>
                </span>
                {!openSearch && (
                    <div className="searchCon">
                        <div className="searchConText">{props.name}</div>
                    </div>
                )}
                {openSearch && (
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
                            placeholder="Search"
                        ></input>
                    </div>
                )}
                <div className="icons">
                    {!openSearch && (
                        <div
                            className="icon"
                            onClick={() => setOpenSearch(true)}
                        >
                            <i className="fas fa-search"></i>
                        </div>
                    )}
                    <div className="icon" onClick={openChat}>
                        <i className="fas fa-comment-medical"></i>
                    </div>
                    <div className="icon drop" onClick={openOption}>
                        <i className="fas fa-ellipsis-h"></i>
                        {openMoreOptions && (
                            <Navbar2SideViewMoreOptions close={closOption} />
                        )}
                    </div>
                    <div className="follow" onClick={follow}>
                        Follow
                    </div>
                </div>
            </div>
        </div>
    );
}
Navbar2SideView.propTypes = {
    name: PropTypes.string.isRequired
};
