import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import "../../styling/Chat/ChatHeader.css";

const ChatHeader = () => {
  return (
    <div className="chat_header">
      <IconButton>
        <Avatar />
      </IconButton>
      <h3>Person</h3>

      <div className="header_icons">
        <Search />
        <MoreVert />
      </div>
    </div>
  );
};

export default ChatHeader;
