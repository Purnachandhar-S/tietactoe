import React, { useState } from "react";
// import { Component } from "react";
// class RandomNumber extends Component {
//   state = {
//     count: 0,
//   };

//   // Add a blank line between class methods for better readability
//   generateNumber = () => {
//     const randomNumber = Math.floor(Math.random() * 100); // Use 'const' instead of 'let'
//     this.setState({
//       count: randomNumber,
//     });
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>Random Number </h1>
//         <p>Generate a random number in the range of 0 to 100</p>
//         <button onClick={this.generateNumber}>Generate</button>
//         <h1>{count}</h1>
//       </div>
//     );
//   }
// }
// export default RandomNumber;

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
