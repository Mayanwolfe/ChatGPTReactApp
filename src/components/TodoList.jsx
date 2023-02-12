import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`list-group-item ${todo.completed ? "bg-success" : ""}`}
        >
          <span onClick={() => toggleTodo(index)}>
            {todo.text}
            {todo.completed ? (
              <span className="badge badge-pill badge-light ml-2">
                Completed
              </span>
            ) : null}
          </span>
          <button
            className="btn btn-danger btn-sm ml-2"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;