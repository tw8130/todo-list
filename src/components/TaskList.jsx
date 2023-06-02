import React from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
