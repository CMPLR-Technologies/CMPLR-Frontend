import React, { useState } from "react";
import OnOutsiceClick from "react-outclick";
import "../../../../styles/scss/navbarComponent/Navbar.css";
import MessagesPopUp from "./MessagesPopup/MessagesPopUp";
const NavbarLinks = () => {
  const [openMessagePopup, setOpenMessagePopup] = useState(false);
  const [openNotificationsPopup, setOpenNotificationsPopup] = useState(false);
  const [openAccountPopup, setOpenAccountPopup] = useState(false);

  const closeMessagePopup = () => {
    setOpenMessagePopup(false);
  };
  const clickMessagePopup = () => {
    // if i open it
    if (!openMessagePopup) {
      //close other popup
      setOpenNotificationsPopup(false);
      setOpenAccountPopup(false);
    }
    setOpenMessagePopup(!openMessagePopup);
  };
  const clickNotificationsPopup = () => {
    // if i open it
    if (!openNotificationsPopup) {
      //close other popup
      setOpenMessagePopup(false);
      setOpenAccountPopup(false);
    }
    setOpenNotificationsPopup(!openMessagePopup);
  };
  const clickAccountPopup = () => {
    // if i open it
    if (!openAccountPopup) {
      //close other popup
      setOpenMessagePopup(false);
      setOpenNotificationsPopup(false);
    }
    setOpenAccountPopup(!openMessagePopup);
  };
  return (
    <ul className="section2">
      {/*TODO make this link to dashboard */}
      <li className="link-icon active">
        <i className="fas fa-home"></i>
      </li>
      {/*TODO make this link to recommended for you */}
      <li className="link-icon">
        <i class="far fa-compass"></i>
      </li>
      {/*TODO make this link to inbox */}
      <li className="link-icon">
        <i class="fas fa-envelope"></i>
      </li>

      <li
        onClick={clickMessagePopup}
        className={`link-icon message ${openMessagePopup ? "active" : ""}`}
      >
        <div className="link-popup">
          <OnOutsiceClick onOutsideClick={closeMessagePopup}>
            <i class="fas fa-comment-dots"></i>
            {openMessagePopup && <MessagesPopUp />}
          </OnOutsiceClick>
        </div>
      </li>

      <li
        onClick={clickNotificationsPopup}
        className={`link-icon  ${openNotificationsPopup ? "active" : ""}`}
      >
        <i class="fas fa-bolt"></i>
      </li>
      <li
        onClick={clickAccountPopup}
        className={`link-icon  ${openAccountPopup ? "active" : ""}`}
      >
        <i class="fas fa-user"></i>
      </li>
      <li className="link-icon pen">
        <i class="fas fa-pen"></i>
      </li>
    </ul>
  );
};

export default NavbarLinks;
