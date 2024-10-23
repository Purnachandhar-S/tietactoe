import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function MoneyDetails(props) {
  const { transactionDetails } = props;
  const [title, setTitle] = useState("f");
  const [amount, setAmount] = useState(1);
  const [type, setType] = useState("Income");
  const [tranHistory, setTranHistory] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    const newElement = {
      id: uuidv4(),
      title,
      amount,
      type,
    };
    setTranHistory([...tranHistory, newElement]);
  };
  transactionDetails(tranHistory);

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="money">Money</label>
        <input
          type="number"
          value={amount}
          id="money"
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="type">Type</label>
        <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
