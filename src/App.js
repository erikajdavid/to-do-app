import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
      const newTask = {
          id: uuidv4(),
          content: task,
      };
      setTasks([...tasks, newTask]);
  }

  const removeTask = (taskId) => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
  }

  const editTask = (taskId, newContent) => {
      const updatedTasks = tasks.map(task => {
          if (task.id === taskId) {
              return { ...task, content: newContent };
          }
          return task;
      });
      setTasks(updatedTasks);
  }

  return (
      <div className="App">
          <h1>Get shit done</h1>
          <ToDoForm addTask={addTask} />
          <ToDoList tasks={tasks} removeTask={removeTask} editTask={editTask} />
      </div>
  );
}

export default App;