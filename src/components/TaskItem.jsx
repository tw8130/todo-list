import React, { useState } from 'react';

function TaskItem({ task, index, deleteTask, updateTask }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = () => {
    deleteTask(index);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleTaskChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editedTask.trim() !== '') {
      updateTask(index, editedTask);
      setEditMode(false);
    }
  };

  return (
    <li className="task-item">
      {!editMode ? (
        <div>
          <span>{task}</span>
          <div className="task-buttons">
            <button onClick={toggleEditMode}>Edit</button>
            <button className="btn2" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editedTask}
            onChange={handleTaskChange}
          />
          <div className="task-buttons2">
            <button className='btn1' type="submit">Save</button>
            <button className='btn3' onClick={toggleEditMode}>Cancel</button>
          </div>
        </form>
      )}
    </li>
  );
}

export default TaskItem;

