import React, { useState } from 'react';

const ToDoForm = ( {addTask} ) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput('');
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form action="#" method="#" className="toDoForm" name="toDoForm" onSubmit={handleSubmit}>
            <label htmlFor="input"></label>
            <input
                type="text"
                name="input"
                className="toDoInput"
                onChange={handleInputChange}
                value={input}
                placeholder="What do you need to do today?"
                required
            />
            <button type="submit"><i class="fa-solid fa-plus faPlus"></i></button>
        </form>
    )
}

export default ToDoForm;

