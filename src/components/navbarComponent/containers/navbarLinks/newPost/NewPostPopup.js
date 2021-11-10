import React, { useState ,useEffect} from "react";
import NewPostPopupItem from "./NewPostPopupItem";

const NewPostPopup = (props) => {
  let items = [
    {
      id: 1,
      type: "Text",
      icon: "fas fa-font",
    },
    {
      id: 2,
      type: "Photo",
      icon: "fas fa-font",
    },
    {
      id: 3,
      type: "Quote",
      icon: "fas fa-font",
    },
    {
      id: 4,
      type: "Link",
      icon: "fas fa-font",
    },
    {
      id: 5,
      type: "Chat",
      icon: "fas fa-font",
    },
    {
      id: 6,
      type: "Audio",
      icon: "fas fa-font",
    },
    {
      id: 7,
      type: "Video",
      icon: "fas fa-font",
    },
  ];
  console.log("hello new post");
  //const { openPopup } = props;
  const openPopup = props.open;
  let darkTheme = false;
  let res = null;
  if (openPopup)
    res = (
      <div className={`new-post-popup ${darkTheme ? "dark" : ""}`}>
        <div className="new-post-popup-items">
          {items.map((item) => (
            <NewPostPopupItem type={item.type} id={item.id} icon={item.icon} />
          ))}
        </div>
      </div>
    );
  return res;
};

export default NewPostPopup;
