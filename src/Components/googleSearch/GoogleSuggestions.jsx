//App.js

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
// App.css
// * {
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

import { Component } from "react";

import SuggestionItem from "./SuggestionItems";

import "./index.css";

class GoogleSuggestions extends Component {
  state = {
    searchInput: "",
  };

  updateSearchInput = (value) => {
    this.setState({
      searchInput: value,
    });
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    const { suggestionsList } = this.props;
    const searchResults = suggestionsList.filter((eachSuggestion) =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map((eachSuggestion) => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleSuggestions;

//using functional component

// import React, { useState } from "react";

// function GoogleSuggestions(props) {
//   const { suggestionsList } = props;
//   const [searchInput, setSearchInput] = useState("");

//   function onChangeSearchInput(event) {
//     setSearchInput(event.target.value);
//     console.log(searchInput);
//   }
//   const searchResults = suggestionsList.filter((eachUser) =>
//     eachUser.suggestion
//       .toLowerCase()
//       .includes(searchInput.trim().toLocaleLowerCase())
//   );
//   console.log(searchResults);
//   const UpdateInput = (cv) => {
//     setSearchInput(cv.suggestion);
//   };

//   return (
//     <div style={{ textAlign: "center", margin: "50px" }}>
//       <img
//         style={{ width: "200px" }}
//         src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
//         alt="google logo"
//       />
//       <div>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
//           alt="search icon"
//         />
//       </div>
//       <input type="search" onChange={onChangeSearchInput} value={searchInput} />
//       <ul style={{ listStyle: "none" }}>
//         {searchResults.map((cv) => (
//           <li key={cv.id}>
//             <div style={{ display: "flex" }}>
//               <p>{cv.suggestion}</p>
//               <button onClick={() => UpdateInput(cv)}>
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
//                   alt="arrow"
//                 />
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GoogleSuggestions;
