import React, { useState } from 'react';

function AddTaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={handleTaskChange}
      />
      <button className="btn"type="submit">Add</button>
    </form>
  );
}

export default AddTaskInput;

