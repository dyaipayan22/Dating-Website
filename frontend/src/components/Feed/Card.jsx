import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import "../../styling/Feed/Card.css";
import users from "../../users";

const Card = () => {
  return (
    <div className="card">
      <div className="card_container">
        {users.map((user) => (
          <div
            className="card_image"
            style={{ backgroundImage: `url(${user.image})` }}
          >
            <div className="card_content">
              <div className="card_title">
                <h2>{user.name}</h2>
              </div>
              <div className="card_description">
                <p>{user.bio}</p>
              </div>
            </div>
          </div>
        ))}
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
