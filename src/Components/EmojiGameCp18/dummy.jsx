import { useState } from "react";

function EmojiCard(props) {
  const { cardDetails, EmojiClicked } = props;
  const onSelect = () => {
    EmojiClicked(cardDetails.id);
  };
  return (
    <li>
      <button onClick={onSelect}>
        <img src={cardDetails.emojiUrl} alt={cardDetails.emojiName} />
      </button>
    </li>
  );
}

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
          <h1>You Won</h1> <h1>Best Score</h1> <p>12/12</p>
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
          <button onClick={replay}>Play Again</button>
        </div>
      )}
    </div>
  );
};

function NavBar(props) {
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

function EmojiGame(props) {
  const { emojisList } = props;
  const [shownList, setShownList] = useState(emojisList);
  const [checkArray, setCheckArray] = useState([]);
  const [gameover, setGameover] = useState(false);
  const [score, setScore] = useState(0);
  const [top, setTop] = useState(0);

  const shuffleArray = (id) => {
    let newArray = [...shownList];
    let newCheckArray = [...checkArray];

    let case1 = newCheckArray.includes(id);
    if (!case1) {
      newCheckArray.push(id);
      setScore(score + 1);
    } else {
      setCheckArray([]);
      setTop((prevScore) => {
        if (prevScore < score) {
          return score;
        } else {
          return prevScore;
        }
      });
      return setGameover(true);
    }
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setShownList(newArray);
    setCheckArray(newCheckArray);
  };

  const replay = () => {
    setScore(0);
    setGameover(false);
  };

  return (
    <div>
      <NavBar scoreDetails={score} topDetails={top} />
      <div>
        {gameover ? (
          <WinOrLoseCard scoreDetails={score} playAgain={replay} />
        ) : (
          <ul style={{ display: "flex", listStyle: "none" }}>
            {shownList.map((each) => (
              <EmojiCard
                key={each.id}
                cardDetails={each}
                EmojiClicked={shuffleArray}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EmojiGame;
