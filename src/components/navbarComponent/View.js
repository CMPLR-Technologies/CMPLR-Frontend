import React, { useState,useEffect } from "react";
import "../../styles/scss/navbarComponent/Navbar.css";
import SearchBar from "./containers/searchBar/SearchBar";
import NavbarLinks from "./containers/navbarLinks/NavbarLinks";
import Section1 from "./containers/section1/Section1";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        {/*section 1 contains logo and search bar*/}
        <Section1 />
        {/*section 2 contains links*/}
        <NavbarLinks />
      </div>
    </div>
  );
};

export default Navbar;
