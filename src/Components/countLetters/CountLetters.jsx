// import React, { useState } from "react";
// // how to count the letters in string
// // import in letter to array and count the length

// export default function CountLetters() {
//   const [state, setState] = useState([]);
//   function countFunction(e) {
//     console.log(e.target.value);
//     // state.push(e.target.value);
//     // console.log(state.length);
//   }
//   return (
//     <div>
//       <input type="text" onChange={countFunction} />
//     </div>
//   );
// }

import React, { useState } from "react";

const LetterCounter = () => {
  const [inputValue, setInputValue] = useState("");
  const [letterCount, setLetterCount] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Count only alphabetic letters (ignore spaces, numbers, punctuation)
    // const lettersOnly = value.replace(/[^a-zA-Z]/g, "");
    // setLetterCount(lettersOnly.length);
    setLetterCount(value.length);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Letter count: {letterCount}</p>
    </div>
  );
};

export default LetterCounter;
