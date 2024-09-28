import React, { useState } from "react";

const Randomnumber = () => {
  const [count, setCount] = useState(0);

  function generateNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    setCount(randomNumber);
  }

  return (
    <div>
      <h1> {count}</h1>
      <button onClick={generateNumber}>Generate Random number</button>
    </div>
  );
};

export default Randomnumber;

// import React from "react";
// import { useState } from "react";

// const RandomNumber = () => {
//   function getRandomFloat(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }

//   // Example: Get a random float between 1 and 10
//   const randomFloat = getRandomFloat(1, 100);
//   const [randomforest, setstate] = useState(getRandomFloat(1, 100));
//   return (
//     <div>
//       <p>{randomFloat.toFixed(2)}</p> {/* Display with 2 decimal places */}
//       <button
//         onClick={() => {
//           setstate(getRandomFloat(1, 100));
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default RandomNumber;
