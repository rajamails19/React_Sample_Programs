import React, { useState, useCallback } from 'react';

function ConditionaluseCallback() {
  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh"
  };
  
  const [show, setShow] = useState(false);

  const toggle = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
     <div style = {centerStyle}>
      <button onClick={toggle}>Toggle</button>
      {show && <p>Content to show</p>}
    </div>
  );
}

export default ConditionaluseCallback;
