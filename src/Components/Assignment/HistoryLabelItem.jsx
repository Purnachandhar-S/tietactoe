import { useState } from "react";

function HistoryItems(props) {
  const { historyLabelDetails, deleteItem } = props;

  const onDelete = () => {
    deleteItem(historyLabelDetails.id);
  };

  return (
    <li>
      <div style={{ display: "flex" }}>
        <p> {historyLabelDetails.timeAccessed}</p>
        <img src={historyLabelDetails.logoUrl} alt="domain logo" />
        <p> {historyLabelDetails.title}</p>
        <p> {historyLabelDetails.domainUrl}</p>
        <button type="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
}

function HistoryApp(props) {
  const { historyDetails } = props;
  const [searchInput, setSearchInput] = useState("");
  const [filteredHistory, setFilteredHistory] = useState(historyDetails); // new state to handle filtered list

  const onChangeSearchInput = (event) => {
    const newSearchInput = event.target.value;
    setSearchInput(newSearchInput);

    // update the filtered list based on search input
    const updatedSearchResult = historyDetails.filter((each) =>
      each.title.toLowerCase().includes(newSearchInput.trim().toLowerCase())
    );
    setFilteredHistory(updatedSearchResult);
  };

  // how to delete the items
  const deleteItem = (id) => {
    const filteredList = filteredHistory.filter((each) => each.id !== id);
    setFilteredHistory(filteredList);
  };

  return (
    <div>
      <h1>Jai Sree Krishna</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/search-img.png"
        alt="search"
      />
      <input type="search" onChange={onChangeSearchInput} value={searchInput} />
      <ul style={{ listStyle: "none" }}>
        {filteredHistory.length > 0 ? (
          filteredHistory.map((each) => (
            <HistoryItems
              key={each.id}
              historyLabelDetails={each}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <p> There is no history to show</p>
        )}
      </ul>
    </div>
  );
}

export default HistoryApp;

// import {useState} from 'react'

// function HistoryComponent(props) {
//   const {historyDetails} = props
//   const [searchInput, setSearchInput] = useState('')
//   const []

//   const onChangeSearchInput = event => {
//     console.log(event.target.value)
//     setSearchInput(event.target.value)
//   }

//   const ResultList = historyDetails.filter(each =>
//     each.title.toLowerCase().includes(searchInput),
//   )
//   return (
//     <div>
//       <input type="search" onChange={onChangeSearchInput} value={searchInput} />
//       {ResultList.map(each => (
//         <div>{each.title}</div>
//       ))}
//     </div>
//   )
// }

// export default HistoryComponent

// function HistoryLabelItem(props) {
//   const { ItemDetails, deleteHistory } = props;
//   const { id, timeAccessed, logoUrl, title, domainUrl } = ItemDetails;

//   const onDelete = () => {
//     deleteHistory(id);
//   };

//   return (
//     <li key={id}>
//       <div style={{ display: "flex", alignItems: "stretch" }}>
//         <p>{timeAccessed}</p>
//         <img src={logoUrl} alt="domain logo" />
//         <p>{title}</p>
//         <p>{domainUrl}</p>
//         <button onClick={onDelete}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
//             alt="delete"
//           />
//         </button>
//       </div>
//     </li>
//   );
// }
// export default HistoryLabelItem;
