import React, { useState,useEffect} from "react";
import "../../../../styles/styles.css";
import SearchResult from "./searchBarResults/SearchResult";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const SearchBar = () => {
  const [isHover, setIsHover] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const onChange = (e) => {
    setSearchWord(e.target.value);
    console.log(searchWord);
  };
  useEffect(()=>{
    //TO DO : send req to backend and get the users
    if (searchWord.length > 0) setOpenSearch(true);
    else setOpenSearch(false);
  },[searchWord])
  const changeHover = () => {
    if (!isHover && searchWord != "") setOpenSearch(true);
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
        className={`search ${isHover ? "focus " : ""} ${
          !isAuth ? "not-auth " : ""
        }${darkTheme ? "dark" : ""}`}
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
          focus
          className="search-input"
          placeholder="Search Tumblr"
        ></input>
        {openSearch && <SearchResult data-testid='search-result' search={searchWord} theme="normal" />}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
