import React, { useState } from "react";

export default function CoinToss() {
  // I have to make the random number based on that number i have to decide the heads or tails
  // const tossResult is created with random its multiplied with 2 bcs random generated the numbers
  // between 0 to 1 if i floor the number its always floors to 0 so by multipling with the 2
  // number generated <= 0.500000 becomes <=1.0000 flooring this number becomes 1

  const tossResult = Math.floor(Math.random() * 2);

  const [count, setCount] = useState(0); // I have made a count for total number of times the coin is flipped
  // i need to know how to  check the random number 0 or 1 and add it to counting heads or tails
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [img, setImg] = useState(true);
  const myFunction = () => {
    setCount(count + 1);
    console.log(count, tossResult, img);
    if (tossResult === 0) {
      setHeads(heads + 1);
      setImg(true);
    } else {
      setTails(tails + 1);
      setImg(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1> Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        <div>
          {img ? (
            <img
              style={{ width: "100px" }}
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="head"
            />
          ) : (
            <img
              style={{ width: "100px" }}
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="tails"
            />
          )}
        </div>
        <button onClick={myFunction}>Toss Coin</button>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Total: {count} </p>
          <p> Heads: {heads}</p>
          <p> Tails: {tails}</p>
        </div>
      </div>
    </div>
  );
}
