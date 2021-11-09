import React, { useState } from "react";
import "../../../../styles/scss/navbarComponent/Navbar.css";
const SearchBar = () => {
  const [isHover, setIsHover] = useState(false);
  const changeHover = () => {
    setIsHover(!isHover);
  };
  //TO DO change it to know the real auth or not
  const isAuth = false;
  const darkTheme=false;
  return (
    <div className={`search ${isHover ? "focus " : ""} ${!isAuth?"not-auth ":""}${darkTheme?"dark":""}`}>
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
      <input
        onFocus={changeHover}
        onBlur={changeHover}
        focus
        className="search-input"
        placeholder="Search Tumblr"
      ></input>
    </div>
  );
};

export default SearchBar;
