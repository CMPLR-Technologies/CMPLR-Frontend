import React, { useState } from "react";
import "../../../../styles/styles.css";
import SearchResult from "./searchBarResults/SearchResult";
// import OnOutsiceClick from "react-outclick";

const SearchBar = () => {
  const [isHover, setIsHover] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const onChange = (e) => {
    setSearchWord(e.target.value);
    //TO DO : send req to backend and get the users
    setOpenSearch(true);
  };
  const changeHover = () => {
    if (!isHover&&searchWord!="")setOpenSearch(true);
    setIsHover(!isHover);
    
  };
  const closeOpenSearch=()=>{
    setOpenSearch(false);
  }
  //TO DO change it to know the real auth or not
  const isAuth = false;
  const darkTheme = false;
  return (
    // <OnOutsiceClick onOutsideClick={closeOpenSearch}>
      <div
        className={`search ${isHover ? "focus " : ""} ${
          !isAuth ? "not-auth " : ""
        }${darkTheme ? "dark" : ""}`}
      >
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <input
          onFocus={changeHover}
          onBlur={changeHover}
          onChange={onChange}
          focus
          className="search-input"
          placeholder="Search Tumblr"
          value={searchWord}
        ></input>
        {openSearch && <SearchResult search={searchWord} theme="normal" />}
      </div>
    // </OnOutsiceClick>
  );
};

export default SearchBar;
