import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import "../../styling/Feed/ButtonsFooter.css";

const ButtonsFooter = () => {
  return (
    <div className="btns_footer">
      <IconButton>
        <CancelIcon fontSize="large" />
      </IconButton>

      <IconButton>
        <MusicNoteIcon fontSize="large" />
      </IconButton>

      <IconButton>
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton>
        <CheckIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default ButtonsFooter;
