import React, { useState } from "react";
import NavBar from "./NavBar";
import EmojiCard from "./EmojiCard";
import WinOrLoseCard from "./WinOrLoseCard";

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
    // emojisList.sort(() => Math.random() - 0.5)
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
