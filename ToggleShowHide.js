import React, { useState } from "react";

const App = () => {
  let message = null;
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  console.log("hi " + show);

  if (show) {
    message = " This was hiding in that button ";
  }
  return (
    <div>
      <h1> Hello </h1>
      <button onClick={toggle}>
        {" "}
        {!show ? "Show Message" : "Hide Message"}
      </button>
      <br />
      <br />

      {message}
      <br />
      {show ? "This was hidden" : ""}
    </div>
  );
};

export default App;
