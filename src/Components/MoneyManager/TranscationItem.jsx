// import React from "react";

// export default function TranscationItem(props) {
//   const { HistoryItems, onDelete } = props;
//   const onItemDelete = () => {
//     console.log(HistoryItems.id);
//     onDelete(HistoryItems.id);
//   };
//   return (
//     <div>
//       <h1>History</h1>
//       <ul>
//         {HistoryItems.map((each) => (
//           <li key={each.id}>
//             {each.id} <button onClick={onItemDelete}>delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
{
  /* 
  Your React component has a few issues that need addressing:

Passing props and state between components:

In MoneyManager, you have a historyList being used in onDelete, but it is not defined. You probably meant to pass tranHistory from MoneyDetails into TranscationItem.
You’re passing transactionDetails to MoneyDetails in MoneyManager, but transactionDetails is not defined anywhere.
The onDelete function:

The onDelete function in TranscationItem is not using the correct id for each item. The onItemDelete function always refers to HistoryItems.id which will be undefined because HistoryItems is an array. You should pass the correct id to the onItemDelete function within the map.
Component export:

In the last line of your code, export default MoneyManager(); should just be export default MoneyManager;. The function call MoneyManager() will immediately invoke the function instead of exporting the component itself.
  */
}
{
  /*import React, { useState } from "react";
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

function TransactionItem(props) {
  const { historyItems, onDelete } = props;

  return (
    <div>
      <h1>History</h1>
      <ul>
        {historyItems.map((each) => (
          <li key={each.id}>
            {each.title} - {each.amount} - {each.type}
            <button onClick={() => onDelete(each.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MoneyDetails(props) {
  const { transactionDetails } = props;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Income");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    };
    transactionDetails(newTransaction);
    setTitle("");
    setAmount(0);
    setType("Income");
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
        />
        <label htmlFor="money">Money</label>
        <input
          type="number"
          value={amount}
          id="money"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
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

  const transactionDetails = (newTransaction) => {
    setHistoryList((prevHistory) => [...prevHistory, newTransaction]);
  };

  const onDelete = (id) => {
    const updatedHistory = historyList.filter((each) => each.id !== id);
    setHistoryList(updatedHistory);
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
          <p>Your Income</p>
          <p>Rs 0</p>
        </div>
        <div>
          <p>Your Expenses</p>
          <p>Rs 0</p>
        </div>
      </div>
      <div>
        <MoneyDetails transactionDetails={transactionDetails} />
        <TransactionItem historyItems={historyList} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default MoneyManager;
*/
}
{
  /* import React, { useState } from "react";
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
    console.log(historyItem);
    onDelete(historyItem.id);
  };

  return (
    <li>
      {`${historyItem.title} ${historyItem.amount} ${historyItem.type}`}
      <button onClick={onItemDelete}>delete</button>
    </li>
  );
}

function MoneyDetails(props) {
  const { transactionDetails } = props;
  const [title, setTitle] = useState("f");
  const [amount, setAmount] = useState(100);
  const [type, setType] = useState("Income");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    };
    // setTranHistory([...tranHistory, newElement]);
    // instead of creating and sending list just send the element directly
    transactionDetails(newTransaction);
    // setTitle("");
    // setAmount('');
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

  const transactionDetails = (newTransaction) => {
    let initial = 0;
    let inc = 0;
    let exp = 0;
    for (let i in historyList) {
      if (i.type === "Income") {
        initial += i.amount;
        inc += i.amount;
      } else {
        initial -= i.amount;
        exp += i.amount;
      }
    }
    setBalance(initial);
    setIncome(inc);
    setExpenses(exp);

    setHistoryList((prevHistory) => [...prevHistory, newTransaction]);
  };

  const onDelete = (id) => {
    const updatedHistory = historyList.filter((each) => each.id !== id);
    setHistoryList(updatedHistory);
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
          <p>RS {balance}</p>
        </div>
        <div>
          <p>Your Income </p> <p>Rs {income}</p>
        </div>
        <div>
          <p>Your Expenses</p> <p>Rs {expenses}</p>
        </div>
      </div>
      <div>
        <MoneyDetails transactionDetails={transactionDetails} />
        <ul>
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
*/
}
