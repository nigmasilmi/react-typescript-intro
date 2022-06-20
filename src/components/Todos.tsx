<<<<<<< HEAD
import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
interface TodosProps {
  items: Todo[];
  children?: React.ReactNode | React.ReactNode[];
}

const Todos: React.FunctionComponent<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} item={item} />
=======
import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((ele) => (
        <TodoItem
          key={ele.id}
          todoText={ele.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, ele.id)}
        />
>>>>>>> 14c45fdb4d8dabe02e2be1edd4d5658ecb1b4451
      ))}
    </ul>
  );
};

export default Todos;
