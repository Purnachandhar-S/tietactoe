import React from "react";

// I have to make the name dissaper and reapper when button is clicked
// button onclcik funcion

class ShowHideName extends React.Component {
  state = {
    showFirstName: false,
    showLastName: false,
  };
  onChangeFirstname = () => {
    this.setState((prevState) => ({ showFirstName: !prevState.showFirstName }));
  };

  render() {
    const { showFirstName, showLastName } = this.state;
    return (
      <div style={{ textAlign: "center", margin: "100px" }}>
        <button onClick={this.onChangeFirstname}>Show/Hide firstName</button>
        {showFirstName && <h1>Purnachandhar</h1>}
        {showLastName && <h1>Simharaju</h1>}
        <div></div>
      </div>
    );
  }
}

export default ShowHideName;

//solution

//trial 1

// const ShowHideName = () => {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Show/Hide Name</h1>
//       <div style={{ textAlign: "center", display: "flex" }}>
//         <div>
//           <button
//             onClick={() => {
//               console.log("object");
//             }}
//           >
//             Show/hide firstName
//           </button>
//           <h1>Purnachandhar</h1>
//         </div>
//         <div>
//           <button>Show/hide lastName</button>
//           <h1>Simharaju</h1>
//         </div>
//       </div>

//       <img
//         src="https://assets.ccbp.in/frontend/content/react-js/show-hide-output.gif"
//         alt="dfghjk"
//       />
//     </div>
//   );
// };

// export default ShowHideName;
