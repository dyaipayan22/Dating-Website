import React from "react";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import "../../styling/Chat/ChatBox.css";
import ChatContainer from "./ChatContainer";

const ChatBox = () => {
  return (
    <div className="chat_box">
      <ChatHeader />
      <ChatContainer />
      <ChatFooter />
    </div>
  );
};

export default ChatBox;
