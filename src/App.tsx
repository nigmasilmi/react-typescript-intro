import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo.model";

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // crate a function that adds a new todo to the list
  const todoAddHandler = (text: string) => {
    setTodos((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text: text },
    ]);
  };

  // function to delete a todo
  const todoDeleteHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      {/* pass the function as prop */}
      <NewTodo onAddTodo={todoAddHandler} />
      {/* pass the function to delete as prop */}
      <TodoList onDeleteTodo={todoDeleteHandler} items={todos} />
    </div>
  );
};

export default App;
