// coding is simple you just learn slowly and steadly
// this is the coding practise 5
// class good 1.projectspage 2. googlesearch 3. contactsapp

import React from "react";
// import Appointments from "./Components/AppoinmentsCp16/Appointments";
// import MoneyManager from "./Components/MoneyManager/MoneyManager";
import EmojiGameApp from "./Components/EmojiGameCp18/dummy2";

// import CommentsApp from "./Components/CommentsApp/CommentsApp";
// import ContactsApp from "./Components/Contacts/ContactsApp";
// import Reviews from "./Components/CoinTossCp12/Reviews";
// import CoinToss from "./Components/CoinTossCp12/CoinToss";
// import AppStore from "./Components/ProjectsPageCP12/AppStore";
// import "./App.css";
// import ProjectPage from "./Components/ProjectsPageCP12/ProjectPage";
// import Gallery from "./Components/GalleryApp_cp12/GalleryApp";
// import App1 from "./Components/Assignment/App1";
// import FruitsCounter from "./Components/countLetters/FruitCounter";
// import Counter from "./Components/Counter";
// import CountLetters from "./Components/countLetters/CountLetters";
// import CashWithdrawal from "./Components/CashWithDrawal/CashWithdrawal";
// import SimpleTodos from "./Components/SimpleTodos/SimpleTodos";
// import DestinationSearch from "./Components/destionationSearch/DestinationSearch";
// import Randomnumber from "./Components/randomnumber";
// import LoginApp from "./Components/LoginApp";
// import EvenOddApp from "./Components/EvenOddApp";
// import ShowHideName from "./Components/ShowAndHide/showHideName";

const App = () => {
  return (
    <div className="container">
      <EmojiGameApp />
      {/* <MoneyManager /> */}
      {/* <Appointments /> */}
      {/* <CommentsApp /> */}
      {/* <ContactsApp /> */}
      {/* <Reviews /> */}
      {/* <CoinToss /> */}
      {/* <AppStore /> */}
      {/* <Gallery /> */}
      {/* <ProjectPage /> */}
      {/* <FruitsCounter /> */}
      {/* <Counter /> */}
      {/* this is counter app using class component IMP revise daily */}
      {/* <App1 />  */}
      {/* History list search and delete operation */}
      {/* <CountLetters /> */}
      {/* <CashWithdrawal /> */}
      {/* <SimpleTodos /> */}
      {/* <DestinationSearch /> */}
      {/* <Randomnumber /> */}
      {/* <LoginApp /> */}
      {/* <ShowHideName /> */}
      {/* <EvenOddApp /> */}
    </div>
  );
};

export default App;

// import GoogleSuggestions from "./Components/googleSearch/GoogleSuggestions";

// import "./App.css";

// const suggestionsList = [
//   { id: 1, suggestion: "Price of Ethereum" },
//   { id: 2, suggestion: "Oculus Quest 2 specs" },
//   { id: 3, suggestion: "Tesla Share Price" },
//   { id: 4, suggestion: "Price of Ethereum today" },
//   { id: 5, suggestion: "Latest trends in AI" },
//   { id: 6, suggestion: "Latest trends in ML" },
// ];

// const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />;

// export default App;
//This is from the coding practise 3 Q2
// import "./App.css";
// // import RandomNumber from "./Components/randomnumber";
// import EvenOddApp from "./Components/EvenOddApp";

// const cardsList = [
//   {
//     id: 1,
//     title: "Data Scientist",
//     description:
//       "Data scientists gather and analyze large sets of structured and unstructured data",
//     imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
//     className: "card-1",
//   },
//   {
//     id: 2,
//     title: "IOT Developer",
//     description:
//       "IoT Developers are professionals who can develop, manage, and monitor IoT devices.",
//     imgUrl: "https://assets.ccbp.in/frontend/react-js/iot-developer-img.png",
//     className: "card-2",
//   },
//   {
//     id: 3,
//     title: "VR Developer",
//     description:
//       "A VR developer creates completely new digital environments that people can see.",
//     imgUrl: "https://assets.ccbp.in/frontend/react-js/vr-developer-img.png",
//     className: "card-3",
//   },
//   {
//     id: 4,
//     title: "ML Engineer",
//     description:
//       "Machine learning engineers feed data into models defined by data scientists.",
//     imgUrl: "https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png",
//     className: "card-4",
//   },
// ];

// const App = () => (
//   <div>
//     Hi this is even odd app
//     <EvenOddApp />
//     <hr width="100%" color="green" />
//     {/* <RandomNumber /> */}
//     <h1>Learn 4.0 Technologies</h1>
//     <p>get trained by alumini</p>
//     {cardsList.map((cv) => (
//       <div style={{ color: "" }}>
//         <h1>{cv.title}</h1>
//         <p>{cv.description}</p>
//         <img src={cv.imgUrl} alt="DP" />
//       </div>
//     ))}
//   </div>
// );

// export default App;

//This is from the Lists and keys coding practise 3 Q1
// import Heading from "./Components/index";
// import "./App.css";
// const bannerCardsList = [
//   {
//     id: 1,
//     headerText: "The Seasons Latest",
//     description: "Get the seasons all latest designs in a flick of your hand",
//     className: "card-1",
//   },
//   {
//     id: 2,
//     headerText: "Our New Designs",
//     description:
//       "Get the designs developed by our in-house team all for yourself",
//     className: "card-2",
//   },
//   {
//     id: 3,
//     headerText: "Insiders",
//     description: "Get the top class products for yourself with an extra off",
//     className: "card-3",
//   },
// ];

// const App = () => (
//   <>
//     {/* {bannerCardsList.map((eachItem) => (
//       <h1>{eachItem.headerText}</h1>
//     ))}
//     {bannerCardsList.map((item) => (
//       <Heading text="hello world" />
//     ))}
//      ANythiing */}

//     <h1> You are doing Good</h1>
//     <ol>
//       {bannerCardsList.map((eachItem) => (
//         <Heading BannerDetails={eachItem} />
//       ))}
//     </ol>
//   </>
// );

// export default App;

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
