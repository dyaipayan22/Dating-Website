import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CancelIcon from "@mui/icons-material/Cancel";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import "../../styling/Feed/ButtonsCard.css";
import { useCookies } from "react-cookie";

const ButtonsCard = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const handleClick = () => {
    removeCookie("authToken", cookies.authToken);
    removeCookie("email", cookies.email);
    removeCookie("userId", cookies.userId);
    window.location.reload();
  };

  return (
    <div className="btns-footer">
      <button type="button" onClick={handleClick}>
        <CancelIcon className="reject-btn" fontSize="large" />
      </button>

      <div className="play-pause-btn">
        <div className="outer">
          <div className="inner">
            <PlayArrowIcon className="play-button" fontSize="large" />
          </div>
        </div>
      </div>

      <button type="button">
        <LibraryMusicIcon className="song-btn" fontSize="large" />
      </button>
    </div>
  );
};

export default ButtonsCard;
