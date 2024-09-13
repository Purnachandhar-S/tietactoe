import React from "react";
//This is from the Lists and keys coding practise 3 Q1

// Heading.jsx

// const Heading = ({ text }) => {
//   return <h1>{text}</h1>;
// };

const Heading = (props) => {
  const { BannerDetails } = props;
  const { id, headerText, description, className } = BannerDetails;
  return (
    <>
      <li id={id}>
        <div className={className}>
          <div>
            <h1>{headerText}</h1>
            <p>{description}</p>
            <button>Show more</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Heading;
