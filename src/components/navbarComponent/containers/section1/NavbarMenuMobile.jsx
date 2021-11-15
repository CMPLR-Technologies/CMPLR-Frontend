import React from "react";

const NavbarMenuMobile = (props) => {
  const close = () => {
    props.close();
  };
  return (
    <div className={`navbar-menu-mobile ${props.active ? "active" : ""}`}>
      <button
        aria-label="Close"
        className="navbar-menu-mobile-close"
        onClick={close}
      >
        <span></span>
      </button>
      <div className="navbar-menu-mobile-menu">
        <button className="create-new-post">
          <i className="fas fa-pen"></i> Create a post
        </button>
        <ul>
          <li className="navbar-menu-mobile-menu-item">
            <i className="fas fa-home"></i> Dashboard
          </li>
          <li className="navbar-menu-mobile-menu-item">
            <i className="fas fa-home"></i> Dashboard
          </li>
          <li className="navbar-menu-mobile-menu-item">
            <i className="fas fa-home"></i> Dashboard
          </li>
          <li className="navbar-menu-mobile-menu-item">
            <i className="fas fa-home"></i> Dashboard
          </li>
          <li className="navbar-menu-mobile-menu-item">
            <i className="fas fa-home"></i> Dashboard
          </li>
          <li className="navbar-menu-mobile-menu-item">
            <i className="fas fa-home"></i> Dashboard
          </li>
          <li className="navbar-menu-mobile-menu-item">
            <i className="fas fa-home"></i> Dashboard
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenuMobile;
