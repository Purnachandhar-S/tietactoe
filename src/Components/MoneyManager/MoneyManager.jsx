import React, { useState } from "react";
import MoneyDetails from "./MoneyDetails";
import TranscationItem from "./TranscationItem";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

export default function MoneyManager() {
  const [historyList, setHistoryList] = useState([]);
  const transactionDetails = (list) => {
    setHistoryList(list);
  };
  const onDelete = (id) => {
    const newarray = historyList.filter((each) => id !== each.id);
    console.log(newarray);
    setHistoryList(newarray);
  };
  return (
    <div>
      <h1>Hi, Richard</h1>
      <p>
        Welcome back to your <span>Money Manager</span>
      </p>
      <div>
        <div>
          <p>Your Balance</p>
          <p>RS 0</p>
        </div>
        <div>
          <p>Your income</p> <p>Rs 0</p>
        </div>
        <div>
          <p>Your Expenses</p> <p>Rs 0</p>
        </div>
      </div>
      <div>
        <MoneyDetails
          transactionTypeOptions={transactionTypeOptions}
          transactionDetails={transactionDetails}
        />
        <TranscationItem HistoryItems={historyList} onDelete={onDelete} />
      </div>
    </div>
  );
}
