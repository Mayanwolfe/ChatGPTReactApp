import React, { useState } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function TodoListContainer() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a to-do app", completed: false },
    { text: "Celebrate!", completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = index => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = index => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossOrigin="anonymous"
      />
      <div className="container mt-5">
        <h1 className="text-center">My To-Do List</h1>
        <TodoCounter todos={todos} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        <TodoForm addTodo={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
      </div>
    </div>
  );
}

export default TodoListContainer;