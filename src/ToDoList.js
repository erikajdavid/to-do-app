import React from 'react';

const ToDoList = ({ tasks }) => {
    return(
        <div className="toDoList">
            {tasks.map((task, index) => (
                <div className="displayTask" key={index}>
                    <p>{task}</p>
                    <i className="fa-regular fa-pen-to-square faEdit"></i>
                    <i className="fa-regular fa-trash-can faTrash"></i>
                </div>
            ))}
        </div>
    )
}

export default ToDoList;