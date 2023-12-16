import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import './Todos.css'; // Import your CSS file

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="todos-container">
      <h1>Todos</h1>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="remove-button"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
