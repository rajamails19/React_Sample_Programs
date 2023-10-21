import React, { useState } from 'react';

function App() {
  // Example data: A list of users
  const initialUsers = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 28 },
  ];

  // State to manage the list of users
  const [users, setUsers] = useState(initialUsers);

  // State to track whether the "Add User" button has been clicked
  const [userAdded, setUserAdded] = useState(false);

  // Function to add a new user to the list
  const addUser = () => {
    if (!userAdded) {
      // Create a new user object
      const newUser = {
        id: users.length + 1, // Generate a new ID
        name: 'Bob',
        age: 25,
      };

      // Use the spread operator to add the new user to the list
      setUsers([...users, newUser]);

      // Set userAdded to true to prevent further additions
      setUserAdded(true);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
      <button onClick={addUser} disabled={userAdded}>
        Add User
      </button>
    </div>
  );
}

export default App;
