import React from "react";

const DenominationItem = (props) => {
  const { cv, handleDebit } = props;

  return <button onClick={() => handleDebit(cv.value)}>{cv.value}</button>;
};

export default DenominationItem;
