import React from "react";
import "../styling/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">Logo</div>
      <div className="header_options">
        <a href="#">Welcome</a>
        <button className="header_Loginbtn">Log In</button>
      </div>
    </div>
  );
};

export default Header;
