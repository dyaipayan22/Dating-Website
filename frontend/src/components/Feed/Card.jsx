import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import "../../styling/Feed/Card.css";
import axios from "axios";
import users from "../../users";
import ButtonsCard from "./ButtonsCard";

const Card = (props) => {
  //const props_users = props
  //console.log("From card", props);

  return (
    <div className="card-container">
      <div
        className="card"
        style={{ backgroundImage: `url(${props.fuser.pictures})` }}
      >
        <div className="card-content">
          <h2 className="card-title">{props.fuser.first_name}</h2>
          <p className="card-body">{props.fuser.description}</p>
        </div>
      </div>
      <ButtonsCard className="btns" />
    </div>
  );
};

export default Card;
