import React from "react";
import Message from "./Message";
import "../../styling/Chat/ChatContainer.css";

const ChatContainer = () => {
  return (
    <div className="chat_container">
      <Message />
    </div>
  );
};

export default ChatContainer;
