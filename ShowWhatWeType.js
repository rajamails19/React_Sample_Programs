import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState("");

  const handleChar = (e) => {
    setShow(e.target.value);
  };

  return (
    <div className="App">
      <h1> Welcome {show} </h1>
      <br />
      <input type="text" onChange={handleChar} />
    </div>
  );
}
