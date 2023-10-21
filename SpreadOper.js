import React from 'react';

function App() {
  // Example data
  const response = {
    data: {
      response: {
        name: 'John',
        age: 30,
      },
    },
  };

  // Adding a new property using the spread operator
  const modifiedResponse = {
    ...response.data.response,
    country: 'USA',
  };

  // Extracting data from the modified response
  const { name, age, country } = modifiedResponse;

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}

export default App;
