import React, { useState } from "react";

const App = () => {
  const [age, setAge] = useState(1);
  const [sibling, setSibling] = useState(0);

  const handleAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      Hello World <br />
      <h1> My Age is {age} </h1>
      <br />
      <button onClick={handleAge}> Increase Age </button>
      <button onClick={() => setSibling(sibling + 1)}>
        Increase Siblings{" "}
      </button>
      <h2> I have {sibling} siblings </h2>
    </div>
  );
};

export default App;
