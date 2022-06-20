<<<<<<< HEAD
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/Todo";
function App() {
  const todos = [new Todo("learn react"), new Todo("learn typescript")];

  return <Todos items={todos} />;
=======
import React from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
>>>>>>> 14c45fdb4d8dabe02e2be1edd4d5658ecb1b4451
}

export default App;
