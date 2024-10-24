import React from "react";

export default function NavBar(props) {
  const { scoreDetails, topDetails } = props;
  return (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div>
        <p>Score: {scoreDetails}</p>
        <p>Top Score: {topDetails}</p>
      </div>
    </div>
  );
}
