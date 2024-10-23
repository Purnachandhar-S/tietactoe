import React from "react";

export default function TranscationItem(props) {
  const { HistoryItems, onDelete } = props;
  const onItemDelete = () => {
    console.log(HistoryItems.id);
    onDelete(HistoryItems.id);
  };
  return (
    <div>
      <h1>History</h1>
      <ul>
        {HistoryItems.map((each) => (
          <li key={each.id}>
            {each.id} <button onClick={onItemDelete}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
