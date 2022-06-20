import React from "react";

interface ITodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FunctionComponent<ITodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
