import React from "react";

const MessageItem = (props) => {
  {
    /*to do load the real data(photo sender,rec,message*/
  }
  let { sender, receiver, message } = props;
  return (
    <div className="popup-messages-message">
      <div className="popup-messages-message-img">
        <img src="https://64.media.tumblr.com/9e07830d7ed05eb280b08079edd78e8c/ee7e6ae318b625e3-d6/s96x96u_c1/40cb8d3f150bfff507762783fb4c2ec36c6cd256.jpg"></img>
      </div>
      <div className="popup-messages-message-text">
        <h3 className="receiver">{receiver}</h3>
        <h3 className="sender">
          {sender + ": "}
          <span className="message">{message}</span>
        </h3>
      </div>
    </div>
  );
};

export default MessageItem;
