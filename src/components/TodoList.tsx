import React from "react";
import classes from "./TodoList.module.css";

interface ITodosProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FunctionComponent<ITodosProps> = (props) => {
  // excecute the function that comes from the parent

  return (
    <ul className={classes.ulStyle}>
      {props.items.map((todo) => (
        <li key={todo.id} className={classes.liStyle}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
