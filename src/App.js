import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    return (
        <div className="App">
          <h1>Get shit done</h1>
            <ToDoForm addTask={addTask} />
            <ToDoList tasks={tasks} />
        </div>
    );
}

export default App;