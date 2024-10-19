// import React, { useState } from "react";

// // Example data: Capitals and their countries
// const capitalCountryData = {
//   Tokyo: "Japan",
//   Paris: "France",
//   Berlin: "Germany",
//   Canberra: "Australia",
//   Ottawa: "Canada",
// };

// const CapitalDropdown = () => {
//   // State to track selected capital and country
//   const [selectedCapital, setSelectedCapital] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");

//   // Handle dropdown change
//   const handleCapitalChange = (event) => {
//     const capital = event.target.value;
//     setSelectedCapital(capital);
//     setSelectedCountry(capitalCountryData[capital]);
//   };

//   return (
//     <div>
//       <h2>Select a Capital</h2>
//       {/* Dropdown menu */}
//       <select value={selectedCapital} onChange={handleCapitalChange}>
//         <option value="">-- Select a Capital --</option>
//         {Object.keys(capitalCountryData).map((capital) => (
//           <option key={capital} value={capital}>
//             {capital}
//           </option>
//         ))}
//       </select>

//       {/* Show the selected country */}
//       {selectedCountry && (
//         <div>
//           <h3>Selected Country: {selectedCountry}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CapitalDropdown;
import React, { useState } from "react";

const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India",
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom",
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland",
  },
];

const CapitalDropdown = () => {
  // State to track selected capital and country
  const [selectedCapitalId, setSelectedCapitalId] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // Handle dropdown change
  const handleCapitalChange = (event) => {
    const selectedId = event.target.value;
    setSelectedCapitalId(selectedId);

    // Find the selected capital object from the list
    const selectedCapital = countryAndCapitalsList.find(
      (item) => item.id === selectedId
    );

    // Update the country state
    setSelectedCountry(selectedCapital ? selectedCapital.country : "");
  };

  return (
    <div>
      <h2>Select a Capital</h2>
      {/* Dropdown menu */}
      <select value={selectedCapitalId} onChange={handleCapitalChange}>
        <option value="">-- Select a Capital --</option>
        {countryAndCapitalsList.map((capital) => (
          <option key={capital.id} value={capital.id}>
            {capital.capitalDisplayText}
          </option>
        ))}
      </select>

      {/* Show the selected country */}
      {selectedCountry && (
        <div>
          <h3>Selected Country: {selectedCountry}</h3>
        </div>
      )}
    </div>
  );
};

export default CapitalDropdown;
