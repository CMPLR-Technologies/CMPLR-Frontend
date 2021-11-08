import React from "react";
import "../../styles/scss/navbarComponent/Navbar.css";
import SearchBar from "./containers/searchBar/SearchBar";
import NavbarLinks from "./containers/navbarLinks/NavbarLinks";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        {/*section 1 contains logo and search bar*/}
        <div className="section1">
          <div className="logo">
            <span className="fa fa-downcase-t"></span>
          </div>
          <SearchBar />
        </div>

        {/*section 2 contains links*/}
        <NavbarLinks />
      </div>
    </div>
  );
};

export default Navbar;
