
const handleSubmit = (e) => {
    e.preventDefault();
}

const ToDoForm = () => {
    return (
        <form action="#" method="#" className="toDoForm" name="toDoForm" onSubmit={() => handleSubmit}>
            <label forHTML="input"></label>
            <input type="text" name="input" className="toDoInput" placeholder="What do you need to do today?" required></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default ToDoForm;