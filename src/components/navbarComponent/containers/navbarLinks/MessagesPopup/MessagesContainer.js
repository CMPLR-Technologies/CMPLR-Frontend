import React from "react";
import MessageItem from "./MessageItem";

const MessagesContainer = () => {
  const messages = [
    { sender: "gaser", receiver: "twix123", message: "hi" },
    { sender: "gaser1", receiver: "twix123", message: "hi" },
    { sender: "gaser2", receiver: "twix123", message: "hi" },
    { sender: "gaser3", receiver: "twix123", message: "hi" },
    { sender: "gaser3", receiver: "twix123", message: "hi" },
    { sender: "gaser3", receiver: "twix123", message: "hi" },
    { sender: "gaser3", receiver: "twix123", message: "hi" },
    { sender: "gaser3", receiver: "twix123", message: "hi" },
  ];
  return (
    <div>
      <div className="popup-header">
        {/*TODO MAKE IT BY USEr name */}
        {/*TODO MAKE loading icon */}

        {/*TODO implement icon back function */}
        <span>
          <i class="fas fa-angle-left"></i>
        </span>
        <h3>gaser ashraf</h3>
        <button>new message</button>
        {/*TODO implement new message function */}
        <span>
          <i class="fas fa-comment-dots"></i>
        </span>
      </div>
      <div className="popup-messages">
        {messages.map((message) => (
          <MessageItem
            sender={message.sender}
            receiver={message.receiver}
            message={message.message}
          />
        ))}
      </div>
    </div>
  );
};

export default MessagesContainer;
