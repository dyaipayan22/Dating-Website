import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import "../../styling/Feed/Card.css";
import axios from "axios";
import users from "../../users";
import ButtonsFooter from "./ButtonsFooter";

const Card = (props) => {
  //const props_users = props
  console.log("From card",props)

  return (
    <div className="card">
      <div className="card_container">
          <div
            className="card_image"
            
            style={{ backgroundImage: `url(${props.fuser.pictures})` }}
          >
            <div className="card_content">
              <div className="card_title">
                <h2>{props.fuser.first_name}</h2>
              </div>
              <div className="card_description">
                <p>{props.fuser.description}</p>
              </div>
            </div>
          </div>
      </div>
      <div className="btn_container">
        <IconButton className="play_pause_btn">
          <PauseIcon fontSize="large" />
          {/* <PlayArrowIcon fontSize="large" /> */}
        </IconButton>
      </div>
      
    </div>
  );
};

export default Card;
