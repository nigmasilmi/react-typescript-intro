import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
const App: React.FunctionComponent = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];

  // crate a function that adds a new todo to the list
  const todoAddHandler = (text: string) => {
    console.log(text);
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
