import React from "react";
import MessagesContainer from "./MessagesContainer";
const MessagesPopUp = () => {
  const darkTheme=false;
  return (
    <div className={`popup ${darkTheme?"dark ":""}`}>
      <MessagesContainer />
    </div>
  );
};

export default MessagesPopUp;
