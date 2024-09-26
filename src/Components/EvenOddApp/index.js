// Write your code here
import React, { useState } from "react";
function EvenOddApp() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState("Even");
  function checkFunction(randomNumber) {
    return randomNumber % 2 === 0 ? "Even" : "Odd";
  }
  function myFunction() {
    const randomNumber = setNum1(Math.floor(Math.random() * 100));
    console.log(randomNumber);
    setNum1(randomNumber);
    setNum2(checkFunction(randomNumber));

    return num1, num2;
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count {num1}</h1>
      <p> Count is {num2}</p>
      <button onClick={myFunction}>Increment</button>
      {console.log(num1, num2)}
    </div>
  );
}

export default EvenOddApp;
