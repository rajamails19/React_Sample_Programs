import React, { useState, useCallback } from 'react';

function App() {
  const centerStyle = {
    alignItems: 'center',
    backgroundColor: 'orange',
    display: 'flex',

    flexDirection: 'column',
    justifyContent: 'center',

    minHeight: '100vh',
  };

  const [count, setCount] = useState(0);
  const [Age, setAge] = useState(0);
  const [showtxt, setShowtxt] = useState(' ');

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setShowtxt(e.target.value);
  };

  return (
    <div style={centerStyle}>
      <h1> Hello World </h1>
      <h2> count: {count} </h2>
      <h3> Age : {Age} </h3>
      <h4> {showtxt} </h4>
      <button onClick={handleClick}> Increment </button>
      <button onClick={() => setAge(Age + 1)}> Increase Age </button>
      <br />
      <br />
      <input type="tex" onChange={handleChange} />
    </div>
  );
}

export default App;

