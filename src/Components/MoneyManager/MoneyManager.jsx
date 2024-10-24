import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

function TranscationItem(props) {
  const { historyItem, onDelete } = props;
  const onItemDelete = () => {
    onDelete(historyItem.id);
  };

  return (
    <li>
      {`${historyItem.title} ${historyItem.amount} ${historyItem.type}`}
      <button onClick={onItemDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  );
}

function MoneyDetails(props) {
  const { transactionDetails } = props;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount), // Ensure amount is a number
      type,
    };
    transactionDetails(newTransaction);
    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <label htmlFor="money">Money</label>
        <input
          type="number"
          value={amount}
          id="money"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <label htmlFor="type">Type</label>
        <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
          {transactionTypeOptions.map((each) => (
            <option key={each.optionId} value={each.displayText}>
              {each.displayText}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function MoneyManager() {
  const [historyList, setHistoryList] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const recalculateTotals = (transactions) => {
    let newBalance = 0;
    let newIncome = 0;
    let newExpenses = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "Income") {
        newBalance += transaction.amount;
        newIncome += transaction.amount;
      } else {
        newBalance -= transaction.amount;
        newExpenses += transaction.amount;
      }
    });

    setBalance(newBalance);
    setIncome(newIncome);
    setExpenses(newExpenses);
  };

  const transactionDetails = (newTransaction) => {
    const updatedHistory = [...historyList, newTransaction];
    setHistoryList(updatedHistory);
    recalculateTotals(updatedHistory);
  };

  const onDelete = (id) => {
    const updatedHistory = historyList.filter((each) => each.id !== id);
    setHistoryList(updatedHistory);
    recalculateTotals(updatedHistory);
  };

  return (
    <div>
      <div>
        <h1>Hi, Richard</h1>
        <p>
          Welcome back to your <span>Money Manager</span>
        </p>
      </div>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <p>Your Balance</p>
          <p>Rs {balance}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <p>Your Income </p> <p>Rs {income}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <p>Your Expenses</p> <p>Rs {expenses}</p>
        </div>
      </div>
      <div>
        <MoneyDetails transactionDetails={transactionDetails} />
        <ul>
          <li>Title Amount Type</li>
          {historyList.map((each) => (
            <TranscationItem
              key={each.id}
              historyItem={each}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MoneyManager;
