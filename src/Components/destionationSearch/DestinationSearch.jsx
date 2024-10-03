//coding practise 6 challenge 2

//lets write some code to print the value in the console

// import React, { useState } from "react";

// const DestinationSearch = () => {
//   function myFunction(event) {
//     console.log(event.target.value);
//   }
//   return (
//     <div>
//       {/* <button onClick={myFunction}>Click</button> */}
//       {/* input lo enter chesina values console lo print avvali*/}
//       <input type="text" onClick={(event) => myFunction(event)} />
//     </div>
//   );
// };

// export default DestinationSearch;

import { Component } from "react";
import UserProfile from "./UserProfile";

//import "./App.css";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

class DestinationSearch extends Component {
  state = {
    searchInput: "",
    usersDetailsList: initialUserDetailsList,
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  deleteUser = (uniqueNo) => {
    const { usersDetailsList } = this.state;
    const filteredUsersData = usersDetailsList.filter(
      (each) => each.uniqueNo !== uniqueNo
    );
    this.setState({
      usersDetailsList: filteredUsersData,
    });
  };

  render() {
    const { searchInput, usersDetailsList } = this.state;
    // chatgpt - Convert both search input and user names to lowercase for case-insensitive search
    const searchResults = usersDetailsList.filter((eachUser) =>
      eachUser.name.toLowerCase().includes(searchInput.trim().toLowerCase())
    );
    console.log(searchInput);
    return (
      <div className="app-container">
        <h1>Purnachandhar</h1>
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />

        <ul className="list-container">
          {searchResults.length > 0 ? (
            searchResults.map((eachUser) => (
              <UserProfile
                userDetails={eachUser}
                key={eachUser.uniqueNo}
                deleteUser={this.deleteUser}
              />
            ))
          ) : (
            <p>No users found</p>
          )}
        </ul>
      </div>
    );
  }
}

export default DestinationSearch;

// add input Element
// filter
// search input will change over the time
// so lets keep Searchinput as state
// delete user

//paste
//n+2 code

// import {Component} from 'react'

// import DestinationItem from '../DestinationItem' // Assuming this is correctly set up

// class DestinationSearch extends Component {
//   state = {
//     searchInput: '', // searchInput is declared here in the state
//   }

//   // Updates the search input state when the user types
//   onChangeSearchInput = event => {
//     this.setState({
//       searchInput: event.target.value, // Correctly updating searchInput in the state
//     })
//   }

//   render() {
//     const {destinationsList} = this.props // Access the list from props
//     const {searchInput} = this.state // Correctly accessing searchInput from state

//     // Filter the destinations based on the search input
//     const filteredDestinations = destinationsList.filter(
//       destination =>
//         destination.name.toLowerCase().includes(searchInput.toLowerCase()), // Using searchInput here
//     )

//     return (
//       <div style={{textAlign: 'center'}}>
//         <h1>Destination Search</h1>
//         {/* Input to filter destinations */}
//         <input
//           type="search"
//           onChange={this.onChangeSearchInput}
//           value={searchInput} // Correctly binding searchInput here
//           placeholder="Search Destination"
//         />
//         <ul style={{listStyleType: 'none'}}>
//           {/* Iterate over filtered destinations and render each */}
//           {filteredDestinations.map(destination => (
//             <DestinationItem key={destination.id} destination={destination} />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default DestinationSearch

//n time code

// import {Component} from 'react'
// import DestinationItem from '../DestinationItem/index'

// class DestinationSearch extends Component {
//   state = {
//     searchInput: '',
//   }

//   onChangeSearchInput = event => {
//     this.setState({
//       searchInput: event.target.value,
//     })
//   }

//   render() {
//     const {destinationsList} = this.props // Access the list from props
//     const {searchInput} = this.state
//     return (
//       <div style={{textAlign: 'center'}}>
//         <h1>Destination Search</h1>
//         <input
//           type="search"
//           onChange={this.onChangeSearchInput}
//           value={searchInput}
//         />
//         <ul style={{listStyleType: 'none'}}>
//           {/* Iterate over destinationsList and render each destination */}
//           {destinationsList.map(destination => (
//             <DestinationItem destination={destination} />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default DestinationSearch

// //            {/* <li key={destination.id}>{destination.name}</li> // Use `destination.id` as key instead of index */}
