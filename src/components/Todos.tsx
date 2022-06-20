import React from "react";
interface ITodosProps {
  items: { id: string; text: string }[];
}

const Todos: React.FunctionComponent<ITodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
