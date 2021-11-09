import React, { useState, useEffect } from "react";
import "../../../../styles/scss/navbarComponent/Navbar.css";
import SearchBar from "../searchBar/SearchBar";
const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  //this funcion is made to if the screen is big so make searchOpen to true to show the search bar
  const chaneMobileView = () => {
    if (window.innerWidth > 960) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  };

  useEffect(() => {
    chaneMobileView();
  }, []);
  window.addEventListener("resize", chaneMobileView);


  return (
    <div className="section1">
      {mobileView && (
        <div className="menu-mobile-icon" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>
      )}
      <div className="logo main">
        <span className="fa fa-downcase-t"></span>
      </div>
      {!mobileView && <SearchBar />}
      {searchOpen && mobileView ? (
        <SearchBar />
      ) : mobileView ? (
        <div className="logo">
          <span className="fa fa-downcase-t"></span>
        </div>
      ) : null}

      <div className="search-mobile-icon" onClick={toggleSearch}>
        <i className={!searchOpen ? "fas fa-search" : "fas fa-times"}></i>
      </div>
    </div>
  );
};

export default Section1;
