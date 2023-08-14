import React, { useState } from 'react';
import './App.css';

function ToDoList({ tasks, removeTask, editTask }) {
    const [editingTasks, setEditingTasks] = useState({});
    const [editedContents, setEditedContents] = useState({});
    
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

    return (
        <ul>
            {tasks.map(task => (
                <li className="displayTask" key={task.id}>
                    <div>
                        {editingTasks[task.id] ? (
                            <div>
                                <input
                                    type="text"
                                    defaultValue={task.content}
                                    onChange={(e) => handleInputChange(task.id, e.target.value)}
                                    onBlur={() => handleSave(task.id)}
                                />
                                <button onClick={() => handleSave(task.id)}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <p>{task.content}</p>
                                <i className="fa-regular fa-pen-to-square faEdit" onClick={() => handleEdit(task.id)}></i>
                                <i className="fa-regular fa-trash-can faTrash" onClick={() => removeTask(task.id)}></i>
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;






