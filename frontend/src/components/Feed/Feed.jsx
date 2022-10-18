import React from "react";
import "../../styling/Feed/Feed.css";
import Card from "./Card";
import ButtonsFooter from "./ButtonsFooter";

const Feed = () => {
  return (
    <div className="feed">
      <Card />
      <ButtonsFooter />
    </div>
  );
};

export default Feed;
