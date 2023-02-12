import React from "react";

function TodoForm({ addTodo, newTodo, setNewTodo }) {
  return (
    <form className="mt-3" onSubmit={addTodo}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;