import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const newTask = {
            id: uuidv4(), // Generate a unique ID
            content: task,
        };
        console.log(newTask);
        setTasks([...tasks, newTask]);
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
