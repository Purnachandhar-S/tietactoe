//This is from the Lists and keys coding practise 3 Q1
import Heading from "./Components/index";
import "./App.css";

const bannerCardsList = [
  {
    id: 1,
    headerText: "The Seasons Latest",
    description: "Get the seasons all latest designs in a flick of your hand",
    className: "card-1",
  },
  {
    id: 2,
    headerText: "Our New Designs",
    description:
      "Get the designs developed by our in-house team all for yourself",
    className: "card-2",
  },
  {
    id: 3,
    headerText: "Insiders",
    description: "Get the top class products for yourself with an extra off",
    className: "card-3",
  },
];

const App = () => (
  <>
    {/* {bannerCardsList.map((eachItem) => (
      <h1>{eachItem.headerText}</h1>
    ))}
    {bannerCardsList.map((item) => (
      <Heading text="hello world" />
    ))} 
     ANythiing */}

    <h1> You are doing Good</h1>
    <ol>
      {bannerCardsList.map((eachItem) => (
        <Heading BannerDetails={eachItem} />
      ))}
    </ol>
  </>
);

export default App;

//not working syntax

/* <>
{bannerCardsList.map((item) => {
  <h1>{item.headerText} ghhhhj</h1>;
})}
</> */

// This is the ccbp first coding challenge on react js

// import React from "react";
// import "./App.css";

// export default function App() {
//   const element = (
//     <div className="super-over-league-container">
//       <h1 className="heading">Super Over League</h1>
//       <div className="teams-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
//           className="logo-image"
//         />
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
//           className="logo-image"
//         />
//       </div>
//     </div>
//   );

//   return <div>{element}</div>;
// }

// ReactDOM.render(element, document.getElementById('root'))

// import React from "react";
// import { useState } from "react";

// export default function App() {
//   let name = "Purna chandhar";
//   const [count, setCount] = useState(0);

//   let interval = setInterval(() => {
//     setCount(count + 1);
//   }, 1000);
//   function stopFunction() {
//     console.log("hello");
//   }

//   return (
//     <div>
//       Hello {name}
//       <p id="timer">{count}</p>
//       <button onClick={stopFunction}>Stop</button>
//     </div>
//   );
// }

// import React from "react";
// function Greeting({ name }) {
//   <h1 className="greeting">
//     Hello <i>{name}</i>. Welcome!
//   </h1>;
// }

// export default function App() {
//   return (
//     <div>
//       <Greeting name="Taylor" />
//     </div>
//   );
// }

// Basic code

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
