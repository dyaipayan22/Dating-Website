import React from "react";
import { Avatar } from "@mui/material";
import "../styling/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src="images/Amazon logo.png" alt="Logo" />
      <div className="navbar">
        <div className="nav-links">
          <span>Explore</span>
          <span>Likes</span>
          <span>Events</span>
        </div>
        <div className="profile-display">
          <Avatar className="profile-pic" />
          <span>User</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
