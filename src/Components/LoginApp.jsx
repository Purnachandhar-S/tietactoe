import React, { useState } from "react";

const LoginApp = () => {
  let [title, setTitle] = useState(false);
  function myFunction(prevState) {
    setTitle((title = !prevState.title));
  }
  return (
    <div>
      {console.log(title)}
      <button onClick={myFunction}>Login</button>
    </div>
  );
};

export default LoginApp;
