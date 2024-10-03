import { useState } from "react";
import DenominationItem from "./DenominationItem";

const denominationsList = [
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

export default function CashWithdrawal() {
  const [balance, setBalance] = useState(2000);
  const handleDebit = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
  };
  return (
    <div>
      <p>{balance}</p>
      {denominationsList.map((cv) => (
        <DenominationItem key={cv.id} cv={cv} handleDebit={handleDebit} />
      ))}
    </div>
  );
}

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
