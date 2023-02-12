import React from "react";

function TodoCounter({ todos }) {
  const completedTodos = todos.filter(todo => todo.completed).length;
  const remainingTodos = todos.length - completedTodos;

  return (
    <div className="mt-3">
      <p>
        Completed: {completedTodos}, Remaining: {remainingTodos}
      </p>
    </div>
  );
}

export default TodoCounter;