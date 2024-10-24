// 24-10-2024
// you should not modify this file

import { useState } from "react";

const emojisList = [
  {
    id: 0,
    emojiName: "Face with stuck out tongue",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
  },
  {
    id: 1,
    emojiName: "Face with head bandage",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
  },
  {
    id: 2,
    emojiName: "Face with hugs",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
  },
  {
    id: 3,
    emojiName: "Face with laughing",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
  },
  {
    id: 4,
    emojiName: "Laughing face with hand in front of mouth",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
  },
  {
    id: 5,
    emojiName: "Face with mask",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
  },
  {
    id: 6,
    emojiName: "Face with silence",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
  },
  {
    id: 7,
    emojiName: "Face with stuck out tongue and winked eye",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
  },
  {
    id: 8,
    emojiName: "Grinning face with sweat",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
  },
  {
    id: 9,
    emojiName: "Smiling face with heart eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
  },
  {
    id: 10,
    emojiName: "Grinning face",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
  },
  {
    id: 11,
    emojiName: "Smiling face with star eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
  },
];

function EmojiCard(props) {
  const { cardDetails, EmojiClicked } = props;
  const onSelect = () => {
    EmojiClicked(cardDetails.id);
  };
  return (
    <li>
      <button type="button" onClick={onSelect}>
        <img src={cardDetails.emojiUrl} alt={cardDetails.emojiName} />
      </button>
    </li>
  );
}

const WinOrLoseCard = (props) => {
  const { scoreDetails, playAgain } = props;
  const isWin = scoreDetails === 12;

  return (
    <div>
      {isWin ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win"
          />
          <h1>You Won</h1>
          <h1>Best Score</h1>
          <p>12/12</p>
          <button type="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="lose"
          />
          <h1>You Lose</h1>
          <h1>{scoreDetails}/12</h1>
          <button type="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

function NavBar(props) {
  const { scoreDetails, topDetails, gameWon } = props;
  return (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!gameWon && (
        <div>
          <p>Score: {scoreDetails}</p>
          <p>Top Score: {topDetails}</p>
        </div>
      )}
    </div>
  );
}

function EmojiGame() {
  const [shownList, setShownList] = useState(emojisList);
  const [checkArray, setCheckArray] = useState([]);
  const [gameover, setGameover] = useState(false);
  const [score, setScore] = useState(0);
  const [top, setTop] = useState(0);

  const shuffleArray = (id) => {
    const newArray = [...shownList];
    const newCheckArray = [...checkArray];

    if (!newCheckArray.includes(id)) {
      newCheckArray.push(id);
      setScore((prevScore) => prevScore + 1);
    } else {
      setCheckArray([]);
      setTop((prevScore) => (prevScore < score ? score : prevScore));
      return setGameover(true);
    }

    // Shuffle the emojis
    for (let i = newArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setShownList(newArray);
    return setCheckArray(newCheckArray);
  };

  const replay = () => {
    setScore(0);
    setGameover(false);
    setCheckArray([]);
    setShownList(emojisList); // Reset to the original emojis list
  };

  return (
    <div>
      <NavBar scoreDetails={score} topDetails={top} gameWon={score === 12} />
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

const EmojiGameApp = () => <EmojiGame emojisList={emojisList} />;

export default EmojiGameApp;
