import React from "react";

const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}> {number} </li>
      ))}
    </ul>
  );
};

export default App;
