import React from "react";
import "../../styles//scss/navbarComponent/Navbar.css";
import SearchBar from "./containers/SearchBar";
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
        <ul className="section2">
          <li className="link-icon active">
            <i className="fas fa-home"></i>
          </li>
          <li className="link-icon">
            <i className="fas fa-home"></i>
          </li>
          <li className="link-icon">
            <i className="fas fa-home"></i>
          </li>
          <li className="link-icon ">
            <i className="fas fa-home"></i>
          </li>
          <li className="link-icon ">
            <i className="fas fa-home"></i>
          </li>
          <li className="link-icon ">
            <i className="fas fa-home"></i>
          </li>

          <li className="link-icon pen">
            <i class="fas fa-pen"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
