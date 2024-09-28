import React, { useState } from "react";

const LoginApp = () => {
  let [title, setTitle] = useState(true);
  return (
    <div>
      {title ? <h1>Please login</h1> : <h1>Welcome User</h1>}
      <button
        onClick={() => {
          setTitle(!title);
        }}
      >
        {title ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default LoginApp;
