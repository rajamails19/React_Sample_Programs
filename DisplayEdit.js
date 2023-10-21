import React, { useState } from 'react';

function App() {
  const initialData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  };

  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can implement data saving logic here, e.g., send data to an API
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="container">
      <h1>User Profile</h1>
      <div className="user-info">
        <div className="field">
          <label>First Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{data.firstName}</span>
          )}
        </div>
        <div className="field">
          <label>Last Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{data.lastName}</span>
          )}
        </div>
        <div className="field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{data.email}</span>
          )}
        </div>
      </div>
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
}

export default App;
