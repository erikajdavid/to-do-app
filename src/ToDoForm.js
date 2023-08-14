import { useState } from 'react';

const ToDoForm = () => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput ('');
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form action="#" method="#" className="toDoForm" name="toDoForm" onSubmit={handleSubmit}>
            <label htmlFor="input"></label>
            <input type="text" name="input" className="toDoInput" onChange={handleInputChange} value={input}  placeholder="What do you need to do today?" required></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default ToDoForm