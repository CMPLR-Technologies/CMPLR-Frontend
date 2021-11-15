import React from "react";
import { Link } from "react-router-dom";
const NewPostPopupItem = (props) => {
  return (
    <Link to='/home'>
      <div className="new-post-popup-box">
        <div
          className={`new-post-popup-box-icon new-post-popup-box-icon${props.id}`}
        >
          <i className={props.icon}></i>
        </div>
        <div className="new-post-popup-box-text">{props.type}</div>
      </div>
    </Link>
  );
};

export default NewPostPopupItem;
