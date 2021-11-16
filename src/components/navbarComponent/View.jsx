import React, { useState,useEffect } from "react";
import "../../styles/styles.css";
import SearchBar from "./containers/searchBar/SearchBar";
import NavbarLinks from "./containers/navbarLinks/NavbarLinks";
import Section1 from "./containers/section1/Section1";
const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const isAuth=true;
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
  let nav=(<div className="nav">
      <div className="nav-container">
        {/*section 1 contains logo and search bar*/}
        <Section1 />
        {/*section 2 contains links*/}
        <NavbarLinks />
      </div>
    </div>);
  // if not user auth and mobile view hide navbar
  if(mobileView&&!isAuth)nav =null;
  return nav;
};

export default Navbar;
