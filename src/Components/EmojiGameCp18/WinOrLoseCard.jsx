import React from "react";

const WinOrLoseCard = (props) => {
  const { scoreDetails, playAgain } = props;
  let isWin;
  if (scoreDetails === 12) {
    isWin = true;
  } else {
    isWin = false;
  }
  const replay = () => {
    playAgain();
  };
  return (
    <div>
      {isWin ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="emoji logo"
          />
          <h1>You Won</h1> <h1>Best Score</h1> <h1>12/12</h1>
          <button onClick={replay}>Play Again</button>
        </div>
      ) : (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="emoji logo"
          />
          <h1>You Lose</h1>
          <h1>score</h1>
          <h1>{scoreDetails}/12</h1>
          <button onClick={replay}>Play again</button>
        </div>
      )}
    </div>
  );
};

export default WinOrLoseCard;
