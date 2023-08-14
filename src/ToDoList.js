import React from 'react';

const ToDoList = ({ tasks, removeTask }) => {
    return (
        <div className="toDoList">
            {tasks.map((task) => (
                <div className="displayTask" key={task.id}>
                    <p>{task.content}</p>
                    <i className="fa-regular fa-pen-to-square faEdit"></i>
                    <i className="fa-regular fa-trash-can faTrash" onClick={() => removeTask(task.id)}></i>
                </div>
            ))}
        </div>
    )
}

export default ToDoList;
