//import GoogleSuggestions from './components/GoogleSuggestions'

// import './App.css'

const suggestionsList = [
  { id: 1, suggestion: "Price of Ethereum" },
  { id: 2, suggestion: "Oculus Quest 2 specs" },
  { id: 3, suggestion: "Tesla Share Price" },
  { id: 4, suggestion: "Price of Ethereum today" },
  { id: 5, suggestion: "Latest trends in AI" },
  { id: 6, suggestion: "Latest trends in ML" },
];

// const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

// export default App


export default function GoogleSuggestions() {
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        alt="google logo"
      />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          alt="search icon"
        />
      </div>
      <input type="text" name="" id="" />
      <ul style={{ listStyle: "none" }}>
        {suggestionsList.map((cv) => (
          <li ref={cv.id}>
            <div>
              <p>{cv.suggestion}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
                alt="arrow"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
