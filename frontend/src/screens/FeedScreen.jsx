import React from "react";
import Events from "../components/Events";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header";
import Matches from "../components/Matches";
import "../styling/FeedScreen.css";

const FeedScreen = () => {
  return (
    <div className="feedScreen">
      <Header className="header" />
      <Matches className="matches" />
      <Feed className="feed" />
      <Events className="events" />
    </div>
  );
};

export default FeedScreen;
