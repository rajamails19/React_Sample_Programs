123
import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Actions
const ADD_TASK = 'ADD_TASK';

function addTask(task) {
  return { type: ADD_TASK, payload: task };
}

// Reducer
const initialState = {
  tasks: [],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}

// Store
const store = createStore(taskReducer);

// Components
function AddTask() {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (taskName) {
      dispatch(addTask({ id: Date.now(), name: taskName, completed: false }));
      setTaskName('');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} {task.completed ? '(Completed)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

// App Component
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Task Management App</h1>
        <AddTask ></AddTask>
        <TaskList ></TaskList>
      </div>
    </Provider>
  );
}

export default App;
