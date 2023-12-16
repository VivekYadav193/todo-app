import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import './AddTodo.css'; // Import your CSS file

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form className="add-todo-form" onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-todo-button">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
