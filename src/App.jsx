import React, { useState, useEffect } from 'react';
import AddTaskInput from './components/AddTaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // need state to keep track of the value in the input
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // get the tasks from localStorage
    const storedTasks = localStorage.getItem('tasks');
    //if they are stored
    if (storedTasks) {
      //return the parsed JSON object back to a javascript object
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // useEffect to run once the component mounts
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // add the tasks as a dependency because we want to update the
    // localStorage anytime the tasks state changes
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
