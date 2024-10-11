// import React from "react";

// const DenominationItem = (props) => {
//   const { cv, handleDebit } = props;

//   return <button onClick={() => handleDebit(cv.value)}>{cv.value}</button>;
// };

// export default DenominationItem;

const DenominationItem = (props) => {
  const { denominationDetails, updateBalance } = props;
  const { value } = denominationDetails;

  //   onClickDenomination = () => {
  //     updateBalance(value)
  //   }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={() => updateBalance(value)}
      >
        {value}
      </button>
    </li>
  );
};

export default DenominationItem;
