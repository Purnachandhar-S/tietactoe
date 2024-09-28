import React, { useState } from "react";

const LoginApp = () => {
  let [title, setTitle] = useState(true);
  function myFunction() {
    setTitle(!title);
  }
  return (
    <div>
      {console.log(title)}
      {title ? <h1>Login</h1> : <h1>Welcome</h1>}
      <button onClick={myFunction}>Login</button>
    </div>
  );
};

export default LoginApp;
