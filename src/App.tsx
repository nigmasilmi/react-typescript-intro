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
  return (
    <div>
      {/* pass the function as prop */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
