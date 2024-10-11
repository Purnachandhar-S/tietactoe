import { useState } from "react";
import DenominationItem from "./DenominationItem";
import { Component } from "react";

// function components

// export default function CashWithdrawal() {
//   const [balance, setBalance] = useState(2000);
//   const handleDebit = (amount) => {
//     setBalance((prevBalance) => prevBalance - amount);
//   };
//   return (
//     <div>
//       <p>{balance}</p>
//       {denominationsList.map((cv) => (
//         <DenominationItem key={cv.id} cv={cv} handleDebit={handleDebit} />
//       ))}
//     </div>
//   );
// }

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  };

  updateBalance = (value) => {
    this.setState((prevState) => ({ balance: prevState.balance - value }));
  };

  render() {
    // const {denominationList} = this.props
    const denominationList = [
      {
        id: 1,
        value: 50,
      },
      {
        id: 2,
        value: 100,
      },
      {
        id: 3,
        value: 200,
      },
      {
        id: 4,
        value: 500,
      },
    ];
    const { balance } = this.state;
    const name = "Sarah Williams";
    const initial = name.slice(0, 1);

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationList.map((eachDenomination) => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CashWithdrawal;

// import CashWithdrawal from './components/CashWithdrawal'

// import './App.css'

// const denominationsList = [
//   {
//     id: 1,
//     value: 50,
//   },
//   {
//     id: 2,
//     value: 100,
//   },
//   {
//     id: 3,
//     value: 200,
//   },
//   {
//     id: 4,
//     value: 500,
//   },
// ]

// const App = () => <CashWithdrawal denominationsList={denominationsList} />

// export default App
