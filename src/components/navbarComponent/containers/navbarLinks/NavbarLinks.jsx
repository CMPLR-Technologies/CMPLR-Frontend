import React, { useState } from "react";
// import OnOutsiceClick from "react-outclick";
import "../../../../styles/styles.css";
import MessagesPopUp from "./MessagesPopup/MessagesPopUp";
import AuthLinks from "./links/AuthLinks";
import UnAuthLinks from "./links/UnAuthLinks";
const NavbarLinks = () => {
  const isAuth = false;
  return (
    <ul className="section2">{isAuth ? <AuthLinks /> : <UnAuthLinks />}</ul>
  );
};

export default NavbarLinks;
