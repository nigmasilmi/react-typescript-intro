import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FunctionComponent<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    // call the prop function
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSumbitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTodo;
