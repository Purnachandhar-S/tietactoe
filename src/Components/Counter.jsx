import { Component } from "react";
//import './index.css'

class FruitsCounter extends Component {
  state = { bananasCount: 4, mangoesCount: 5 };

  onClickEatBanana = () => {
    this.setState((prevState) => ({
      bananasCount: prevState.bananasCount + 1,
    }));
  };

  onClickEatMango = () => {
    this.setState((prevState) => ({
      mangoesCount: prevState.mangoesCount + 1,
    }));
  };

  render() {
    const { mangoesCount, bananasCount } = this.state;

    return (
      <div className="app-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count"> {bananasCount}</span> bananas
          </h1>
          <div class="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  class="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FruitsCounter;

// import React, { Component } from "react";

// class Counter extends Component {
//   state = { count: 0 };

//   onDecrement = () => {
//     this.setState((prevState) => ({ count: prevState.count - 1 }));
//   };

//   onIncrement = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <div className="app-container">
//         <h1 className="count">Count {count}</h1>
//         <button className="button" onClick={this.onIncrement} type="button">
//           Increase
//         </button>
//         <button className="button" onClick={this.onDecrement} type="button">
//           Decrease
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // Initialize the state
//     this.state = {
//       count: 0,
//     };
//   }

//   // Method to increase count
//   increase = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   // Method to decrease count
//   decrease = () => {
//     this.setState((prevState) => ({
//       count: prevState.count > 0 ? prevState.count - 1 : 0, // Optional check to prevent negative values
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.increase}>Increase</button>
//         <button onClick={this.decrease}>Decrease</button>
//       </div>
//     );
//   }
// }

// export default Counter;
