import React, { useState } from 'react';
import './App.css';

function ToDoList({ tasks, removeTask, editTask }) {
    const [editingTasks, setEditingTasks] = useState({});
    const [editedContents, setEditedContents] = useState({});
    const [completedTasks, setCompletedTasks] = useState({}); 

    
    const handleEdit = (taskId) => {
        setEditingTasks(prevState => ({
            ...prevState,
            [taskId]: true,
        }));
    }

    const handleSave = (taskId) => {
        const newContent = editedContents[taskId];
        if (newContent !== undefined && newContent.trim() !== '') {
            editTask(taskId, newContent);
            setEditingTasks(prevState => ({
                ...prevState,
                [taskId]: false,
            }));
        }
    }

    const handleInputChange = (taskId, newValue) => {
        setEditedContents(prevState => ({
            ...prevState,
            [taskId]: newValue,
        }));
    }

    const toggleComplete = (taskId) => {
        setCompletedTasks(prevState => ({
            ...prevState,
            [taskId]: !prevState[taskId], 
        }));
    }


    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {editingTasks[task.id] ? (
                        <div className="updateTask">
                            <input
                                type="text"
                                defaultValue={task.content}
                                onChange={(e) => handleInputChange(task.id, e.target.value)}
                                onBlur={() => handleSave(task.id)}
                            />
                            <button onClick={() => handleSave(task.id)}>Update</button>
                        </div>
                    ) : (
                        <div className={`displayTask ${completedTasks[task.id] ? 'completed' : ''}`}>
                            {completedTasks[task.id] ? (
                                <i className="fa-solid fa-check" onClick={() => toggleComplete(task.id)}></i>
                            ) : (
                                <i className="fa-regular fa-circle faCircle" onClick={() => toggleComplete(task.id)}></i>
                            )}
                            <p>{task.content}</p>
                            <i className="fa-regular fa-pen-to-square faEdit" onClick={() => handleEdit(task.id)}></i>
                            <i className="fa-regular fa-trash-can faTrash" onClick={() => removeTask(task.id)}></i>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;






