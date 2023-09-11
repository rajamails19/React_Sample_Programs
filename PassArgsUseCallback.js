import React, { useState, useCallback } from 'react';

function PassArgsUseCallback() {
  const [value, setValue] = useState('');

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh"
  };


  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div style={centerStyle}>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
}

export default PassArgsUseCallback;
