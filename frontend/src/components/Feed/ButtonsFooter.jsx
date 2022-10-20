import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import "../../styling/Feed/ButtonsFooter.css";
import { useCookies } from "react-cookie";

const ButtonsFooter = () => {

  const [cookies,setCookie,removeCookie] = useCookies(['user'])


  const handleClick  = ()=>{
    removeCookie('authToken',cookies.authToken)
    removeCookie('email',cookies.email)
    removeCookie('userId',cookies.userId)
    window.location.reload()
  }

  return (
    <div className="btns_footer">
      <IconButton onClick={handleClick}>
        <CancelIcon  fontSize="large" />
      </IconButton>

      <IconButton>
        <MusicNoteIcon fontSize="large" />
      </IconButton>

      <IconButton>
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton>
        <CheckIcon  fontSize="large" />
      </IconButton>
    </div>
  );
};

export default ButtonsFooter;
