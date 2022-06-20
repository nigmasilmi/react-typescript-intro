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
      ))}
    </ul>
  );
};

export default Todos;
