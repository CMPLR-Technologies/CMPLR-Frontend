import React, { useState } from "react";
import OnOutsiceClick from "react-outclick";
import "../../../../../styles/scss/navbarComponent/Navbar.css";
import MessagesPopUp from "../messagesPopup/MessagesPopUp";
import { Link } from "react-router-dom";

const AuthLinks = () => {
  //dropdown lists
  const [openMessagePopup, setOpenMessagePopup] = useState(false);
  const [openNotificationsPopup, setOpenNotificationsPopup] = useState(false);
  const [openAccountPopup, setOpenAccountPopup] = useState(false);

  const [openHome, setOpenHome] = useState(false);
  const [openRecommended, setOpenRecommended] = useState(false);
  const [openInbox, setOpenInbox] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);

  const openHomeFun = () => {
    if (openHome) return;
    setOpenHome(true);
    setOpenRecommended(false);
    setOpenInbox(false);
  };

  const openRecommendedFun = () => {
    if (openRecommended) return;
    setOpenRecommended(true);
    setOpenInbox(false);
    setOpenHome(false);
  };

  const openInboxFun = () => {
    if (openInbox) return;
    setOpenInbox(true);
    setOpenHome(false);
    setOpenRecommended(false);
  };

  //close dropdown message list
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

/*  const clickOpenPopup = () => {
    console.log("closeg");
    setOpenPopup(!openPopup);
  };*/
  return (
    <>
      {/*TODO make this link to dashboard */}
      <li
        className={`link-icon ${openHome ? "active" : ""}`}
        onClick={openHomeFun}
      >
        <Link to="/">
          <i className="fas fa-home"></i>
        </Link>
      </li>
      {/*TODO make this link to recommended for you */}
      <li
        className={`link-icon ${openRecommended ? "active" : ""}`}
        onClick={openRecommendedFun}
      >
        <Link to="/home">
          <i className="far fa-compass"></i>
        </Link>
      </li>
      {/*TODO make this link to inbox */}
      <li
        className={`link-icon ${openInbox ? "active" : ""}`}
        onClick={openInboxFun}
      >
        <Link to="/home">
          <i className="fas fa-envelope"></i>
        </Link>
      </li>

      <div className="link-popup">
        <OnOutsiceClick onOutsideClick={closeMessagePopup}>
          <li
            onClick={clickMessagePopup}
            className={`link-icon message ${openMessagePopup ? "active" : ""}`}
          >
            <i className="fas fa-comment-dots"></i>
          </li>
          {openMessagePopup && <MessagesPopUp />}
        </OnOutsiceClick>
      </div>

      <li
        onClick={clickNotificationsPopup}
        className={`link-icon  ${openNotificationsPopup ? "active" : ""}`}
      >
        <i className="fas fa-bolt"></i>
      </li>
      <li
        onClick={clickAccountPopup}
        className={`link-icon  ${openAccountPopup ? "active" : ""}`}
      >
        <i className="fas fa-user"></i>
      </li>
      <li className="link-icon pen">
        <Link to="/new">
          <i className="fas fa-pen"></i>
        </Link>
      </li>
    </>
  );
};

export default AuthLinks;
