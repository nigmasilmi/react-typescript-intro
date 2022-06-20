<<<<<<< HEAD
import Todo from "../models/Todo";

interface TodoItemProps {
  item: Todo;
  children?: React.ReactNode | React.ReactNode[];
}

const TodoItem: React.FunctionComponent<TodoItemProps> = (props) => {
  return <li>{props.item.text}</li>;
=======
import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  todoText: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.todoText}
    </li>
  );
>>>>>>> 14c45fdb4d8dabe02e2be1edd4d5658ecb1b4451
};

export default TodoItem;
